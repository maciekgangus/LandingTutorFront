<template>
  <section
    ref="heroSection"
    class="relative min-h-screen flex items-center overflow-hidden pt-20"
  >
    <!-- Clean background -->
    <div class="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-white to-white">
      <!-- Subtle decorative elements -->
      <div class="absolute top-20 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-40"></div>
      <div class="absolute bottom-20 left-10 w-24 h-24 bg-purple-100 rounded-full opacity-40"></div>
    </div>

    <div class="container-custom relative z-10">
      <div class="max-w-5xl mx-auto text-center">
        <!-- Simple badge -->
        <div
          ref="badge"
          class="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 border-2 border-blue-200 rounded-full mb-8"
        >
          <span class="w-3 h-3 bg-blue-600 rounded-full"></span>
          <span class="text-base font-semibold text-blue-700"
            >Korepetycje od absolwentów dla uczniów</span
          >
        </div>

        <!-- Clean heading -->
        <h1
          ref="heading"
          class="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
        >
          <span class="block">
            Nie uczymy w szkole.
          </span>
          <span class="block text-blue-600">
            Dlatego właśnie nas zrozumiesz.
          </span>
        </h1>

        <!-- Clear subheading -->
        <p
          ref="subheading"
          class="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
        >
          Jesteśmy grupą pasjonatów, którzy niedawno siedzieli w tych samych
          ławkach co Ty. Wiemy, jak frustrująca potrafi być matematyka o 3 nad
          ranem i jak beznadziejnie można się czuć przed klasówką.
          <strong class="text-gray-900">Nauczymy Cię tak, jak sami chcielibyśmy się uczyć.</strong>
        </p>

        <!-- Message to parents -->
        <div
          ref="parentsMessage"
          class="bg-gray-50 rounded-2xl p-8 mb-10 max-w-4xl mx-auto border border-gray-200"
        >
          <p class="text-lg text-gray-700 leading-relaxed">
            <span class="inline-block w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
            Nasz młody wiek to nasza siła - potrafimy dotrzeć do uczniów
            językiem, który rozumieją. Regularnie informujemy o postępach i
            dostosowujemy metody do indywidualnych potrzeb Waszego dziecka.
            Absolwenci renomowanych uczelni z wieloletnim doświadczeniem w
            korepetycjach.
          </p>
        </div>

        <!-- Clear CTA buttons -->
        <div
          ref="ctaButtons"
          class="flex flex-col sm:flex-row gap-6 justify-center mb-12"
        >
          <a
            href="#contact"
            class="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Umów darmową lekcję próbną
          </a>
          <a
            href="/nauczyciele"
            class="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200"
          >
            <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
            Poznaj nas bliżej
          </a>
        </div>

        <!-- Trust stats -->
        <div
          ref="trustStats"
          class="bg-white rounded-2xl shadow-lg p-8 mb-8 max-w-5xl mx-auto border border-gray-100"
        >
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              class="flex flex-col items-center space-y-3 stat-item"
              data-delay="0"
            >
              <div class="text-5xl animate-bounce-subtle">🎓</div>
              <div class="counter text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-target="150">0</div>
              <span class="text-sm text-gray-600 font-medium"
                >Zadowolonych uczniów i rodziców</span
              >
            </div>
            <div
              class="flex flex-col items-center space-y-3 stat-item"
              data-delay="200"
            >
              <div class="text-5xl animate-bounce-subtle animation-delay-200">⭐</div>
              <div class="counter text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" data-target="98">0</div>
              <span class="text-sm text-gray-600 font-medium">Pozytywnych opinii (%)</span>
            </div>
            <div
              class="flex flex-col items-center space-y-3 stat-item"
              data-delay="400"
            >
              <div class="text-5xl animate-bounce-subtle animation-delay-500">💬</div>
              <div class="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">24/7</div>
              <span class="text-sm text-gray-600 font-medium">Wsparcie i kontakt</span>
            </div>
          </div>
        </div>

        <!-- Enhanced social proof -->
        <div
          ref="socialProof"
          class="flex items-center justify-center gap-4 mb-12 hover-scale transform-gpu"
          style="opacity: 0; transform: translateY(20px);"
        >
          <div class="flex -space-x-2">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-3 border-white shadow-lg animate-pulse animation-delay-100"></div>
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-3 border-white shadow-lg animate-pulse animation-delay-200"></div>
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-3 border-white shadow-lg animate-pulse animation-delay-300"></div>
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-3 border-white shadow-lg animate-pulse animation-delay-500"></div>
          </div>
          <p class="text-sm text-gray-600">
            Dołącz do
            <span class="font-semibold text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text"
              >150+ uczniów i rodziców</span
            >, którzy już nam zaufali
          </p>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

const heroSection = ref<HTMLElement>()
const badge = ref<HTMLElement>()
const heading = ref<HTMLElement>()
const subheading = ref<HTMLElement>()
const parentsMessage = ref<HTMLElement>()
const ctaButtons = ref<HTMLElement>()
const trustStats = ref<HTMLElement>()
const socialProof = ref<HTMLElement>()

// Counter animation function
const animateCounter = (element: HTMLElement, target: number, duration: number = 2000) => {
  const start = 0
  const startTime = performance.now()

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4)
    const current = Math.floor(start + (target - start) * easeOutQuart)

    element.textContent = current.toString()

    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      element.textContent = target.toString()
    }
  }

  requestAnimationFrame(animate)
}

// Staggered animation function
const animateElement = (element: HTMLElement | null, delay: number = 0) => {
  if (!element) return

  setTimeout(() => {
    element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
    element.style.opacity = '1'
    element.style.transform = 'translateY(0) scale(1)'
  }, delay)
}

// Intersection Observer for stats animation
const createStatsObserver = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target === trustStats.value) {
          // Animate counter elements
          const counters = entry.target.querySelectorAll('.counter')
          counters.forEach((counter, index) => {
            const target = parseInt(counter.getAttribute('data-target') || '0')
            setTimeout(() => {
              animateCounter(counter as HTMLElement, target)
            }, index * 200)
          })

          // Disconnect observer after animation
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 }
  )

  if (trustStats.value) {
    observer.observe(trustStats.value)
  }
}

onMounted(async () => {
  await nextTick()

  // Staggered entrance animations
  animateElement(badge.value, 100)
  animateElement(heading.value, 300)
  animateElement(subheading.value, 500)
  animateElement(parentsMessage.value, 700)
  animateElement(ctaButtons.value, 900)
  animateElement(trustStats.value, 1100)
  animateElement(socialProof.value, 1300)

  // Setup stats counter animation
  createStatsObserver()

  // Add floating animation to stats when they come into view
  const statItems = document.querySelectorAll('.stat-item')
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-delay') || '0')
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in-up')
          }, delay)
        }
      })
    },
    { threshold: 0.8 }
  )

  statItems.forEach(item => statsObserver.observe(item))
})
</script>

<style scoped>
/* Enhanced gradient text effects */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

/* Improved glass morphism */
.glass {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Custom counter animation */
.counter {
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
}

/* Perspective for 3D effects */
.perspective-1000 {
  perspective: 1000px;
}

/* Enhanced hover effects */
.hover-lift {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15);
}

.hover-scale {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-scale:hover {
  transform: scale(1.05);
}

/* Performance optimizations */
.transform-gpu {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Additional animation delays */
.animation-delay-100 {
  animation-delay: 100ms;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-500 {
  animation-delay: 500ms;
}

/* Enhanced shadows */
.shadow-glow {
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
}

.shadow-large {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
}

.shadow-soft {
  box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04);
}
</style>
