<template>
  <section id="about" class="py-section bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-20 left-10 w-32 h-32 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
      <div class="absolute bottom-20 right-10 w-40 h-40 bg-purple-100/30 rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-300"></div>
    </div>

    <div class="container-custom relative z-10">
      <div class="text-center mb-16 animate-on-scroll">
        <span class="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4 border border-blue-100">
          💡 Nasze podejście
        </span>
        <h2 class="heading-lg text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
          Dlaczego właśnie my?
        </h2>
        <p class="text-large text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Łączymy świeże spojrzenie absolwentów z wieloletnim doświadczeniem w korepetycjach.
          Rozumiemy wyzwania współczesnej edukacji, bo
          <span class="font-semibold text-gray-800">sami przez nie przeszliśmy niedawno</span>.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          class="group relative"
          :class="`animate-on-scroll animation-delay-${(index + 1) * 100}`"
        >
          <!-- Card with enhanced design -->
          <div class="relative h-full bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100/50 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 hover:scale-105 transform-gpu group-hover:border-blue-200">
            <!-- Gradient overlay on hover -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/30 rounded-2xl transition-all duration-500"></div>

            <!-- Icon container with enhanced animation -->
            <div class="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-md group-hover:shadow-lg">
              <div class="relative">
                <div v-html="feature.icon" class="w-8 h-8 text-blue-600 group-hover:text-blue-700 transition-colors duration-300"></div>
                <!-- Glow effect on hover -->
                <div class="absolute inset-0 bg-blue-400/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            <!-- Content -->
            <div class="relative z-10 text-center">
              <h3 class="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors duration-300">
                {{ feature.title }}
              </h3>
              <p class="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {{ feature.description }}
              </p>
            </div>

            <!-- Subtle animation indicator -->
            <div class="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
          </div>
        </div>
      </div>

      <!-- Call to action at the bottom -->
      <div class="text-center mt-16 animate-on-scroll animation-delay-700">
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 max-w-4xl mx-auto border border-blue-100/50 shadow-soft">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            Przekonaj się sam 🚀
          </h3>
          <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
            Pierwsza lekcja jest zawsze za darmo. Bez zobowiązań, bez ukrytych kosztów.
            Po prostu sprawdź, czy nasze podejście przypadnie Ci do gustu.
          </p>
          <UiButton
            variant="primary"
            size="lg"
            href="#contact"
            class="hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
          >
            <span class="flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Zacznij już dziś
            </span>
          </UiButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue'

// Initialize scroll animations
const { registerElements } = useScrollAnimation()

onMounted(async () => {
  await nextTick()
  // Register all elements with animate-on-scroll class
  registerElements('.animate-on-scroll', 'fade-up', 100)

  // Alternative: Trigger animations immediately for testing
  // Comment out the line above and uncomment below if scroll detection isn't working
  // const elements = document.querySelectorAll('.animate-on-scroll')
  // elements.forEach(el => el.classList.add('in-view'))
})

const features = [
  {
    title: 'Mówimy Twoim językiem',
    description: 'Nie używamy skomplikowanego żargonu. Tłumaczymy tak, żeby naprawdę zrozumieć - bez zbędnych komplikacji i nudnych wykładów.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>`
  },
  {
    title: 'Świeże podejście do nauki',
    description: 'Pamiętamy frustrację z niezrozumiałych wzorów i nudnych lekcji. Dlatego uczymy w sposób, który działa - praktycznie i z przykładami z życia.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>`
  },
  {
    title: 'Elastyczność bez kompromisów',
    description: 'Wiemy, że życie bywa nieprzewidywalne. Dopasujemy się do Twojego grafiku - wieczory, weekendy, online lub osobiście.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>`
  },
  {
    title: 'Online jak i stacjonarnie',
    description: 'Nowoczesne narzędzia do nauki zdalnej lub spotkania twarzą w twarz - jak wolisz. Jakość nauczania bez kompromisów, niezależnie od formy.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
    </svg>`
  },
  {
    title: 'Realne rezultaty',
    description: 'Nie obiecujemy cudów, ale gwarantujemy ciężką pracę i przemyślane metody. Nasze podejście po prostu działa - sprawdź sam.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>`
  },
  {
    title: 'Transparentna komunikacja',
    description: 'Zawsze wiesz, na czym stoisz. Regularne feedback, otwarta rozmowa o postępach i jasne cele do osiągnięcia.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>`
  }
]
</script>
