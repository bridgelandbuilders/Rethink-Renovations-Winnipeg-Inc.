document.documentElement.classList.add('js');

// Mobile navigation
(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close' : 'Menu';
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = 'Menu';
      toggle.focus();
    }
  });
})();

// Selection grid: highlight the row and column of the hovered/focused cell
(() => {
  const matrix = document.querySelector('.matrix');
  if (!matrix) return;
  const clear = () => matrix.querySelectorAll('.is-hl, .is-target').forEach((el) => el.classList.remove('is-hl', 'is-target'));
  const mark = (cell) => {
    clear();
    const { row, col } = cell.dataset;
    matrix.querySelectorAll(`[data-row="${row}"], [data-col="${col}"]`).forEach((el) => el.classList.add('is-hl'));
    cell.classList.add('is-target');
  };
  matrix.querySelectorAll('.m-cell').forEach((cell) => {
    cell.addEventListener('pointerenter', () => mark(cell));
    cell.addEventListener('focus', () => mark(cell));
    cell.addEventListener('blur', clear);
  });
  matrix.addEventListener('pointerleave', clear);
})();

// Room page: collection switcher on small screens
document.querySelectorAll('.tier-switch').forEach((switcher) => {
  switcher.hidden = false;
  const targets = switcher.parentElement.querySelectorAll('[data-active]');
  const buttons = [...switcher.querySelectorAll('button')];
  const show = (id) => {
    targets.forEach((t) => (t.dataset.active = id));
    buttons.forEach((b) => b.setAttribute('aria-selected', String(b.dataset.show === id)));
  };
  buttons.forEach((b) => b.addEventListener('click', () => show(b.dataset.show)));
  const fromHash = location.hash.slice(1);
  if (buttons.some((b) => b.dataset.show === fromHash)) show(fromHash);
});

// Get started form
(() => {
  const form = document.querySelector('.lead-form');
  if (!form) return;
  const status = form.querySelector('.form-status');
  const params = new URLSearchParams(location.search);

  const room = params.get('room');
  if (room) {
    form.querySelectorAll('input[name="rooms"]').forEach((box) => {
      if (box.value.toLowerCase() === room.toLowerCase()) box.checked = true;
    });
  }
  if (params.get('topic') === 'designer') {
    const msg = form.querySelector('#message');
    if (msg && !msg.value) msg.value = 'I am an interior designer interested in the Founding Design Partner role.';
  }

  const setStatus = (text, type) => {
    status.textContent = text;
    status.className = 'form-status' + (type ? ` is-${type}` : '');
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    let firstInvalid = null;
    [name, email].forEach((f) => {
      const ok = f.value.trim() !== '' && f.checkValidity();
      f.setAttribute('aria-invalid', String(!ok));
      if (!ok && !firstInvalid) firstInvalid = f;
    });
    if (firstInvalid) {
      setStatus(firstInvalid === name ? 'Enter your name.' : 'Enter a valid email address, such as name@example.com.', 'error');
      firstInvalid.focus();
      return;
    }

    const data = new FormData(form);
    const endpoint = form.getAttribute('action');
    const button = form.querySelector('button[type="submit"]');

    if (form.hasAttribute('data-staging')) {
      setStatus('This is a design preview, so the form does not send yet. It will be connected before launch.', 'success');
      return;
    }

    if (!endpoint) {
      const to = form.dataset.email;
      if (!to) {
        setStatus('This form is not connected yet. Please try again later.', 'error');
        return;
      }
      const lines = [];
      for (const [k, v] of data.entries()) if (k !== '_gotcha' && v) lines.push(`${k}: ${v}`);
      location.href = `mailto:${to}?subject=${encodeURIComponent('Early list: ' + data.get('name'))}&body=${encodeURIComponent(lines.join('\n'))}`;
      return;
    }

    button.disabled = true;
    setStatus('Sending…');
    try {
      const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("You're on the early list. We'll be in touch when your collection opens.", 'success');
    } catch {
      setStatus('Your details were not sent. Check your connection and try again.', 'error');
    } finally {
      button.disabled = false;
    }
  });
})();


// Header shadow once the page scrolls
(() => {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const update = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  update();
  window.addEventListener('scroll', update, { passive: true });
})();

// Scroll reveals, ruler and frame drawing, timeline progress
(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('motion');

  // Elements that fade and rise in; siblings are staggered slightly.
  const REVEAL = [
    '.section-head', '.room-card', '.step-card', '.tile', '.cmp-row', '.framed', '.collage-inset',
    '.room-feature-copy', '.timeline-copy', '.timeline-media', '.callout', '.def-list > div',
    '.check-list li', '.standards-board > div', '.spec-sheet', '.compare-wrap', '.palettes',
    '.form-card', '.form-aside', '.cta-inner', '.tier-key > div', '.partner > *', '.matrix-note',
  ].join(',');
  // Elements that only need to know they are in view (rulers, frames, markers).
  const MARK = ['.ruler', '.dim-line', '.framed', '.room-feature-media', '.cmp-row', '.timeline-step'].join(',');

  const reveal = [...document.querySelectorAll(REVEAL)].filter((el) => !el.closest('.hero'));
  reveal.forEach((el) => {
    const siblings = [...el.parentElement.children].filter((c) => c.matches(REVEAL));
    const i = Math.min(siblings.indexOf(el), 5);
    el.style.setProperty('--d', `${i * 80}ms`);
    el.setAttribute('data-reveal', '');
  });
  const marks = [...document.querySelectorAll(MARK)].filter((el) => !el.closest('.hero'));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add('is-in');
        io.unobserve(el);
        if (el.hasAttribute('data-reveal')) {
          // Hand the element back to its normal hover styles once it has arrived.
          const delay = parseInt(el.style.getPropertyValue('--d'), 10) || 0;
          setTimeout(() => { el.removeAttribute('data-reveal'); el.style.removeProperty('--d'); }, 900 + delay);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
  );
  new Set([...reveal, ...marks]).forEach((el) => io.observe(el));

  // How it works: draw the dashed timeline as the reader moves down it
  const timeline = document.querySelector('.timeline');
  if (timeline) {
    let ticking = false;
    const draw = () => {
      ticking = false;
      if (!timeline.offsetParent) return;
      const r = timeline.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.75 - r.top) / r.height));
      timeline.style.setProperty('--p', p.toFixed(3));
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(draw); } };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('hashchange', () => setTimeout(draw, 50));
    draw();
  }
})();
