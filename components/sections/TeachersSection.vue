<template>
  <section id="teachers" class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="heading-lg text-gray-900 mb-4">Nasi nauczyciele</h2>
        <p class="text-large text-gray-600 max-w-3xl mx-auto">
          Poznaj doświadczony zespół nauczycieli, którzy pomogą Ci osiągnąć cele
          edukacyjne.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="teacher in teachers"
          :key="teacher.id"
          class="card text-center"
        >
          <div class="mb-6">
            <NuxtImg
              :src="teacher.photo"
              :alt="teacher.name"
              class="w-24 h-24 rounded-full mx-auto object-cover"
              width="96"
              height="96"
            />
          </div>

          <h3 class="text-xl font-semibold text-gray-900 mb-2">
            {{ teacher.name }}
          </h3>
          <p class="text-blue-600 font-medium mb-2">
            {{ teacher.subjects.join(", ") }}
          </p>
          <p class="text-sm text-gray-500 mb-4">
            {{ teacher.experience }} lat doświadczenia
          </p>

          <p class="text-gray-600 text-sm mb-6">{{ teacher.description }}</p>

          <UiButton variant="outline" size="sm" class="w-full">
            Zobacz profil
          </UiButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Teacher } from "~/types";

const teachers: Teacher[] = [
  {
    id: "1",
    name: "Maciej Leśniak",
    photo: "/images/teachers/teacher-1.jpg",
    subjects: ["Matematyka", "Informatyka"],
    experience: 5,
    education: "Akademia Górniczo Hutnicza, Kraków",
    description:
      "Specjalizuje się w przygotowaniu licealistów do matury oraz studentów do egzaminów na studia techniczne. Prowadzi zajęcia wyłącznie dla liceum i uczelni wyższych.",
  },
  {
    id: "2",
    name: "Mateusz Michalski",
    photo: "/images/teachers/teacher-2.jpg",
    subjects: ["Matematyka"],
    experience: 4,
    education: "Politechnika Gdańska",
    description:
      "Doświadczony nauczyciel matematyki, prowadzi zajęcia zarówno w szkole podstawowej, jak i liceum. Z pasją przygotowuje uczniów do sprawdzianów oraz matury.",
  },
  {
    id: "3",
    name: "Vanessa",
    photo: "/images/teachers/teacher-3.jpg",
    subjects: ["Język angielski"],
    experience: 10,
    education: "Native speaker, Certyfikat TEFL",
    description:
      "Rodzima użytkowniczka języka z wieloletnim doświadczeniem w nauczaniu.",
  },
];
</script>
