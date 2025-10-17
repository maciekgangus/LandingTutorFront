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

    <!-- Hero Section for Math -->
    <section
      class="relative min-h-[70vh] flex items-center bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 pt-24"
    >
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center text-white">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
          >
            <span class="text-3xl">🔢</span>
            <span class="text-sm font-medium">Korepetycje z matematyki</span>
          </div>

          <h1 class="text-5xl lg:text-6xl font-bold mb-6">
            Matematyka bez <br />
            <span class="text-yellow-300">stresu i frustracji</span>
          </h1>

          <p
            class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Przestań się męczyć z zadaniami do 3 w nocy. Naucz się matematyki w
            sposób, który faktycznie ma sens. Od podstaw po maturę rozszerzoną.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <UiButton
              variant="primary"
              size="lg"
              href="#contact"
              class="!bg-white !text-blue-600 hover:!bg-gray-100 shadow-xl"
            >
              Umów darmową lekcję
            </UiButton>
            <UiButton
              variant="outline"
              size="lg"
              href="#program"
              class="!border-2 !border-white !text-white hover:!bg-white/20"
            >
              Zobacz program
            </UiButton>
          </div>

          <!-- Quick Stats -->
          <div
            class="grid grid-cols-3 gap-6 max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6"
          >
            <div>
              <div class="text-3xl font-bold text-yellow-300">95%</div>
              <div class="text-sm text-blue-100">Zdawalność matury</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-yellow-300">4.9/5</div>
              <div class="text-sm text-blue-100">Ocena uczniów</div>
            </div>
            <div>
              <div class="text-3xl font-bold text-yellow-300">200+</div>
              <div class="text-sm text-blue-100">Godzin lekcji</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem-Solution Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="heading-lg text-gray-900 mb-4">Znasz ten problem?</h2>
            <p class="text-large text-gray-600">
              Większość uczniów zmaga się z tymi samymi rzeczami
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <!-- Problems -->
            <div class="space-y-6">
              <div
                class="flex gap-4 p-6 bg-red-50 rounded-xl border-l-4 border-red-500"
              >
                <span class="text-2xl">😰</span>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">
                    Nauczyciel tłumaczy za szybko
                  </h3>
                  <p class="text-gray-600 text-sm">
                    W szkole nie ma czasu na pytania, a Ty zostałeś w tyle już 3
                    tematy temu
                  </p>
                </div>
              </div>
              <div
                class="flex gap-4 p-6 bg-red-50 rounded-xl border-l-4 border-red-500"
              >
                <span class="text-2xl">📚</span>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">
                    Podręczniki są niezrozumiałe
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Skomplikowany język, brak praktycznych przykładów, same
                    wzory bez sensu
                  </p>
                </div>
              </div>
              <div
                class="flex gap-4 p-6 bg-red-50 rounded-xl border-l-4 border-red-500"
              >
                <span class="text-2xl">😫</span>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">
                    Matura wydaje się niemożliwa
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Czujesz, że nigdy tego nie opanujesz i stres rośnie z każdym
                    dniem
                  </p>
                </div>
              </div>
            </div>

            <!-- Solutions -->
            <div class="space-y-6">
              <div
                class="flex gap-4 p-6 bg-green-50 rounded-xl border-l-4 border-green-500"
              >
                <span class="text-2xl">✅</span>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">
                    Tempo dostosowane do Ciebie
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Pytaj tyle razy, ile potrzebujesz. Wracamy do tematu, aż
                    będzie jasny
                  </p>
                </div>
              </div>
              <div
                class="flex gap-4 p-6 bg-green-50 rounded-xl border-l-4 border-green-500"
              >
                <span class="text-2xl">💡</span>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">
                    Proste wyjaśnienia
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Mówimy normalnym językiem, używamy przykładów z życia, bez
                    zbędnej teorii
                  </p>
                </div>
              </div>
              <div
                class="flex gap-4 p-6 bg-green-50 rounded-xl border-l-4 border-green-500"
              >
                <span class="text-2xl">🎯</span>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">
                    Konkretny plan na maturę
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Krok po kroku przygotujemy Cię do egzaminu. Bez stresu, z
                    pewnością siebie
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Program Section -->
    <section id="program" class="section-padding gradient-bg">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-lg text-gray-900 mb-4">Co będziemy przerabiać?</h2>
          <p class="text-large text-gray-600 max-w-3xl mx-auto">
            Program dostosowany do Twojego poziomu i celów
          </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-6">
          <!-- Szkoła podstawowa -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              @click="toggleLevel('podstawowa')"
              class="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <div class="flex items-center gap-4">
                <span class="text-3xl">🎒</span>
                <div class="text-left">
                  <h3 class="text-xl font-semibold text-gray-900">
                    Szkoła podstawowa (klasy 4-8)
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Solidne fundamenty na przyszłość
                  </p>
                </div>
              </div>
              <svg
                class="w-6 h-6 transition-transform"
                :class="openLevel === 'podstawowa' ? 'rotate-180' : ''"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div v-show="openLevel === 'podstawowa'" class="px-8 pb-6 py-4">
              <ul class="grid md:grid-cols-2 gap-3 text-gray-700">
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Działania na liczbach
                  naturalnych
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Ułamki zwykłe i
                  dziesiętne
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Procenty i proporcje
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Geometria płaska i
                  przestrzenna
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Równania i nierówności
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Zadania tekstowe i
                  logiczne
                </li>
              </ul>
            </div>
          </div>

          <!-- Liceum podstawa -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              @click="toggleLevel('liceum-podstawa')"
              class="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <div class="flex items-center gap-4">
                <span class="text-3xl">📐</span>
                <div class="text-left">
                  <h3 class="text-xl font-semibold text-gray-900">
                    Liceum - Poziom podstawowy
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Przygotowanie do matury podstawowej
                  </p>
                </div>
              </div>
              <svg
                class="w-6 h-6 transition-transform"
                :class="openLevel === 'liceum-podstawa' ? 'rotate-180' : ''"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div v-show="openLevel === 'liceum-podstawa'" class="px-8 pb-6">
              <ul class="grid md:grid-cols-2 gap-3 text-gray-700">
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Funkcje i ich własności
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Trygonometria
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Ciągi liczbowe
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Planimetria i
                  stereometria
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Kombinatoryka i
                  prawdopodobieństwo
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Rozwiązywanie zadań
                  maturalnych
                </li>
              </ul>
            </div>
          </div>

          <!-- Liceum rozszerzenie -->
          <div
            class="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-blue-500"
          >
            <button
              @click="toggleLevel('liceum-rozszerzenie')"
              class="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <div class="flex items-center gap-4">
                <span class="text-3xl">🎓</span>
                <div class="text-left">
                  <h3 class="text-xl font-semibold text-gray-900">
                    Liceum - Poziom rozszerzony
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Dla ambitnych - kierunki techniczne i matematyczne
                  </p>
                </div>
              </div>
              <svg
                class="w-6 h-6 transition-transform"
                :class="openLevel === 'liceum-rozszerzenie' ? 'rotate-180' : ''"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              v-show="openLevel === 'liceum-rozszerzenie'"
              class="px-8 pb-6 py-4"
            >
              <ul class="grid md:grid-cols-2 gap-3 text-gray-700">
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Wszystko z poziomu
                  podstawowego
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Rachunek różniczkowy
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Rachunek całkowy
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Geometria analityczna
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Zaawansowane zadania
                  dowodowe
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Strategie rozwiązywania
                  trudnych zadań
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-lg text-gray-900 mb-4">Jak to działa?</h2>
          <p class="text-large text-gray-600">
            Prosta ścieżka do sukcesu w matematyce
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div
                class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 mx-auto mb-4"
              >
                1
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                Darmowa lekcja próbna
              </h3>
              <p class="text-gray-600">
                Poznajemy się, sprawdzamy Twój poziom i ustalamy cele. Bez
                zobowiązań.
              </p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 mx-auto mb-4"
              >
                2
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                Indywidualny plan
              </h3>
              <p class="text-gray-600">
                Tworzymy harmonogram dostosowany do Twoich potrzeb i tempa
                nauki.
              </p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 mx-auto mb-4"
              >
                3
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                Systematyczna nauka
              </h3>
              <p class="text-gray-600">
                Regularne lekcje, sprawdziany postępów i wsparcie między
                zajęciami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing for Math -->
    <section class="section-padding gradient-bg">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-lg text-gray-900 mb-4">Cennik</h2>
          <p class="text-large text-gray-600">
            Przejrzyste ceny, bez ukrytych kosztów
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="bg-white rounded-2xl shadow-lg p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">
              Szkoła podstawowa
            </h3>
            <div class="text-4xl font-bold text-blue-600 mb-6">
              80 zł
              <span class="text-lg text-gray-500 font-normal">/godz</span>
            </div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center gap-2">
                <span class="text-green-500">✓</span>
                <span class="text-gray-700">Lekcje 60 min</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-green-500">✓</span>
                <span class="text-gray-700">Materiały gratis</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-green-500">✓</span>
                <span class="text-gray-700">Online lub stacjonarnie</span>
              </li>
            </ul>
            <UiButton variant="outline" class="w-full" href="#contact">
              Wybierz
            </UiButton>
          </div>

          <div
            class="bg-blue-600 rounded-2xl shadow-2xl p-8 text-white scale-105 border-4 border-yellow-400 relative"
          >
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span
                class="bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold"
              >
                NAJPOPULARNIEJSZY
              </span>
            </div>
            <h3 class="text-2xl font-bold mb-2 mt-4">Liceum</h3>
            <div class="text-4xl font-bold mb-6">
              100 zł
              <span class="text-lg text-blue-100 font-normal">/godz</span>
            </div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center gap-2">
                <span class="text-yellow-300">✓</span>
                <span>Wszystko z poprzedniego</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-yellow-300">✓</span>
                <span>Przygotowanie do matury</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-yellow-300">✓</span>
                <span>Testy próbne</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-yellow-300">✓</span>
                <span>Wsparcie 24/7</span>
              </li>
            </ul>
            <UiButton
              variant="primary"
              class="w-full !bg-white !text-blue-600 hover:!bg-gray-100"
              href="#contact"
            >
              Zacznij teraz
            </UiButton>
          </div>

          <div class="bg-white rounded-2xl shadow-lg p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Rozszerzenie</h3>
            <div class="text-4xl font-bold text-blue-600 mb-6">
              130 zł
              <span class="text-lg text-gray-500 font-normal">/godz</span>
            </div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center gap-2">
                <span class="text-green-500">✓</span>
                <span class="text-gray-700">Wszystko z poprzednich</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-green-500">✓</span>
                <span class="text-gray-700">Trudne zadania dowodowe</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-green-500">✓</span>
                <span class="text-gray-700">Olimpiady matematyczne</span>
              </li>
            </ul>
            <UiButton variant="outline" class="w-full" href="#contact">
              Wybierz
            </UiButton>
          </div>
        </div>

        <div class="text-center mt-12">
          <p class="text-gray-600">
            Pierwsza lekcja próbna
            <strong class="text-blue-600">GRATIS</strong>
          </p>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-lg text-gray-900 mb-4">
            Co mówią nasi uczniowie?
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="bg-gray-50 rounded-2xl p-6">
            <div class="flex items-center gap-1 mb-4">
              <span class="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p class="text-gray-700 mb-4 italic">
              "Pierwszy raz naprawdę zrozumiałem pochodne. Mega fajnie
              wytłumaczone, zero stresu. Polecam!"
            </p>
            <div class="font-semibold text-gray-900">Kacper, 17 lat</div>
            <div class="text-sm text-gray-600">Matura rozszerzona - 89%</div>
          </div>

          <div class="bg-gray-50 rounded-2xl p-6">
            <div class="flex items-center gap-1 mb-4">
              <span class="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p class="text-gray-700 mb-4 italic">
              "Moja córka wreszcie przestała płakać przed sprawdzianami. Oceny
              poszły w górę, pewność siebie też."
            </p>
            <div class="font-semibold text-gray-900">Pani Anna</div>
            <div class="text-sm text-gray-600">Mama uczennicy klasy 7</div>
          </div>

          <div class="bg-gray-50 rounded-2xl p-6">
            <div class="flex items-center gap-1 mb-4">
              <span class="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p class="text-gray-700 mb-4 italic">
              "Przeszedłem z 30% do 80% na maturze próbnej. Najlepsza
              inwestycja!"
            </p>
            <div class="font-semibold text-gray-900">Bartek, 18 lat</div>
            <div class="text-sm text-gray-600">Politechnika Warszawska</div>
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
          <h2 class="text-4xl font-bold mb-6">Gotowy zacząć?</h2>
          <p class="text-xl text-blue-100 mb-8">
            Umów darmową lekcję próbną i przekonaj się, że matematyka może być
            prosta
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
            Bez zobowiązań • Anuluj w każdej chwili
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <SectionsContactSection />
  </div>
</template>

<script setup lang="ts">
const openLevel = ref<string>("");

const toggleLevel = (level: string) => {
  openLevel.value = openLevel.value === level ? "" : level;
};

useSeoMeta({
  title: "Korepetycje z Matematyki - Od podstaw po maturę rozszerzoną",
  ogTitle: "Korepetycje z Matematyki - Proste, zrozumiałe, skuteczne",
  description:
    "Profesjonalne korepetycje z matematyki dla uczniów szkół podstawowych i liceów. Przygotowanie do matury, poprawa ocen, indywidualne podejście. Umów darmową lekcję próbną!",
  ogDescription:
    "Matematyka bez stresu i frustracji. Przygotowanie do matury podstawowej i rozszerzonej. 95% zdawalność. Umów darmową lekcję próbną!",
});
</script>
