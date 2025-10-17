<template>
  <div class="h-full flex flex-col bg-white">
    <!-- Header -->
    <div class="flex items-center justify-between p-6 border-b border-gray-200">
      <div class="flex items-center space-x-2">
        <div
          class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center"
        >
          <span class="text-white font-bold text-sm">K</span>
        </div>
        <span class="font-bold text-xl text-gray-900">Korepetycje</span>
      </div>

      <button
        @click="$emit('close')"
        class="p-2 rounded-md text-gray-600 hover:text-gray-900"
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
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 px-6 py-6">
      <ul class="space-y-4">
        <li v-for="item in navigation" :key="item.name">
          <a
            :href="item.href"
            class="block py-3 px-4 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors duration-200"
            @click="$emit('close')"
          >
            {{ item.name }}
          </a>
        </li>
      </ul>
    </nav>

    <!-- CTA Button -->
    <div class="p-6 border-t border-gray-200">
      <UiButton
        variant="primary"
        class="w-full"
        to="/#contact"
        @click="$emit('close')"
      >
        <a>Umów lekcję</a>
      </UiButton>
    </div>

    <!-- Contact Info -->
    <div class="p-6 bg-gray-50">
      <div class="text-center">
        <p class="text-sm text-gray-600 mb-2">Masz pytania? Zadzwoń!</p>
        <a href="tel:+48123456789" class="text-blue-600 font-semibold text-lg">
          +48 123 456 789
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NavigationItem } from "~/types";

defineEmits<{
  close: [];
}>();

const navigation: NavigationItem[] = [
  { name: "O nas", href: "/#about" },
  { name: "Przedmioty", href: "/#subjects" },
  { name: "Nauczyciele", href: "/#teachers" },
  { name: "Cennik", href: "/#pricing" },
  { name: "Opinie", href: "/#reviews" },
  { name: "Kontakt", href: "/#contact" },
];
</script>
