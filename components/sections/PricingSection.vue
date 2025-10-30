<template>
  <section id="pricing" class="section-padding gradient-bg">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="heading-lg text-gray-900 mb-4">Cennik</h2>
        <p class="text-large text-gray-600 max-w-3xl mx-auto">
          Wybierz pakiet dostosowany do Twoich potrzeb. Wszystkie ceny są negocjowalne.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div
          v-for="tier in pricingTiers"
          :key="tier.id"
          :class="[
            'card relative',
            tier.popular ? 'ring-2 ring-blue-500 scale-105' : ''
          ]"
        >
          <div v-if="tier.popular" class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
              Najpopularniejszy
            </span>
          </div>

          <div class="text-center mb-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ tier.name }}</h3>
            <p class="text-gray-600 mb-4">{{ tier.description }}</p>
            <div class="text-3xl font-bold text-blue-600">
              {{ tier.price }} zł
              <span class="text-base font-normal text-gray-500">/godzina</span>
            </div>
          </div>

          <ul class="space-y-3 mb-8">
            <li v-for="feature in tier.features" :key="feature" class="flex items-center">
              <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-gray-700">{{ feature }}</span>
            </li>
          </ul>

          <UiButton
            :variant="tier.popular ? 'primary' : 'outline'"
            class="w-full"
            to="/#contact"
          >
            Wybierz pakiet
          </UiButton>
        </div>
      </div>

      <div class="text-center mt-12">
        <p class="text-gray-600">
          Potrzebujesz indywidualnej wyceny?
          <NuxtLink to="/#contact" class="text-blue-600 hover:text-blue-700 font-medium">
            Skontaktuj się z nami
          </NuxtLink>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PricingTier } from '~/types'

const pricingTiers: PricingTier[] = [
  {
    id: 'basic',
    name: 'Podstawowy',
    description: 'Idealne dla uczniów szkół podstawowych',
    price: 60,
    features: [
      'Lekcje indywidualne',
      'Materiały edukacyjne',
      'Elastyczne godziny',
      'Wsparcie mailowe'
    ]
  },
  {
    id: 'standard',
    name: 'Standard',
    description: 'Najlepszy wybór dla licealistów',
    price: 70,
    popular: true,
    features: [
      'Wszystko z pakietu Podstawowego',
      'Przygotowanie do matury',
      'Testy i sprawdziany',
      'Regularne raporty postępów',
      'Dostęp do platformy online'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Dla studentów i zaawansowanych',
    price: 80,
    features: [
      'Wszystko z pakietu Standard',
      'Przygotowanie do egzaminów',
      'Projekty i prace pisemne',
      'Wsparcie 24/7',
      'Sesje grupowe',
      'Mentoring akademicki'
    ]
  }
]
</script>
