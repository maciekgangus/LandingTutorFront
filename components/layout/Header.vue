<template>
  <header
    class="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100"
  >
    <nav class="container-custom">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a
            href="#"
            @click.prevent="scrollToTop"
            class="flex items-center space-x-2 cursor-pointer"
          >
            <div
              class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                class="w-5 h-5 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <!-- Removed the text span for "Korepetycje" -->
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
          >
            {{ item.name }}
          </a>
        </div>

        <!-- CTA Button & Mobile Menu -->
        <div class="flex items-center space-x-4">
          <UiButton
            class="hidden sm:inline-flex"
            variant="primary"
            href="#contact"
          >
            Umów lekcję
          </UiButton>

          <!-- Mobile menu button -->
          <button
            @click="toggleMobileMenu"
            class="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </header>

  <!-- Mobile slide-over menu -->
  <teleport to="body">
    <div v-if="isMobileMenuOpen" class="fixed inset-0 z-[60]">
      <div
        class="absolute inset-0 bg-black/40"
        @click="isMobileMenuOpen = false"
      ></div>
      <div
        class="absolute inset-y-0 right-0 w-[85%] max-w-sm bg-white shadow-xl"
      >
        <LayoutMobileMenu @close="isMobileMenuOpen = false" />
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface NavigationItem {
  name: string;
  href: string;
  external?: boolean;
}

const navigation: NavigationItem[] = [
  { name: "O nas", href: "#about" },
  { name: "Przedmioty", href: "#subjects" },
  { name: "Nauczyciele", href: "/nauczyciele" },
  { name: "Cennik", href: "#pricing" },
  { name: "Kontakt", href: "#contact" },
];

const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>
