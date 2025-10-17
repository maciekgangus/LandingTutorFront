<template>
  <section
    class="relative min-h-screen flex items-center bg-gradient-to-br from-white to-blue-50 pt-section"
  >
    <div class="container-custom">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6"
        >
          <span class="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
          <span class="text-sm font-medium text-blue-600"
            >Korepetycje od absolwentów dla uczniów</span
          >
        </div>

        <!-- Heading -->
        <h1 class="heading-xl text-gray-900 mb-6">
          Nie uczymy w szkole.<br />
          <span class="text-blue-600">Dlatego właśnie nas zrozumiesz.</span>
        </h1>

        <!-- Subheading -->
        <p class="text-large text-gray-600 mb-8 max-w-3xl mx-auto">
          Jesteśmy grupą pasjonatów, którzy niedawno siedzieli w tych samych
          ławkach co Ty. Wiemy, jak frustrująca potrafi być matematyka o 3 nad
          ranem i jak beznadziejnie można się czuć przed klasówką.
          <span class="font-semibold text-gray-900"
            >Nauczymy Cię tak, jak sami chcielibyśmy się uczyć.</span
          >
        </p>

        <!-- Message to Parents - BEZ ANIMACJI -->
        <div
          class="bg-gradient-to-tr from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 max-w-3xl mx-auto"
        >
          <p class="text-base text-gray-700 leading-relaxed">
            Nasz młody wiek to nasza siła - potrafimy dotrzeć do uczniów
            językiem, który rozumieją. Regularnie informujemy o postępach i
            dostosowujemy metody do indywidualnych potrzeb Waszego dziecka.
            Absolwenci renomowanych uczelni z wieloletnim doświadczeniem w
            korepetycjach.
          </p>
        </div>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <UiButton
            variant="primary"
            size="lg"
            href="#contact"
            class="bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl animate-pulse"
          >
            Umów darmową lekcję próbną
          </UiButton>
          <UiButton variant="outline" size="lg" href="#teachers">
            Poznaj nas bliżej
          </UiButton>
        </div>

        <!-- Trust Stats -->
        <div
          class="bg-white rounded-2xl shadow-lg p-8 mb-8 max-w-4xl mx-auto border border-gray-100"
        >
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div class="flex flex-col items-center space-y-3">
              <span class="text-5xl">🎓</span>
              <span class="text-4xl font-extrabold text-blue-600">150+</span>
              <span class="text-sm text-gray-600"
                >Zadowolonych uczniów i rodziców</span
              >
            </div>
            <div class="flex flex-col items-center space-y-3">
              <span class="text-5xl">⭐</span>
              <span class="text-4xl font-extrabold text-blue-600">98%</span>
              <span class="text-sm text-gray-600">Pozytywnych opinii</span>
            </div>
            <div class="flex flex-col items-center space-y-3">
              <span class="text-5xl">💬</span>
              <span class="text-4xl font-extrabold text-blue-600">24/7</span>
              <span class="text-sm text-gray-600">Wsparcie i kontakt</span>
            </div>
          </div>
        </div>

        <!-- Social Proof -->
        <div class="flex items-center justify-center gap-3 mb-12">
          <div class="flex -space-x-2">
            <div
              class="w-10 h-10 rounded-full bg-blue-200 border-2 border-white"
            ></div>
            <div
              class="w-10 h-10 rounded-full bg-purple-200 border-2 border-white"
            ></div>
            <div
              class="w-10 h-10 rounded-full bg-green-200 border-2 border-white"
            ></div>
            <div
              class="w-10 h-10 rounded-full bg-orange-200 border-2 border-white"
            ></div>
          </div>
          <p class="text-sm text-gray-600">
            Dołącz do
            <span class="font-semibold text-gray-900"
              >150+ uczniów i rodziców</span
            >, którzy już nam zaufali
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// This component could use a composable for hero data if needed
</script>
