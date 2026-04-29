/* ─────────────────────────────────────────────────────────
   PORTFOLIO SCRIPT.JS
   ✅ JavaScript interactions:
      - Custom cursor (circle on cards, hand on buttons)
      - Card color change + ripple on click
      - Button color flash on click
      - Smooth scroll (nav + hero buttons)
      - Active nav highlight on scroll
      - Footer year auto-fill
      - Avatar initials live update
───────────────────────────────────────────────────────── */

/* ── Footer Year ──────────────────────────────────────── */
document.getElementById('year').textContent = new Date().getFullYear();

/* ── Custom Cursor ────────────────────────────────────── */
const cursor    = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');

let mouseX = 0, mouseY = 0;
let curX = 0, curY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top  = mouseY + 'px';
});

function animateCursor() {
  curX += (mouseX - curX) * 0.12;
  curY += (mouseY - curY) * 0.12;
  cursor.style.left = curX + 'px';
  cursor.style.top  = curY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

/* ── Cursor States ────────────────────────────────────── */
const allCards   = document.querySelectorAll('.card');
const allButtons = document.querySelectorAll('button, .btn-primary, .btn-outline');

allCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    document.body.classList.add('cursor-circle');
    document.body.classList.remove('cursor-hand');
  });
  card.addEventListener('mouseleave', () => {
    document.body.classList.remove('cursor-circle');
  });
});

allButtons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    document.body.classList.add('cursor-hand');
    document.body.classList.remove('cursor-circle');
  });
  btn.addEventListener('mouseleave', () => {
    document.body.classList.remove('cursor-hand');
  });
});

/* ── Card Click: Color Change + Ripple ────────────────── */
allCards.forEach(card => {
  const color = card.dataset.color || '#c8ff00';
  card.style.setProperty('--card-color', color);

  card.addEventListener('click', () => {
    if (card.classList.contains('clicked')) {
      card.classList.remove('clicked');
      card.style.background = '';
      return;
    }

    // Deselect siblings in same grid
    const parent = card.closest('.row, .timeline');
    if (parent) {
      parent.querySelectorAll('.card.clicked').forEach(c => {
        c.classList.remove('clicked');
        c.style.background = '';
      });
    }

    card.classList.add('clicked');
    card.style.background = hexToRgba(color, 0.12);
    createRipple(card, color);
  });
});

/* ── Button Click: Color Flash ────────────────────────── */
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.style.transition = 'none';
    btn.style.background = '#c8ff00';
    btn.style.color      = '#000';
    setTimeout(() => {
      btn.style.transition = '';
      btn.style.background = '';
      btn.style.color      = '';
    }, 300);
  });
});

document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.style.transition = 'none';
    const origBg    = btn.style.background;
    const origColor = btn.style.color;
    btn.style.transform  = 'scale(0.93)';
    btn.style.background = '#ff6b6b';
    btn.style.color      = '#fff';
    setTimeout(() => {
      btn.style.transition = '';
      btn.style.transform  = '';
      btn.style.background = origBg;
      btn.style.color      = origColor;
    }, 350);
  });
});

/* ── Smooth Scroll (nav buttons) ──────────────────────── */
document.querySelectorAll('.nav-btn[data-target]').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Close Bootstrap mobile menu after click
    const navMenu = document.getElementById('navMenu');
    if (navMenu && navMenu.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navMenu);
      bsCollapse.hide();
    }
  });
});

/* ✅ Named scrollToSection to avoid conflict with window.scrollTo */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── Ripple Effect ────────────────────────────────────── */
function createRipple(element, color) {
  const ripple = document.createElement('span');
  const size   = Math.max(element.offsetWidth, element.offsetHeight);

  ripple.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    border-radius: 50%;
    background: ${hexToRgba(color, 0.3)};
    top: 50%; left: 50%;
    transform: translate(-50%, -50%) scale(0);
    animation: rippleAnim 0.55s ease-out forwards;
    pointer-events: none;
    z-index: 0;
  `;

  if (!document.getElementById('ripple-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-style';
    style.textContent = `
      @keyframes rippleAnim {
        to { transform: translate(-50%,-50%) scale(2.5); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }

  element.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
}

/* ── Hex → RGBA Helper ────────────────────────────────── */
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/* ── Active Nav Highlight on Scroll ───────────────────── */
const sections = document.querySelectorAll('section[id]');
const navBtns  = document.querySelectorAll('.nav-btn[data-target]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navBtns.forEach(btn => {
        btn.style.color = (btn.dataset.target === entry.target.id) ? '#c8ff00' : '';
      });
    }
  });
}, { threshold: 0.35 });

sections.forEach(sec => observer.observe(sec));

/* ── Avatar initials: auto-update if name is changed ─── */
// (Developers can call this if they update the name dynamically)
function updateAvatarInitials(fullName) {
  const el = document.getElementById('avatarInitials');
  if (!el) return;
  const parts = fullName.trim().split(' ');
  const initials = parts.length >= 2
    ? parts[0][0].toUpperCase() + parts[parts.length - 1][0].toUpperCase()
    : parts[0].slice(0, 2).toUpperCase();
  el.textContent = initials;
}
