<template>
  <div class="min-h-screen bg-white">
    <!-- Skip to main content for accessibility -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
    >
      Przejdź do głównej treści
    </a>

    <!-- Header -->
    <LayoutHeader />

    <!-- Main Content -->
    <main id="main-content" class="pt-16" role="main">
      <slot />
    </main>

    <!-- Footer -->
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// Add smooth scrolling behavior
onMounted(() => {
  // Handle hash links for smooth scrolling
  const handleHashLinks = () => {
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }

  // Handle hash links on page load
  setTimeout(handleHashLinks, 100)

  // Handle hash link clicks
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement
    const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement

    if (anchor && anchor.hash) {
      event.preventDefault()
      const element = document.querySelector(anchor.hash)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
        // Update URL without triggering page reload
        history.pushState(null, '', anchor.hash)
      }
    }
  })
})

// SEO Meta tags
useHead({
  htmlAttrs: {
    lang: 'pl'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'theme-color', content: '#2563eb' },
    { name: 'msapplication-TileColor', content: '#2563eb' }
  ]
})
</script>

<style>
/* CSS Custom Properties for theming */
:root {
  /* Brand Colors */
  --color-primary-50: #eff6ff;
  --color-primary-100: #dbeafe;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;

  /* Neutral Colors */
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;

  /* Semantic Colors */
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-error: #ef4444;

  /* Shadows */
  --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-glow: 0 0 20px rgba(59, 130, 246, 0.3);

  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-2xl: 1rem;
  --radius-3xl: 1.5rem;
  --radius-4xl: 2rem;

  /* Spacing */
  --space-section: 6rem;
  --space-container: 1.5rem;

  /* Typography */
  --font-sans: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-display: 'Inter', system-ui, sans-serif;

  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);

  /* Z-index scale */
  --z-dropdown: 10;
  --z-sticky: 20;
  --z-fixed: 30;
  --z-modal: 40;
  --z-popover: 50;
  --z-tooltip: 60;
  --z-toast: 70;
}

/* Global styles */
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-family: var(--font-sans);
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  color: var(--color-gray-900);
  overflow-x: hidden;
}

/* Focus styles for accessibility */
*:focus {
  outline: 2px solid var(--color-primary-600);
  outline-offset: 2px;
}

*:focus:not(:focus-visible) {
  outline: none;
}

*:focus-visible {
  outline: 2px solid var(--color-primary-600);
  outline-offset: 2px;
}

/* Selection styles */
::selection {
  background-color: var(--color-primary-100);
  color: var(--color-primary-900);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--color-gray-100);
  border-radius: var(--radius-md);
}

::-webkit-scrollbar-thumb {
  background: var(--color-gray-300);
  border-radius: var(--radius-md);
  border: 2px solid var(--color-gray-100);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-gray-400);
}

::-webkit-scrollbar-corner {
  background: var(--color-gray-100);
}

/* Typography improvements */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  font-weight: 700;
  line-height: 1.2;
  color: var(--color-gray-900);
  text-wrap: balance;
}

p {
  text-wrap: pretty;
  line-height: 1.6;
}

/* Smooth transitions for all interactive elements */
a, button, input, textarea, select {
  transition: all var(--transition-normal);
}

/* Enhanced button reset */
button {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  font: inherit;
  cursor: pointer;
}

/* Link styles */
a {
  color: inherit;
  text-decoration: none;
}

/* Image optimization */
img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
}

/* Container utility */
.container-custom {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-container);
}

@media (min-width: 640px) {
  .container-custom {
    padding: 0 2rem;
  }
}

@media (min-width: 1024px) {
  .container-custom {
    padding: 0 3rem;
  }
}

/* Section spacing utility */
.pt-section {
  padding-top: var(--space-section);
}

.pb-section {
  padding-bottom: var(--space-section);
}

.py-section {
  padding-top: var(--space-section);
  padding-bottom: var(--space-section);
}

/* Typography scale */
.heading-xl {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
}

.heading-lg {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
}

.heading-md {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  line-height: 1.25;
}

.text-large {
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  line-height: 1.6;
}

/* Screen reader only utility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.focus\:not-sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: 0.5rem 1rem;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

/* Loading states */
.animate-skeleton {
  background: linear-gradient(
    90deg,
    var(--color-gray-200) 25%,
    var(--color-gray-100) 50%,
    var(--color-gray-200) 75%
  );
  background-size: 200% 100%;
  animation: skeleton-loading 1.5s infinite;
}

@keyframes skeleton-loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* Hover and interaction states */
.hover-lift {
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.hover-scale {
  transition: transform var(--transition-normal);
}

.hover-scale:hover {
  transform: scale(1.02);
}

/* Glass morphism utility */
.glass {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}

/* Gradient utilities */
.bg-gradient-primary {
  background: linear-gradient(135deg, var(--color-primary-500), var(--color-primary-700));
}

.bg-gradient-soft {
  background: linear-gradient(135deg, var(--color-gray-50), var(--color-primary-50));
}

/* Animation utilities */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-on-scroll.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* Reduce motion for users who prefer it */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .animate-on-scroll {
    opacity: 1;
    transform: none;
  }
}

/* Print styles */
@media print {
  * {
    background: transparent !important;
    color: black !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }

  a, a:visited {
    text-decoration: underline;
  }

  .sr-only {
    position: static;
    width: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    clip: auto;
    white-space: normal;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  :root {
    --color-gray-100: #ffffff;
    --color-gray-900: #000000;
  }
}
</style>
