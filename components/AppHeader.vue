<template>
  <header
    :class="headerClasses"
    role="banner"
  >
    <nav class="container-custom" role="navigation" aria-label="Główna nawigacja">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink
            to="/"
            class="flex items-center space-x-3 group"
            @click="scrollToTop"
            aria-label="Strona główna Korepetycje"
          >
            <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 transform-gpu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                class="w-6 h-6 text-white"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div class="hidden sm:block">
              <div class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                Korepetycje
              </div>
              <div class="text-xs text-gray-500 -mt-1">
                Profesjonalna edukacja
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-1">
          <template v-for="item in navigation" :key="item.name">
            <component
              :is="item.href.startsWith('#') ? 'a' : 'NuxtLink'"
              v-if="!item.dropdown"
              :href="item.href.startsWith('#') ? item.href : undefined"
              :to="!item.href.startsWith('#') ? item.href : undefined"
              :class="navLinkClasses"
              @click="handleNavClick($event, item)"
            >
              {{ item.name }}
            </component>

            <!-- Dropdown menu for items with children -->
            <div v-else class="relative group">
              <button
                :class="[navLinkClasses, 'flex items-center space-x-1']"
                @click="item.isOpen = !item.isOpen"
                :aria-expanded="item.isOpen"
                :aria-haspopup="true"
              >
                <span>{{ item.name }}</span>
                <svg
                  class="w-4 h-4 transition-transform duration-200"
                  :class="{ 'rotate-180': item.isOpen }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <!-- Dropdown content -->
              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
              >
                <div
                  v-if="item.isOpen"
                  class="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20"
                >
                  <a
                    v-for="child in item.children"
                    :key="child.name"
                    :href="child.href"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    @click="handleNavClick($event, child)"
                  >
                    {{ child.name }}
                  </a>
                </div>
              </transition>
            </div>
          </template>
        </div>

        <!-- CTA Button & Mobile Menu -->
        <div class="flex items-center space-x-4">
          <!-- Contact CTA Button -->
          <UiButton
            class="hidden sm:inline-flex"
            variant="primary"
            href="#contact"
            size="md"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Umów lekcję
          </UiButton>

          <!-- Mobile menu button -->
          <button
            @click="toggleMobileMenu"
            class="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            :aria-expanded="isMobileMenuOpen"
            aria-controls="mobile-menu"
            aria-label="Otwórz menu"
          >
            <svg
              class="w-6 h-6 transition-transform duration-200"
              :class="{ 'rotate-90': isMobileMenuOpen }"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                :d="isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile slide-over menu -->
    <teleport to="body">
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="isMobileMenuOpen" class="fixed inset-0 z-[60] lg:hidden">
          <!-- Backdrop -->
          <div
            class="absolute inset-0 bg-black/50 backdrop-blur-sm"
            @click="closeMobileMenu"
            aria-hidden="true"
          />

          <!-- Menu panel -->
          <transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="translate-x-0"
            leave-to-class="translate-x-full"
          >
            <div
              v-if="isMobileMenuOpen"
              id="mobile-menu"
              class="absolute inset-y-0 right-0 w-[85%] max-w-sm bg-white shadow-xl"
              role="dialog"
              aria-modal="true"
              aria-label="Menu nawigacji"
            >
              <!-- Mobile menu header -->
              <div class="flex items-center justify-between p-6 border-b border-gray-200">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <span class="text-lg font-semibold text-gray-900">Menu</span>
                </div>
                <button
                  @click="closeMobileMenu"
                  class="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  aria-label="Zamknij menu"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <!-- Mobile menu content -->
              <div class="flex flex-col h-full">
                <nav class="flex-1 px-6 py-8 space-y-2" role="navigation" aria-label="Menu mobilne">
                  <component
                    :is="item.href.startsWith('#') ? 'a' : 'NuxtLink'"
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href.startsWith('#') ? item.href : undefined"
                    :to="!item.href.startsWith('#') ? item.href : undefined"
                    class="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-colors duration-200"
                    @click="handleMobileNavClick($event, item)"
                  >
                    {{ item.name }}
                  </component>
                </nav>

                <!-- Mobile CTA -->
                <div class="p-6 border-t border-gray-200">
                  <UiButton
                    variant="primary"
                    href="#contact"
                    size="lg"
                    class="w-full"
                    @click="closeMobileMenu"
                  >
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Umów lekcję
                  </UiButton>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </transition>
    </teleport>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface NavigationItem {
  name: string
  href: string
  external?: boolean
  dropdown?: boolean
  children?: NavigationItem[]
  isOpen?: boolean
}

const navigation: NavigationItem[] = [
  { name: 'O nas', href: '#about' },
  { name: 'Przedmioty', href: '#subjects' },
  { name: 'Nauczyciele', href: '#teachers' },
  { name: 'Cennik', href: '#pricing' },
  { name: 'Opinie', href: '#reviews' },
  { name: 'Kontakt', href: '#contact' }
]

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const headerClasses = computed(() => {
  const base = 'fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out'
  const background = isScrolled.value
    ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-soft'
    : 'bg-white/80 backdrop-blur-md'

  return `${base} ${background}`
})

const navLinkClasses = computed(() => {
  return 'relative px-4 py-2 text-gray-700 hover:text-blue-600 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:scale-105 transform-gpu group'
})

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const handleNavClick = (event: Event, item: NavigationItem) => {
  if (item.href.startsWith('#')) {
    event.preventDefault()
    const element = document.querySelector(item.href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  } else if (!item.external) {
    // Let Nuxt handle internal navigation
    return
  }
}

const handleMobileNavClick = (event: Event, item: NavigationItem) => {
  handleNavClick(event, item)
  closeMobileMenu()
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

// Close mobile menu when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement
  const mobileMenu = document.getElementById('mobile-menu')

  if (isMobileMenuOpen.value && mobileMenu && !mobileMenu.contains(target)) {
    closeMobileMenu()
  }
}

// Handle escape key
const handleEscapeKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscapeKey)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('keydown', handleEscapeKey)
})
</script>