/**
 * Portfolio - Sticky nav, smooth scroll, mobile menu, form validation
 */

(function () {
  'use strict';

  // ----- Sticky nav & mobile menu -----
  const header = document.querySelector('.header');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking a nav link (mobile)
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Smooth scroll for anchor links (respects scroll-margin if needed)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ----- Photo lightbox -----
  const avatarBtn = document.querySelector('.hero-avatar-btn');
  const lightbox = document.getElementById('photo-lightbox');
  const lightboxBackdrop = lightbox && lightbox.querySelector('.lightbox-backdrop');

  function openPhotoLightbox() {
    if (!lightbox) return;
    lightbox.hidden = false;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    lightbox.focus();
  }

  function closePhotoLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (avatarBtn && lightbox) {
    avatarBtn.addEventListener('click', openPhotoLightbox);
    if (lightboxBackdrop) {
      lightboxBackdrop.addEventListener('click', closePhotoLightbox);
    }
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox-backdrop') || e.target.closest('.lightbox-content')) {
        closePhotoLightbox();
      }
    });
    lightbox.setAttribute('tabindex', '-1');
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
        closePhotoLightbox();
      }
    });
  }

  // ----- Footer year -----
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ----- Contact form validation -----
  const form = document.getElementById('contact-form');
  if (form) {
    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const messageInput = form.querySelector('#message');
    const nameError = form.querySelector('#name-error');
    const emailError = form.querySelector('#email-error');
    const messageError = form.querySelector('#message-error');

    function showError(input, errorEl, message) {
      input.classList.add('error');
      errorEl.textContent = message;
    }

    function clearError(input, errorEl) {
      input.classList.remove('error');
      errorEl.textContent = '';
    }

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;

      clearError(nameInput, nameError);
      clearError(emailInput, emailError);
      clearError(messageInput, messageError);

      if (!nameInput.value.trim()) {
        showError(nameInput, nameError, 'Please enter your name.');
        valid = false;
      }

      if (!emailInput.value.trim()) {
        showError(emailInput, emailError, 'Please enter your email.');
        valid = false;
      } else if (!validateEmail(emailInput.value.trim())) {
        showError(emailInput, emailError, 'Please enter a valid email address.');
        valid = false;
      }

      if (!messageInput.value.trim()) {
        showError(messageInput, messageError, 'Please enter a message.');
        valid = false;
      }

      if (valid) {
        // Form is valid - in production you would send to backend or mailto
        alert('Thank you! Your message has been sent. (Replace this with real form submission.)');
        form.reset();
      }
    });

    // Clear errors on input
    nameInput.addEventListener('input', function () { clearError(nameInput, nameError); });
    emailInput.addEventListener('input', function () { clearError(emailInput, emailError); });
    messageInput.addEventListener('input', function () { clearError(messageInput, messageError); });
  }
})();
