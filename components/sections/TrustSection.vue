<template>
  <section class="section-padding bg-gray-50">
    <div class="container-custom">
      <!-- Trust Elements -->
      <div class="text-center mb-16">
        <h2 class="heading-lg text-gray-900 mb-4">Dlaczego nas wybierają?</h2>
        <p class="text-large text-gray-600 max-w-3xl mx-auto">
          Zaufało nam już setki uczniów i rodziców. Dołącz do grona zadowolonych klientów.
        </p>
      </div>

      <!-- Statistics with animated counters -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        <div class="text-center">
          <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
            </svg>
          </div>
          <div class="text-4xl font-extrabold text-blue-600 mb-2">
            {{ animatedYears }}+
          </div>
          <div class="text-base font-semibold text-gray-900">Lat doświadczenia</div>
          <div class="text-sm text-gray-600">w branży edukacyjnej</div>
        </div>

        <div class="text-center">
          <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
          </div>
          <div class="text-4xl font-extrabold text-green-600 mb-2">
            {{ animatedStudents }}+
          </div>
          <div class="text-base font-semibold text-gray-900">Zadowolonych uczniów</div>
          <div class="text-sm text-gray-600">i rodziców</div>
        </div>

        <div class="text-center">
          <div class="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
            </svg>
          </div>
          <div class="text-4xl font-extrabold text-yellow-600 mb-2">
            {{ animatedRating }}/5
          </div>
          <div class="text-base font-semibold text-gray-900">Średnia ocen</div>
          <div class="text-sm text-gray-600">na podstawie opinii</div>
        </div>

        <div class="text-center">
          <div class="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </div>
          <div class="text-4xl font-extrabold text-purple-600 mb-2">
            24/7
          </div>
          <div class="text-base font-semibold text-gray-900">Wsparcie</div>
          <div class="text-sm text-gray-600">i szybki kontakt</div>
        </div>
      </div>

      <!-- Trust badges -->
      <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900">100% Gwarancja</h3>
              <p class="text-sm text-gray-600">Zwrot kosztów jeśli nie jesteś zadowolony</p>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900">Bezpieczne płatności</h3>
              <p class="text-sm text-gray-600">Szyfrowane transakcje i dane</p>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900">Błyskawiczny start</h3>
              <p class="text-sm text-gray-600">Pierwsze lekcje już w 24h</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Certificates/Partners (placeholder) -->
      <div class="mt-16 text-center">
        <p class="text-sm text-gray-500 mb-8">Zaufały nam największe instytucje edukacyjne</p>
        <div class="flex justify-center items-center space-x-8 opacity-60">
          <div class="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
            <span class="text-gray-400 text-xs font-semibold">PARTNER 1</span>
          </div>
          <div class="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
            <span class="text-gray-400 text-xs font-semibold">PARTNER 2</span>
          </div>
          <div class="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
            <span class="text-gray-400 text-xs font-semibold">PARTNER 3</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Animated counter values
const animatedYears = ref(0)
const animatedStudents = ref(0)
const animatedRating = ref(0)

// Target values
const targetYears = 8
const targetStudents = 500
const targetRating = 4.9

// Animation function
const animateCounter = (
  currentRef: any,
  target: number,
  duration: number = 2000,
  decimals: number = 0
) => {
  const startTime = Date.now()
  const startValue = currentRef.value

  const updateCounter = () => {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)

    // Easing function (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3)

    const current = startValue + (target - startValue) * easeOut

    if (decimals > 0) {
      currentRef.value = parseFloat(current.toFixed(decimals))
    } else {
      currentRef.value = Math.floor(current)
    }

    if (progress < 1) {
      requestAnimationFrame(updateCounter)
    } else {
      if (decimals > 0) {
        currentRef.value = parseFloat(target.toFixed(decimals))
      } else {
        currentRef.value = target
      }
    }
  }

  requestAnimationFrame(updateCounter)
}

// Intersection observer for triggering animation
const setupIntersectionObserver = () => {
  if (process.client) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animations when section comes into view
            setTimeout(() => animateCounter(animatedYears, targetYears), 100)
            setTimeout(() => animateCounter(animatedStudents, targetStudents, 2500), 300)
            setTimeout(() => animateCounter(animatedRating, targetRating, 2000, 1), 500)

            // Unobserve after animation starts
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    // Find the section element
    const section = document.querySelector('section')
    if (section) {
      observer.observe(section)
    }
  }
}

onMounted(() => {
  setupIntersectionObserver()
})
</script>
