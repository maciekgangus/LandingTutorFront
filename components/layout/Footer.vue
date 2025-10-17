<template>
  <footer class="bg-gray-900 text-white">
    <div class="container-custom">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <div class="flex items-center space-x-2 mb-6">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">K</span>
            </div>
            <span class="font-bold text-xl">Korepetycje</span>
          </div>
          <p class="text-gray-300 mb-6 max-w-md">
            Profesjonalne korepetycje z różnych przedmiotów.
            Pomagamy uczniom osiągać cele edukacyjne od ponad 10 lat.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.398-1.297-.95-.808-1.297-1.684-1.297-2.634V9.441c0-.95.347-1.826 1.297-2.634.95-.807 2.101-1.297 3.398-1.297h7.102c1.297 0 2.448.49 3.398 1.297.95.808 1.297 1.684 1.297 2.634v3.616c0 .95-.347 1.826-1.297 2.634-.95.807-2.101 1.297-3.398 1.297H8.449z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="font-semibold text-lg mb-6">Szybkie linki</h3>
          <ul class="space-y-3">
            <li><a href="/#about" class="text-gray-300 hover:text-white transition-colors">O nas</a></li>
            <li><a href="/#subjects" class="text-gray-300 hover:text-white transition-colors">Przedmioty</a></li>
            <li><a href="/#teachers" class="text-gray-300 hover:text-white transition-colors">Nauczyciele</a></li>
            <li><a href="/#pricing" class="text-gray-300 hover:text-white transition-colors">Cennik</a></li>
            <li><a href="/#reviews" class="text-gray-300 hover:text-white transition-colors">Opinie</a></li>
            <li><a href="/#contact" class="text-gray-300 hover:text-white transition-colors">Kontakt</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="font-semibold text-lg mb-6">Kontakt</h3>
          <ul class="space-y-3">
            <li class="flex items-center">
              <svg class="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.16 10.68a11.027 11.027 0 005.395 5.395l1.293-4.064a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span class="text-gray-300">+48 123 456 789</span>
            </li>
            <li class="flex items-center">
              <svg class="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span class="text-gray-300">kontakt@korepetycje.pl</span>
            </li>
            <li class="flex items-start">
              <svg class="w-5 h-5 mr-3 mt-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span class="text-gray-300">ul. Przykładowa 123<br>00-001 Warszawa</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 py-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            &copy; 2024 Korepetycje. Wszystkie prawa zastrzeżone.
          </p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <NuxtLink to="/privacy" class="text-gray-400 hover:text-white text-sm transition-colors">
              Polityka prywatności
            </NuxtLink>
            <NuxtLink to="/terms" class="text-gray-400 hover:text-white text-sm transition-colors">
              Regulamin
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component logic if needed
</script>
