<template>
  <footer class="bg-gray-900 text-white" role="contentinfo">
    <div class="container-custom">
      <!-- Main footer content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
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
            <div>
              <div class="text-xl font-bold">Korepetycje</div>
              <div class="text-sm text-gray-400">Profesjonalna edukacja</div>
            </div>
          </div>

          <p class="text-gray-300 mb-6 max-w-md leading-relaxed">
            Oferujemy profesjonalne korepetycje z różnych przedmiotów.
            Pomagamy uczniom osiągać cele edukacyjne od ponad 8 lat.
            Zaufało nam już ponad 500 uczniów i rodziców.
          </p>

          <!-- Social Media -->
          <div class="flex space-x-4 mb-8">
            <a
              v-for="social in socialMedia"
              :key="social.name"
              :href="social.href"
              :aria-label="social.label"
              class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>

          <!-- Newsletter Signup -->
          <div class="bg-gray-800 rounded-lg p-6">
            <h3 class="text-lg font-semibold mb-3">Newsletter</h3>
            <p class="text-gray-300 text-sm mb-4">
              Otrzymuj porady edukacyjne i informacje o nowych kursach
            </p>
            <form @submit.prevent="subscribeNewsletter" class="flex space-x-2">
              <input
                v-model="newsletterEmail"
                type="email"
                placeholder="Twój adres email"
                required
                class="flex-1 px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                :disabled="isSubscribing"
              />
              <UiButton
                type="submit"
                variant="primary"
                size="sm"
                :loading="isSubscribing"
                :disabled="isSubscribing"
              >
                Zapisz się
              </UiButton>
            </form>
          </div>
        </div>

        <!-- Navigation Links -->
        <div>
          <h3 class="text-lg font-semibold mb-6">Nawigacja</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.name">
              <a
                :href="link.href"
                class="text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
                @click="handleFooterNavClick($event, link)"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Subjects -->
        <div>
          <h3 class="text-lg font-semibold mb-6">Przedmioty</h3>
          <ul class="space-y-3">
            <li v-for="subject in subjects" :key="subject.name">
              <a
                :href="subject.href"
                class="text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:text-white"
              >
                {{ subject.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-6">Kontakt</h3>
          <ul class="space-y-4">
            <li class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.16 10.68a11.027 11.027 0 005.395 5.395l1.293-4.064a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div>
                <a
                  href="tel:+48123456789"
                  class="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  +48 123 456 789
                </a>
                <div class="text-sm text-gray-400">Pn-Pt 8:00-20:00</div>
              </div>
            </li>

            <li class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <a
                  href="mailto:kontakt@korepetycje.pl"
                  class="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  kontakt@korepetycje.pl
                </a>
                <div class="text-sm text-gray-400">Odpowiadamy w 24h</div>
              </div>
            </li>

            <li class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <address class="text-gray-300 not-italic">
                  ul. Przykładowa 123<br>
                  00-001 Warszawa
                </address>
                <div class="text-sm text-gray-400">Spotkania online i stacjonarne</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-center md:text-left">
            <p class="text-gray-400 text-sm">
              &copy; {{ currentYear }} Korepetycje. Wszystkie prawa zastrzeżone.
            </p>
            <p class="text-gray-500 text-xs mt-1">
              Wykonane z ❤️ dla edukacji
            </p>
          </div>

          <div class="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <div class="flex space-x-6">
              <NuxtLink
                to="/privacy"
                class="text-gray-400 hover:text-white text-sm transition-colors duration-200 focus:outline-none focus:text-white"
              >
                Polityka prywatności
              </NuxtLink>
              <NuxtLink
                to="/terms"
                class="text-gray-400 hover:text-white text-sm transition-colors duration-200 focus:outline-none focus:text-white"
              >
                Regulamin
              </NuxtLink>
            </div>

            <!-- Back to top button -->
            <button
              @click="scrollToTop"
              class="flex items-center space-x-2 text-gray-400 hover:text-white text-sm transition-colors duration-200 focus:outline-none focus:text-white"
              aria-label="Przewiń do góry"
            >
              <span>Wróć na górę</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface LinkItem {
  name: string
  href: string
  external?: boolean
}

interface SocialMediaItem {
  name: string
  href: string
  label: string
  icon: string
}

const newsletterEmail = ref('')
const isSubscribing = ref(false)

const currentYear = computed(() => new Date().getFullYear())

const quickLinks: LinkItem[] = [
  { name: 'O nas', href: '#about' },
  { name: 'Przedmioty', href: '#subjects' },
  { name: 'Nauczyciele', href: '/nauczyciele' },
  { name: 'Cennik', href: '#pricing' },
  { name: 'Opinie', href: '#reviews' },
  { name: 'Kontakt', href: '#contact' },
  { name: 'FAQ', href: '#faq' }
]

const subjects: LinkItem[] = [
  { name: 'Matematyka', href: '/matematyka' },
  { name: 'Informatyka', href: '/informatyka' },
  { name: 'Fizyka', href: '#contact' },
  { name: 'Chemia', href: '#contact' },
  { name: 'Język angielski', href: '#contact' },
  { name: 'Język niemiecki', href: '#contact' }
]

const socialMedia: SocialMediaItem[] = [
  {
    name: 'facebook',
    href: '#',
    label: 'Facebook - Korepetycje',
    icon: 'FacebookIcon'
  },
  {
    name: 'twitter',
    href: '#',
    label: 'Twitter - Korepetycje',
    icon: 'TwitterIcon'
  },
  {
    name: 'instagram',
    href: '#',
    label: 'Instagram - Korepetycje',
    icon: 'InstagramIcon'
  },
  {
    name: 'linkedin',
    href: '#',
    label: 'LinkedIn - Korepetycje',
    icon: 'LinkedInIcon'
  }
]

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const handleFooterNavClick = (event: Event, link: LinkItem) => {
  if (link.href.startsWith('#')) {
    event.preventDefault()
    const element = document.querySelector(link.href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

const subscribeNewsletter = async () => {
  if (!newsletterEmail.value) return

  isSubscribing.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Here you would typically send the email to your backend
    console.log('Newsletter subscription:', newsletterEmail.value)

    // Reset form
    newsletterEmail.value = ''

    // Show success message (you could use a toast notification here)
    alert('Dziękujemy za zapisanie się do newslettera!')
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    alert('Wystąpił błąd. Spróbuj ponownie.')
  } finally {
    isSubscribing.value = false
  }
}
</script>

<script>
// Social Media Icons as string components for simplicity
const FacebookIcon = {
  template: `
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  `
}

const TwitterIcon = {
  template: `
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>
  `
}

const InstagramIcon = {
  template: `
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.398-1.297-.95-.808-1.297-1.684-1.297-2.634V9.441c0-.95.347-1.826 1.297-2.634.95-.807 2.101-1.297 3.398-1.297h7.102c1.297 0 2.448.49 3.398 1.297.95.808 1.297 1.684 1.297 2.634v3.616c0 .95-.347 1.826-1.297 2.634-.95.807-2.101 1.297-3.398 1.297H8.449z"/>
    </svg>
  `
}

const LinkedInIcon = {
  template: `
    <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  `
}

export default {
  components: {
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    LinkedInIcon
  }
}
</script>