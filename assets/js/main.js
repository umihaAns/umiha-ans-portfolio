/* Umiha Ans — portfolio interactions */
(function () {
  'use strict';

  var root = document.documentElement;
  var header = document.getElementById('siteHeader');
  var nav = document.getElementById('nav');
  var menuBtn = document.getElementById('menuBtn');
  var themeBtn = document.getElementById('themeToggle');
  var navLinks = nav ? Array.prototype.slice.call(nav.querySelectorAll('a')) : [];

  /* ---- theme: stored choice wins, otherwise follow the OS ---- */
  var stored = null;
  try { stored = localStorage.getItem('theme'); } catch (e) { /* private mode */ }

  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  root.setAttribute('data-theme', stored || (prefersDark.matches ? 'dark' : 'light'));

  prefersDark.addEventListener('change', function (e) {
    if (!stored) root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
  });

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      stored = next;
      try { localStorage.setItem('theme', next); } catch (e) { /* private mode */ }
    });
  }

  /* ---- mobile menu ---- */
  function closeMenu() {
    if (!nav) return;
    nav.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    navLinks.forEach(function (a) { a.addEventListener('click', closeMenu); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ---- header shadow once scrolled ---- */
  function onScroll() {
    if (header) header.classList.toggle('is-stuck', window.scrollY > 8);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- reveal on scroll ---- */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = document.querySelectorAll('.reveal');

  if (reduced || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

    reveals.forEach(function (el) { revealObserver.observe(el); });

    /* Safety net: nothing stays hidden for longer than a moment, whatever the
       observer does. */
    window.setTimeout(function () {
      reveals.forEach(function (el) { el.classList.add('is-visible'); });
    }, 2000);
  }

  /* ---- highlight the section currently in view ---- */
  var sections = navLinks
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (s) { navObserver.observe(s); });
  }

  /* ---- footer year ---- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
