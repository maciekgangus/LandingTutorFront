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

    <!-- Hero Section for English -->
    <section
      class="relative min-h-[70vh] flex items-center bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 pt-24"
    >
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center text-white">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
          >
            <span class="text-3xl">🇬🇧</span>
            <span class="text-sm font-medium">Korepetycje z języka angielskiego</span>
          </div>

          <h1 class="text-5xl lg:text-6xl font-bold mb-6">
            Angielski na <br />
            <span class="text-yellow-300">poziom B2-C1</span>
          </h1>

          <p
            class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Od podstaw po poziom zaawansowany. Przygotowanie do matury,
            egzaminów Cambridge, rozmów kwalifikacyjnych i życia za granicą.
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
              class="!border-2 !border-white !text-white !bg-white/10 backdrop-blur-sm hover:!bg-white hover:!text-blue-600 transition-all duration-300"
            >
              Zobacz program
            </UiButton>
          </div>

          <!-- Quick Stats -->
          <div
            class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6"
          >
            <div class="text-center">
              <div class="text-3xl lg:text-4xl font-bold text-yellow-300 mb-1">98%</div>
              <div class="text-sm text-blue-100">Zdawalność matury</div>
            </div>
            <div class="text-center">
              <div class="text-3xl lg:text-4xl font-bold text-yellow-300 mb-1">5.0/5</div>
              <div class="text-sm text-blue-100">Ocena uczniów</div>
            </div>
            <div class="text-center">
              <div class="text-3xl lg:text-4xl font-bold text-yellow-300 mb-1">B2+</div>
              <div class="text-sm text-blue-100">Średni poziom po roku</div>
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
              Większość uczniów zmaga się z tymi samymi trudnościami
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
                    Strach przed mówieniem
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Rozumiesz angielski, ale boisz się mówić. Brakuje Ci pewności
                    siebie w rozmowach
                  </p>
                </div>
              </div>
              <div
                class="flex gap-4 p-6 bg-red-50 rounded-xl border-l-4 border-red-500"
              >
                <span class="text-2xl">📚</span>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">
                    Gramatyka jak czarna magia
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Czasy gramatyczne wydają się niemożliwe do opanowania,
                    a zasady zbyt skomplikowane
                  </p>
                </div>
              </div>
              <div
                class="flex gap-4 p-6 bg-red-50 rounded-xl border-l-4 border-red-500"
              >
                <span class="text-2xl">😫</span>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">
                    Matura wydaje się za trudna
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Nie wiesz od czego zacząć przygotowania, a czas ucieka
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
                    Konwersacje od pierwszej lekcji
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Mówimy po angielsku od razu. Zbudujemy Twoją pewność siebie
                    krok po kroku
                  </p>
                </div>
              </div>
              <div
                class="flex gap-4 p-6 bg-green-50 rounded-xl border-l-4 border-green-500"
              >
                <span class="text-2xl">💡</span>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">
                    Gramatyka w praktyce
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Uczysz się gramatyki naturalnie, w kontekście.
                    Bez kuchania na pamięć
                  </p>
                </div>
              </div>
              <div
                class="flex gap-4 p-6 bg-green-50 rounded-xl border-l-4 border-green-500"
              >
                <span class="text-2xl">🎯</span>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">
                    Strategia na maturę i egzaminy
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Konkretny plan przygotowań z symulacjami egzaminów
                    i analizą błędów
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
          <!-- Beginner Level -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              @click="toggleLevel('beginner')"
              class="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <div class="flex items-center gap-4">
                <span class="text-3xl">🌱</span>
                <div class="text-left">
                  <h3 class="text-xl font-semibold text-gray-900">
                    Poziom podstawowy (A1-A2)
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Od zera do pewnego posługiwania się językiem
                  </p>
                </div>
              </div>
              <svg
                class="w-6 h-6 transition-transform"
                :class="openLevel === 'beginner' ? 'rotate-180' : ''"
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
            <div v-show="openLevel === 'beginner'" class="px-8 pb-6 py-4">
              <ul class="grid md:grid-cols-2 gap-3 text-gray-700">
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Podstawowe słownictwo (1000+ słów)
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Czasy Present i Past
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Wymowa i akcent
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Podstawowe konwersacje
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Liczby, kolory, czas
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Rodzina, dom, praca
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Zakupy i restauracje
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Pisanie prostych tekstów
                </li>
              </ul>
            </div>
          </div>

          <!-- Intermediate Level -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-blue-500">
            <button
              @click="toggleLevel('intermediate')"
              class="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <div class="flex items-center gap-4">
                <span class="text-3xl">📚</span>
                <div class="text-left">
                  <h3 class="text-xl font-semibold text-gray-900">
                    Poziom średniozaawansowany (B1-B2)
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Przygotowanie do matury i egzaminów FCE
                  </p>
                </div>
              </div>
              <svg
                class="w-6 h-6 transition-transform"
                :class="openLevel === 'intermediate' ? 'rotate-180' : ''"
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
            <div v-show="openLevel === 'intermediate'" class="px-8 pb-6 py-4">
              <ul class="grid md:grid-cols-2 gap-3 text-gray-700">
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Wszystkie czasy gramatyczne
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Mowa zależna
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Tryb warunkowy
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Phrasal verbs
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Słownictwo tematyczne (3000+ słów)
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Rozumienie ze słuchu
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Pisanie wypracowań
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Przygotowanie do matury
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Symulacje egzaminów
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Kultura krajów anglojęzycznych
                </li>
              </ul>
              <div class="mt-6 p-4 bg-blue-50 rounded-lg">
                <p class="text-sm text-blue-900 font-semibold">
                  ⭐ Średni wynik matury naszych uczniów: 85%
                </p>
              </div>
            </div>
          </div>

          <!-- Advanced Level -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              @click="toggleLevel('advanced')"
              class="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <div class="flex items-center gap-4">
                <span class="text-3xl">🎓</span>
                <div class="text-left">
                  <h3 class="text-xl font-semibold text-gray-900">
                    Poziom zaawansowany (C1-C2)
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Business English, CAE, CPE i przygotowanie do pracy za granicą
                  </p>
                </div>
              </div>
              <svg
                class="w-6 h-6 transition-transform"
                :class="openLevel === 'advanced' ? 'rotate-180' : ''"
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
            <div v-show="openLevel === 'advanced'" class="px-8 pb-6 py-4">
              <ul class="grid md:grid-cols-2 gap-3 text-gray-700">
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Business English
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Prezentacje i wystąpienia
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Negocjacje po angielsku
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Pisanie raportów i e-maili
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Przygotowanie do CAE/CPE
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Rozmowy kwalifikacyjne
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Język specjalistyczny
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Kultura biznesowa
                </li>
              </ul>
            </div>
          </div>

          <!-- Conversation Practice -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              @click="toggleLevel('conversation')"
              class="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <div class="flex items-center gap-4">
                <span class="text-3xl">💬</span>
                <div class="text-left">
                  <h3 class="text-xl font-semibold text-gray-900">
                    Praktyka konwersacji
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Intensywne zajęcia skupione na mówieniu i słuchaniu
                  </p>
                </div>
              </div>
              <svg
                class="w-6 h-6 transition-transform"
                :class="openLevel === 'conversation' ? 'rotate-180' : ''"
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
            <div v-show="openLevel === 'conversation'" class="px-8 pb-6 py-4">
              <ul class="grid md:grid-cols-2 gap-3 text-gray-700">
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Rozmowy na tematy codzienne
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Debaty i dyskusje
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Praca nad wymową
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Słuchanie autentycznych materiałów
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Idiomy i wyrażenia
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Różnice między akcentami
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Język nieformalny
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-600">•</span> Praktyczne sytuacje
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
            Skuteczna ścieżka do biegłości w języku angielskim
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
                Test poziomu
              </h3>
              <p class="text-gray-600">
                Sprawdzamy Twój obecny poziom i ustalamy cele.
                Pierwsza lekcja gratis!
              </p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 mx-auto mb-4"
              >
                2
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                Spersonalizowany program
              </h3>
              <p class="text-gray-600">
                Tworzymy plan nauki dostosowany do Twoich potrzeb
                i tempa uczenia się.
              </p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-600 mx-auto mb-4"
              >
                3
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                Praktyka i postęp
              </h3>
              <p class="text-gray-600">
                Regularne lekcje z naciskiem na mówienie.
                Monitorujemy Twoje postępy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Stories -->
    <section class="section-padding gradient-bg">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-lg text-gray-900 mb-4">Sukces naszych uczniów</h2>
          <p class="text-large text-gray-600">
            Zobacz, jak angielski może zmienić Twoje możliwości
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mb-16">
          <!-- Before/After section -->
          <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">
              🚫 Przed korepetycjami
            </h3>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <span class="text-red-500 text-xl">❌</span>
                <span class="text-gray-700">"I no speak English very good"</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-500 text-xl">❌</span>
                <span class="text-gray-700">Strach przed mówieniem w klasie</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-500 text-xl">❌</span>
                <span class="text-gray-700">Oceny 2-3 z angielskiego</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-500 text-xl">❌</span>
                <span class="text-gray-700">Brak pewności w rozmowach</span>
              </li>
            </ul>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">
              ✅ Po korepetycjach
            </h3>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <span class="text-green-500 text-xl">✅</span>
                <span class="text-gray-700">Płynne rozmowy po angielsku</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-500 text-xl">✅</span>
                <span class="text-gray-700">Aktywne uczestnictwo w lekcjach</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-500 text-xl">✅</span>
                <span class="text-gray-700">Oceny 4-5 z angielskiego</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-500 text-xl">✅</span>
                <span class="text-gray-700">Gotowość na wyjazd za granicę</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing for English -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-lg text-gray-900 mb-4">Cennik</h2>
          <p class="text-large text-gray-600">
            Przejrzyste ceny, dostosowane do poziomu
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="bg-white rounded-2xl shadow-lg p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">
              Podstawowy
            </h3>
            <div class="text-4xl font-bold text-blue-600 mb-6">
              90 zł
              <span class="text-lg text-gray-500 font-normal">/godz</span>
            </div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center gap-2">
                <span class="text-green-500">✓</span>
                <span class="text-gray-700">Poziom A1-A2</span>
              </li>
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
            <h3 class="text-2xl font-bold mb-2 mt-4">Średniozaawansowany</h3>
            <div class="text-4xl font-bold mb-6">
              110 zł
              <span class="text-lg text-blue-100 font-normal">/godz</span>
            </div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center gap-2">
                <span class="text-yellow-300">✓</span>
                <span>Wszystko z poprzedniego</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-yellow-300">✓</span>
                <span>Poziom B1-B2</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-yellow-300">✓</span>
                <span>Przygotowanie do matury</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-yellow-300">✓</span>
                <span>Symulacje egzaminów</span>
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
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Zaawansowany</h3>
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
                <span class="text-gray-700">Poziom C1-C2</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-green-500">✓</span>
                <span class="text-gray-700">Business English</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-green-500">✓</span>
                <span class="text-gray-700">CAE/CPE</span>
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
    <section class="section-padding gradient-bg">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-lg text-gray-900 mb-4">
            Co mówią nasi uczniowie?
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <div class="flex items-center gap-1 mb-4">
              <span class="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p class="text-gray-700 mb-4 italic">
              "Zaczynałam od poziomu A1, a po roku zdałam FCE na B2!
              Teraz pracuję w międzynarodowej firmie."
            </p>
            <div class="font-semibold text-gray-900">Martyna, 22 lata</div>
            <div class="text-sm text-gray-600">Cambridge FCE - Grade B</div>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <div class="flex items-center gap-1 mb-4">
              <span class="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p class="text-gray-700 mb-4 italic">
              "Mój syn przestał się bać mówić po angielsku.
              Na maturze dostał 94%!"
            </p>
            <div class="font-semibold text-gray-900">Pani Małgorzata</div>
            <div class="text-sm text-gray-600">Mama maturzysty</div>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <div class="flex items-center gap-1 mb-4">
              <span class="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p class="text-gray-700 mb-4 italic">
              "Dzięki lekcjom dostałem pracę w Londynie.
              Business English to game changer!"
            </p>
            <div class="font-semibold text-gray-900">Paweł, 26 lat</div>
            <div class="text-sm text-gray-600">Marketing Manager, London</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="section-padding bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600"
    >
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center text-white">
          <h2 class="text-4xl font-bold mb-6">Ready to start?</h2>
          <p class="text-xl text-blue-100 mb-8">
            Umów darmową lekcję próbną i przekonaj się,
            że angielski może być Twoją mocną stroną!
          </p>
          <UiButton
            variant="primary"
            size="lg"
            href="#contact"
            class="!bg-white !text-blue-600 hover:!bg-gray-100 shadow-2xl"
          >
            Book your free trial lesson
          </UiButton>
          <p class="text-sm text-blue-200 mt-4">
            Bez zobowiązań • Flexible schedule • Online or offline
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
  title: "Korepetycje z Języka Angielskiego - Od podstaw po poziom C1",
  ogTitle: "Korepetycje z Angielskiego - Skuteczna nauka, szybkie efekty",
  description:
    "Profesjonalne korepetycje z języka angielskiego dla wszystkich poziomów. Przygotowanie do matury, egzaminów Cambridge, Business English. Konwersacje od pierwszej lekcji. Umów darmową lekcję próbną!",
  ogDescription:
    "Angielski na poziom B2-C1. Przygotowanie do matury i egzaminów Cambridge. 98% zdawalność. Konwersacje od pierwszej lekcji. Umów darmową lekcję próbną!",
});
</script>