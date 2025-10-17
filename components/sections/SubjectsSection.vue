<template>
  <section id="subjects" class="section-padding gradient-bg">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="heading-lg text-gray-900 mb-4">Nasze specjalizacje</h2>
        <p class="text-large text-gray-600 max-w-3xl mx-auto">
          Skupiamy się na trzech kluczowych przedmiotach, w których jesteśmy
          najlepsi. Nie rozpraszamy się - po prostu dobrze robimy to, co robimy.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div
          v-for="subject in subjects"
          :key="subject.id"
          class="card group hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col"
        >
          <div class="flex items-center mb-6">
            <div
              class="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="text-3xl">{{ subject.icon }}</span>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900">
                {{ subject.name }}
              </h3>
              <p class="text-sm text-blue-600 font-medium">
                {{ subject.levels.join(", ") }}
              </p>
            </div>
          </div>

          <p class="text-gray-600 mb-6 leading-relaxed flex-grow">
            {{ subject.description }}
          </p>

          <div
            class="flex justify-between items-center pt-4 border-t border-gray-100 mt-auto"
          >
            <span class="text-blue-600 font-semibold text-lg">
              od {{ subject.priceFrom }} zł/h
            </span>
            <UiButton variant="ghost" size="sm" :href="subject.link">
              Dowiedz się więcej →
            </UiButton>
          </div>
        </div>
      </div>

      <!-- Extra info -->
      <div class="mt-12 text-center">
        <p class="text-gray-600">
          Nie widzisz swojego przedmiotu?
          <a href="#contact" class="text-blue-600 font-semibold hover:underline"
            >Skontaktuj się z nami</a
          >
          - być może pomożemy!
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Subject } from "~/types";

const subjects: Subject[] = [
  {
    id: "1",
    name: "Matematyka",
    description:
      "Od podstawowych działań po zaawansowane zagadnienia maturalne i akademickie. Algebra, analiza, geometria - wszystko wyjaśnione prosto i zrozumiale.",
    icon: "🔢",
    levels: ["Szkoła podstawowa", "Liceum", "Studia"],
    priceFrom: 80,
    link: "/matematyka",
  },
  {
    id: "2",
    name: "Informatyka",
    description:
      "Programowanie (Python, JavaScript, C++), algorytmy, struktury danych i przygotowanie do matury. Od podstaw do zaawansowanych projektów.",
    icon: "💻",
    levels: ["Liceum", "Studia", "Początkujący"],
    priceFrom: 120,
    link: "/informatyka",
  },
  {
    id: "3",
    name: "Język angielski",
    description:
      "Konwersacje, gramatyka w praktyce, przygotowanie do egzaminów (FCE, CAE, matura). Nauka przez komunikację, nie przez nudne ćwiczenia.",
    icon: "🇬🇧",
    levels: ["Wszystkie poziomy", "A1-C2"],
    priceFrom: 60,
    link: "/angielski",
  },
];
</script>
