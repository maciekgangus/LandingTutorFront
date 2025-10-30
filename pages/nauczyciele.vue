<template>
  <div>
    <!-- Back to home link -->
    <div class="fixed top-4 left-4 z-50">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-gray-900 font-medium hover:scale-105"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
        Strona główna
      </NuxtLink>
    </div>

    <!-- Hero Section -->
    <section
      class="relative min-h-[70vh] flex items-center bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 pt-24"
    >
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center text-white">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
          >
            <span class="text-3xl">👨‍🏫</span>
            <span class="text-sm font-medium">Nasi nauczyciele</span>
          </div>

          <h1 class="text-5xl lg:text-6xl font-bold mb-6">
            Poznaj naszych <br />
            <span class="text-yellow-300">doświadczonych ekspertów</span>
          </h1>

          <p
            class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Każdy z naszych nauczycieli to pasjonat edukacji z wieloletnim doświadczeniem
            w przygotowywaniu uczniów do egzaminów i rozwijaniu ich umiejętności.
          </p>

          <!-- Quick Stats -->
          <div
            class="grid grid-cols-3 gap-6 max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6"
          >
            <div>
              <div class="text-3xl font-bold text-yellow-300">{{ teachersStats.total }}</div>
              <div class="text-sm text-blue-100">Ekspertów</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-yellow-300">{{ teachersStats.averageExperience }}+</div>
              <div class="text-sm text-blue-100">Lat doświadczenia</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-yellow-300">{{ teachersStats.totalSubjects }}</div>
              <div class="text-sm text-blue-100">Przedmiotów</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Teachers Grid Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-lg text-gray-900 mb-4">Nasz zespół</h2>
          <p class="text-large text-gray-600 max-w-3xl mx-auto">
            Poznaj doświadczonych nauczycieli, którzy pomogą Ci osiągnąć cele edukacyjne
            i przygotują do egzaminów na najwyższym poziomie.
          </p>
        </div>

        <div class="space-y-16">
          <div
            v-for="(teacher, index) in teachers"
            :key="teacher.id"
            class="grid lg:grid-cols-2 gap-12 items-center"
            :class="{ 'lg:grid-cols-2': true, 'lg:flex-row-reverse': index % 2 === 1 }"
          >
            <!-- Teacher Image -->
            <div class="order-2 lg:order-1" :class="{ 'lg:order-2': index % 2 === 1 }">
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl transform rotate-3"></div>
                <NuxtImg
                  :src="teacher.photo"
                  :alt="teacher.name"
                  class="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl object-cover"
                  width="400"
                  height="500"
                />
                <!-- Experience Badge -->
                <div class="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  {{ teacher.experience }} lat doświadczenia
                </div>
              </div>
            </div>

            <!-- Teacher Info -->
            <div class="order-1 lg:order-2" :class="{ 'lg:order-1': index % 2 === 1 }">
              <div class="max-w-xl" :class="{ 'lg:ml-auto': index % 2 === 1 }">
                <h3 class="text-4xl font-bold text-gray-900 mb-4">
                  {{ teacher.name }}
                </h3>

                <!-- Subjects -->
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="subject in teacher.subjects"
                    :key="subject"
                    class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {{ subject }}
                  </span>
                </div>

                <!-- Education -->
                <div class="mb-6">
                  <h4 class="text-lg font-semibold text-gray-900 mb-2">Wykształcenie:</h4>
                  <p class="text-gray-700 font-medium">{{ teacher.education }}</p>
                </div>

                <!-- Description -->
                <div class="mb-8">
                  <h4 class="text-lg font-semibold text-gray-900 mb-2">O nauczycielu:</h4>
                  <p class="text-gray-600 leading-relaxed">{{ teacher.description }}</p>
                </div>

                <!-- Specializations -->
                <div class="mb-8">
                  <h4 class="text-lg font-semibold text-gray-900 mb-3">Specjalizacje:</h4>
                  <ul class="space-y-2">
                    <li v-for="subject in teacher.subjects" :key="subject" class="flex items-center gap-2">
                      <span class="text-blue-600">✓</span>
                      <span class="text-gray-700">Korepetycje z {{ subject.toLowerCase() }}</span>
                    </li>
                  </ul>
                </div>

                <!-- CTA Button -->
                <UiButton
                  variant="primary"
                  size="lg"
                  href="#contact"
                  class="w-full sm:w-auto"
                >
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                  Umów lekcję z {{ teacher.name.split(' ')[0] }}
                </UiButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Teaching Philosophy Section -->
    <section class="section-padding gradient-bg">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-lg text-gray-900 mb-4">Nasza filozofia nauczania</h2>
          <p class="text-large text-gray-600 max-w-3xl mx-auto">
            Co wyróżnia naszych nauczycieli i dlaczego uczniowie osiągają z nami sukces
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
              🎯
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Indywidualne podejście
            </h3>
            <p class="text-gray-600">
              Każdy uczeń ma unikalne potrzeby i tempo nauki. Dostosowujemy metody
              nauczania do konkretnego ucznia, aby zmaksymalizować efektywność nauki.
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
              💡
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Praktyczne wyjaśnienia
            </h3>
            <p class="text-gray-600">
              Unikamy skomplikowanego żargonu. Wszystko tłumaczymy prostym językiem
              z przykładami z życia codziennego, które każdy może zrozumieć.
            </p>
          </div>

          <div class="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
              📈
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Ciągły monitoring postępów
            </h3>
            <p class="text-gray-600">
              Regularnie sprawdzamy postępy w nauce, organizujemy testy próbne
              i dostosowujemy plan nauki do osiąganych wyników.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-lg text-gray-900 mb-4">Historie sukcesu</h2>
          <p class="text-large text-gray-600">
            Zobacz, jak nasi nauczyciele pomagają uczniom osiągać cele
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gray-50 rounded-2xl p-6">
            <div class="flex items-center gap-1 mb-4">
              <span class="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p class="text-gray-700 mb-4 italic">
              "Maciej pomógł mi przejść z oceny niedostatecznej do bardzo dobrej
              w ciągu jednego semestru. Informatyka przestała być koszmarem!"
            </p>
            <div class="font-semibold text-gray-900">Paweł, 17 lat</div>
            <div class="text-sm text-gray-600">Uczeń liceum</div>
          </div>

          <div class="bg-gray-50 rounded-2xl p-6">
            <div class="flex items-center gap-1 mb-4">
              <span class="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p class="text-gray-700 mb-4 italic">
              "Dzięki Mateuszowi zrozumiałam matematykę po raz pierwszy w życiu.
              Na maturze dostałam 85%!"
            </p>
            <div class="font-semibold text-gray-900">Anna, 18 lat</div>
            <div class="text-sm text-gray-600">Absolwentka liceum</div>
          </div>

          <div class="bg-gray-50 rounded-2xl p-6">
            <div class="flex items-center gap-1 mb-4">
              <span class="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p class="text-gray-700 mb-4 italic">
              "Vanessa nie tylko nauczyła mnie angielskiego, ale też dodała mi
              pewności siebie w mówieniu. Teraz studiuję za granicą!"
            </p>
            <div class="font-semibold text-gray-900">Marcin, 19 lat</div>
            <div class="text-sm text-gray-600">Student</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="section-padding bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800"
    >
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center text-white">
          <h2 class="text-4xl font-bold mb-6">Gotowy poznać naszych nauczycieli?</h2>
          <p class="text-xl text-blue-100 mb-8">
            Umów darmową lekcję próbną z wybranym nauczycielem i przekonaj się
            o jakości naszej pracy
          </p>
          <UiButton
            variant="primary"
            size="lg"
            href="#contact"
            class="!bg-white !text-blue-600 hover:!bg-gray-100 shadow-2xl"
          >
            Umów darmową lekcję próbną
          </UiButton>
          <p class="text-sm text-blue-200 mt-4">
            Bez zobowiązań • Wybierz swojego nauczyciela
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <SectionsContactSection />
  </div>
</template>

<script setup lang="ts">
import { useTeachers } from '~/composables/useTeachers'

// Use teachers composable
const { teachers, getTeachersStats, loadTeachers } = useTeachers()

// Load teachers data
await loadTeachers()

// Get teachers stats for the hero section
const teachersStats = getTeachersStats

// SEO Meta
useSeoMeta({
  title: "Nasi Nauczyciele - Doświadczeni Eksperci | Korepetycje",
  ogTitle: "Poznaj naszych doświadczonych nauczycieli",
  description:
    "Poznaj naszych doświadczonych nauczycieli: Maciej Leśniak (matematyka, informatyka), Mateusz Michalski (matematyka), Vanessa (język angielski). Profesjonalne korepetycje z indywidualnym podejściem.",
  ogDescription:
    "Doświadczeni nauczyciele z wieloletnim stażem. Indywidualne podejście, skuteczne metody, sprawdzone rezultaty. Umów darmową lekcję próbną!",
})
</script>