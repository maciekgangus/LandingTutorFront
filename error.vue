<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
    <div class="text-center">
      <div class="mb-8">
        <h1 class="text-9xl font-bold text-blue-600">{{ error.statusCode }}</h1>
        <h2 class="text-3xl font-semibold text-gray-900 mt-4">
          {{ error.statusCode === 404 ? 'Strona nie została znaleziona' : 'Wystąpił błąd' }}
        </h2>
        <p class="text-lg text-gray-600 mt-4 max-w-md mx-auto">
          {{ error.statusMessage || 'Przepraszamy, ale coś poszło nie tak. Spróbuj ponownie później.' }}
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <UiButton variant="primary" @click="handleError">
          Wróć do strony głównej
        </UiButton>
        <UiButton variant="outline" @click="clearError">
          Spróbuj ponownie
        </UiButton>
      </div>

      <!-- Contact info for errors -->
      <div class="mt-12 p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
        <h3 class="font-semibold text-gray-900 mb-4">Potrzebujesz pomocy?</h3>
        <p class="text-gray-600 mb-4">Skontaktuj się z nami jeśli problem się powtarza:</p>
        <div class="space-y-2 text-sm">
          <div class="flex items-center justify-center">
            <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span class="text-blue-600">kontakt@korepetycje.pl</span>
          </div>
          <div class="flex items-center justify-center">
            <svg class="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.16 10.68a11.027 11.027 0 005.395 5.395l1.293-4.064a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <span class="text-blue-600">+48 123 456 789</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode: number
    statusMessage?: string
  }
}>()

const handleError = () => {
  clearError({ redirect: '/' })
}
</script>
