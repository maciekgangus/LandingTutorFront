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

    <!-- Hero Section for Computer Science -->
    <section
      class="relative min-h-[70vh] flex items-center bg-gradient-to-br from-slate-900 via-purple-900 to-violet-900 pt-24"
    >
      <div class="container-custom">
        <div class="max-w-4xl mx-auto text-center text-white">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6"
          >
            <span class="text-3xl">💻</span>
            <span class="text-sm font-medium">Korepetycje z informatyki</span>
          </div>

          <h1 class="text-5xl lg:text-6xl font-bold mb-6">
            Przygotowanie do <br />
            <span class="text-green-400">matury rozszerzonej</span>
          </h1>

          <p
            class="text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Kompleksowe przygotowanie do matury rozszerzonej z informatyki. Code
            review, projekty do portfolio i pomoc w starcie kariery IT.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <UiButton
              variant="primary"
              size="lg"
              href="#contact"
              class="!bg-green-500 !text-white hover:!bg-green-600 shadow-xl"
            >
              Umów darmową lekcję
            </UiButton>
            <UiButton
              variant="outline"
              size="lg"
              href="#program"
              class="!border-2 !border-white !text-white !bg-white/10 backdrop-blur-sm hover:!bg-white hover:!text-purple-600 transition-all duration-300"
            >
              Zobacz program
            </UiButton>
          </div>

          <!-- Quick Stats -->
          <div
            class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6"
          >
            <div class="text-center">
              <div class="text-3xl lg:text-4xl font-bold text-green-400 mb-1">92%</div>
              <div class="text-sm text-purple-100">Zdawalność matury</div>
            </div>
            <div class="text-center">
              <div class="text-3xl lg:text-4xl font-bold text-green-400 mb-1">4.9/5</div>
              <div class="text-sm text-purple-100">Ocena uczniów</div>
            </div>
            <div class="text-center">
              <div class="text-3xl lg:text-4xl font-bold text-green-400 mb-1">15+</div>
              <div class="text-sm text-purple-100">Projektów w portfolio</div>
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
                    Programowanie wydaje się niemożliwe
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Kod to dla Ciebie czarna magia, a błędy kompletnie
                    niezrozumiałe
                  </p>
                </div>
              </div>
              <div
                class="flex gap-4 p-6 bg-red-50 rounded-xl border-l-4 border-red-500"
              >
                <span class="text-2xl">📚</span>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">
                    Matura z informatyki to stres
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Nie wiesz od czego zacząć przygotowania, a czas ucieka i w
                    szkole nie ma miejsca na Twoje pytania
                  </p>
                </div>
              </div>
              <div
                class="flex gap-4 p-6 bg-red-50 rounded-xl border-l-4 border-red-500"
              >
                <span class="text-2xl">😫</span>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">
                    Chcesz się dostać na studia IT
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Potrzebujesz wysokiego wyniku, ale nie wiesz jak się
                    przygotować
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
                    Praktyczne podejście
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Uczysz się przez tworzenie - od prostych skryptów po
                    zaawansowane aplikacje
                  </p>
                </div>
              </div>
              <div
                class="flex gap-4 p-6 bg-green-50 rounded-xl border-l-4 border-green-500"
              >
                <span class="text-2xl">💡</span>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">
                    Strategia na 100% z matury
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Rozwiązujemy zadania maturalne, omawiamy pułapki i najlepsze
                    strategie
                  </p>
                </div>
              </div>
              <div
                class="flex gap-4 p-6 bg-green-50 rounded-xl border-l-4 border-green-500"
              >
                <span class="text-2xl">🎯</span>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-2">
                    Code review i portfolio
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Pomoc w budowaniu projektów, przegląd kodu i wsparcie w
                    szukaniu pracy
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
          <!-- Matura rozszerzona -->
          <div
            class="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-green-500"
          >
            <button
              @click="toggleLevel('matura-rozszerzona')"
              class="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <div class="flex items-center gap-4">
                <span class="text-3xl">🎯</span>
                <div class="text-left">
                  <h3 class="text-xl font-semibold text-gray-900">
                    Matura rozszerzona z informatyki
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Kompleksowe przygotowanie do egzaminu - najlepsze uczelnie techniczne
                  </p>
                </div>
              </div>
              <svg
                class="w-6 h-6 transition-transform"
                :class="openLevel === 'matura-rozszerzona' ? 'rotate-180' : ''"
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
              v-show="openLevel === 'matura-rozszerzona'"
              class="px-8 pb-6 py-4"
            >
              <ul class="grid md:grid-cols-2 gap-3 text-gray-700">
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Reprezentacja informacji
                  i systemy liczbowe
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Algorytmy i struktury
                  danych
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Programowanie w
                  Pythonie/C++
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Programowanie obiektowe
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Bazy danych i SQL
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Sieci komputerowe i
                  bezpieczeństwo
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Złożoność obliczeniowa
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Grafy i drzewa
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Arkusze kalkulacyjne i
                  analiza danych
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Rozwiązywanie zadań
                  maturalnych
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Matury próbne i analiza
                  błędów
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Zadania olimpijskie
                  (opcjonalnie)
                </li>
              </ul>
              <div class="mt-6 p-4 bg-green-50 rounded-lg">
                <p class="text-sm text-green-900 font-semibold">
                  ⭐ Średni wynik naszych uczniów: 88% (PW, AGH, UW, Gdańsk)
                </p>
              </div>
            </div>
          </div>

          <!-- Code Review -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              @click="toggleLevel('code-review')"
              class="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <div class="flex items-center gap-4">
                <span class="text-3xl">🔍</span>
                <div class="text-left">
                  <h3 class="text-xl font-semibold text-gray-900">
                    Code Review i Best Practices
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Profesjonalna analiza kodu i nauka dobrych praktyk
                  </p>
                </div>
              </div>
              <svg
                class="w-6 h-6 transition-transform"
                :class="openLevel === 'code-review' ? 'rotate-180' : ''"
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
            <div v-show="openLevel === 'code-review'" class="px-8 pb-6 py-4">
              <ul class="grid md:grid-cols-2 gap-3 text-gray-700">
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Analiza Twojego kodu
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Clean Code principles
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Optymalizacja wydajności
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Debugowanie i testowanie
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Git i kontrola wersji
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Refactoring i
                  architektura
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Dokumentacja kodu
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Przygotowanie do code
                  interview
                </li>
              </ul>
            </div>
          </div>

          <!-- Portfolio & Career -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              @click="toggleLevel('portfolio')"
              class="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <div class="flex items-center gap-4">
                <span class="text-3xl">💼</span>
                <div class="text-left">
                  <h3 class="text-xl font-semibold text-gray-900">
                    Portfolio i Start Kariery IT
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Budowanie portfolio i pomoc w szukaniu pierwszej pracy
                  </p>
                </div>
              </div>
              <svg
                class="w-6 h-6 transition-transform"
                :class="openLevel === 'portfolio' ? 'rotate-180' : ''"
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
            <div v-show="openLevel === 'portfolio'" class="px-8 pb-6 py-4">
              <ul class="grid md:grid-cols-2 gap-3 text-gray-700">
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Projektowanie portfolio
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Wybór projektów do
                  zrobienia
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> GitHub i prezentacja
                  kodu
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> CV i LinkedIn dla
                  programisty
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Przygotowanie do rozmów
                  rekrutacyjnych
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Gdzie szukać pierwszej
                  pracy/stażu
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Jakie technologie się
                  uczyć
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Roadmap do Junior
                  Developer
                </li>
              </ul>
            </div>
          </div>

          <!-- Python Programming -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              @click="toggleLevel('python')"
              class="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <div class="flex items-center gap-4">
                <span class="text-3xl">🐍</span>
                <div class="text-left">
                  <h3 class="text-xl font-semibold text-gray-900">
                    Python - Od podstaw do zaawansowanych
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Najpopularniejszy język programowania na świecie
                  </p>
                </div>
              </div>
              <svg
                class="w-6 h-6 transition-transform"
                :class="openLevel === 'python' ? 'rotate-180' : ''"
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
            <div v-show="openLevel === 'python'" class="px-8 pb-6 py-4">
              <ul class="grid md:grid-cols-2 gap-3 text-gray-700">
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Podstawy składni i typy
                  danych
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Funkcje i moduły
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Programowanie obiektowe
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Obsługa plików i
                  wyjątków
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> NumPy, Pandas (analiza
                  danych)
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Web scraping i
                  automatyzacja
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Django/Flask (web
                  development)
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Prawdziwe projekty i
                  portfolio
                </li>
              </ul>
            </div>
          </div>

          <!-- Java & C++ -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              @click="toggleLevel('java-cpp')"
              class="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <div class="flex items-center gap-4">
                <span class="text-3xl">☕</span>
                <div class="text-left">
                  <h3 class="text-xl font-semibold text-gray-900">
                    Java & C++ - Programowanie obiektowe
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Języki korporacyjne i wydajne systemy
                  </p>
                </div>
              </div>
              <svg
                class="w-6 h-6 transition-transform"
                :class="openLevel === 'java-cpp' ? 'rotate-180' : ''"
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
            <div v-show="openLevel === 'java-cpp'" class="px-8 pb-6 py-4">
              <div class="mb-4">
                <h4 class="font-semibold text-gray-900 mb-3">Java:</h4>
                <ul class="grid md:grid-cols-2 gap-3 text-gray-700">
                  <li class="flex items-center gap-2">
                    <span class="text-green-600">•</span> OOP i wzorce
                    projektowe
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-green-600">•</span> Spring Boot framework
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-green-600">•</span> Aplikacje enterprise
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-green-600">•</span> Testowanie (JUnit)
                  </li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 mb-3">C++:</h4>
                <ul class="grid md:grid-cols-2 gap-3 text-gray-700">
                  <li class="flex items-center gap-2">
                    <span class="text-green-600">•</span> Wskaźniki i
                    zarządzanie pamięcią
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-green-600">•</span> STL (Standard Template
                    Library)
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-green-600">•</span> Algorytmy
                    konkurencyjne
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-green-600">•</span> Optymalizacja
                    wydajności
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- SQL & Databases -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              @click="toggleLevel('sql')"
              class="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <div class="flex items-center gap-4">
                <span class="text-3xl">🗄️</span>
                <div class="text-left">
                  <h3 class="text-xl font-semibold text-gray-900">
                    SQL i Bazy danych
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Fundamenty każdej aplikacji webowej
                  </p>
                </div>
              </div>
              <svg
                class="w-6 h-6 transition-transform"
                :class="openLevel === 'sql' ? 'rotate-180' : ''"
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
            <div v-show="openLevel === 'sql'" class="px-8 pb-6 py-4">
              <ul class="grid md:grid-cols-2 gap-3 text-gray-700">
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Podstawy SQL i zapytania
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> JOINy i podzapytania
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Projektowanie baz danych
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> PostgreSQL i MySQL
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Indeksy i optymalizacja
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Transakcje i ACID
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> NoSQL (MongoDB)
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Praktyczne projekty
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Advanced Specializations -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-lg text-gray-900 mb-4">Zaawansowane specjalizacje</h2>
          <p class="text-large text-gray-600 max-w-3xl mx-auto">
            Rozwiń swoje umiejętności w najgorętszych dziedzinach IT
          </p>
        </div>

        <div class="max-w-4xl mx-auto space-y-6">
          <!-- AI/ML -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              @click="toggleLevel('aiml')"
              class="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <div class="flex items-center gap-4">
                <span class="text-3xl">🤖</span>
                <div class="text-left">
                  <h3 class="text-xl font-semibold text-gray-900">
                    AI/ML - Sztuczna inteligencja i Machine Learning
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Najbardziej poszukiwane umiejętności w IT
                  </p>
                </div>
              </div>
              <svg
                class="w-6 h-6 transition-transform"
                :class="openLevel === 'aiml' ? 'rotate-180' : ''"
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
            <div v-show="openLevel === 'aiml'" class="px-8 pb-6 py-4">
              <ul class="grid md:grid-cols-2 gap-3 text-gray-700">
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Podstawy ML i Deep
                  Learning
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> TensorFlow i PyTorch
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Sieci neuronowe (CNN,
                  RNN)
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Natural Language
                  Processing
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Computer Vision
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Scikit-learn i
                  preprocessing
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Projekty ML end-to-end
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> MLOps podstawy
                </li>
              </ul>
              <div class="mt-6 p-4 bg-green-50 rounded-lg">
                <p class="text-sm text-green-900 font-semibold">
                  💰 Średnia pensja ML Engineer: 15-25k PLN/mies
                </p>
              </div>
            </div>
          </div>

          <!-- DevOps -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <button
              @click="toggleLevel('devops')"
              class="w-full px-8 py-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <div class="flex items-center gap-4">
                <span class="text-3xl">⚙️</span>
                <div class="text-left">
                  <h3 class="text-xl font-semibold text-gray-900">
                    DevOps i Infrastruktura
                  </h3>
                  <p class="text-gray-600 text-sm">
                    Deployment, automatyzacja i chmura
                  </p>
                </div>
              </div>
              <svg
                class="w-6 h-6 transition-transform"
                :class="openLevel === 'devops' ? 'rotate-180' : ''"
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
            <div v-show="openLevel === 'devops'" class="px-8 pb-6 py-4">
              <ul class="grid md:grid-cols-2 gap-3 text-gray-700">
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Linux i terminal
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Git i GitHub workflow
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Docker i kontenery
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Kubernetes podstawy
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> CI/CD pipelines
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> AWS/Azure/GCP
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Monitoring i logging
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-green-600">•</span> Infrastructure as Code
                </li>
              </ul>
              <div class="mt-6 p-4 bg-green-50 rounded-lg">
                <p class="text-sm text-green-900 font-semibold">
                  🚀 Umiejętności kluczowe dla każdego programisty
                </p>
              </div>
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
            Prosta ścieżka do sukcesu w informatyce
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div
                class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl font-bold text-green-600 mx-auto mb-4"
              >
                1
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                Darmowa lekcja próbna
              </h3>
              <p class="text-gray-600">
                Poznajemy się, sprawdzamy Twój poziom i ustalamy cele - matura,
                programowanie czy kariera w IT.
              </p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl font-bold text-green-600 mx-auto mb-4"
              >
                2
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                Indywidualny plan nauki
              </h3>
              <p class="text-gray-600">
                Tworzymy roadmap z harmonogramem i projektami do portfolio.
              </p>
            </div>
            <div class="text-center">
              <div
                class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl font-bold text-green-600 mx-auto mb-4"
              >
                3
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-3">
                Praktyka i projekty
              </h3>
              <p class="text-gray-600">
                Kodujemy razem, rozwiązujemy prawdziwe problemy, budujesz
                portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="section-padding gradient-bg">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-lg text-gray-900 mb-4">Cennik</h2>
          <p class="text-large text-gray-600">
            Przejrzyste ceny, bez ukrytych kosztów
          </p>
        </div>

        <div class="max-w-md mx-auto">
          <div
            class="bg-gradient-to-br from-purple-600 to-violet-600 rounded-2xl shadow-2xl p-8 text-white border-4 border-green-400"
          >
            <div class="text-center mb-6">
              <div
                class="inline-block bg-green-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold mb-4"
              >
                KOREPETYCJE Z INFORMATYKI
              </div>
              <h3 class="text-3xl font-bold mb-2">120 zł</h3>
              <p class="text-purple-100">za godzinę lekcji (60 min)</p>
            </div>

            <ul class="space-y-3 mb-8">
              <li class="flex items-start gap-2">
                <span class="text-green-300 text-xl">✓</span>
                <span>Przygotowanie do matury rozszerzonej</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-300 text-xl">✓</span>
                <span>Nauka programowania (Python, Java, C++)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-300 text-xl">✓</span>
                <span>Code review i analiza projektów</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-300 text-xl">✓</span>
                <span>Pomoc w budowaniu portfolio</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-300 text-xl">✓</span>
                <span>Doradztwo w szukaniu pracy/stażu</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-300 text-xl">✓</span>
                <span>Materiały i zadania gratis</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-300 text-xl">✓</span>
                <span>Online lub stacjonarnie</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-300 text-xl">✓</span>
                <span>Wsparcie między lekcjami</span>
              </li>
            </ul>

            <UiButton
              variant="primary"
              class="w-full !bg-white !text-purple-600 hover:!bg-gray-100 !text-lg !py-4"
              href="#contact"
            >
              Umów darmową lekcję próbną
            </UiButton>
          </div>
        </div>

        <div class="text-center mt-12">
          <p class="text-gray-600">
            Pierwsza lekcja próbna
            <strong class="text-purple-600">GRATIS</strong>
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
          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <div class="flex items-center gap-1 mb-4">
              <span class="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p class="text-gray-700 mb-4 italic">
              "Zdałem maturę na 96% i dostałem się na informatykę na PW! Mega
              przygotowanie, każdy temat rozłożony na czynniki pierwsze."
            </p>
            <div class="font-semibold text-gray-900">Mateusz, 19 lat</div>
            <div class="text-sm text-gray-600">Politechnika Warszawska</div>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <div class="flex items-center gap-1 mb-4">
              <span class="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p class="text-gray-700 mb-4 italic">
              "Nauczyłem się Pythona od zera i stworzyłem 3 projekty do
              portfolio. Po 4 miesiącach dostałem pierwszą pracę jako Junior
              Dev!"
            </p>
            <div class="font-semibold text-gray-900">Kuba, 20 lat</div>
            <div class="text-sm text-gray-600">Junior Python Developer</div>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <div class="flex items-center gap-1 mb-4">
              <span class="text-yellow-400">⭐⭐⭐⭐⭐</span>
            </div>
            <p class="text-gray-700 mb-4 italic">
              "Wreszcie ktoś, kto potrafi wytłumaczyć algorytmy normalnie!
              Docker i Kubernetes przestały być straszne. Polecam!"
            </p>
            <div class="font-semibold text-gray-900">Ania, 22 lata</div>
            <div class="text-sm text-gray-600">DevOps Engineer</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Stack Preview -->
    <section class="section-padding gradient-bg">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="heading-lg text-gray-900 mb-4">
            Technologie, których się nauczysz
          </h2>
          <p class="text-large text-gray-600">
            Narzędzia używane przez najlepsze firmy IT
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div
              class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div class="text-4xl mb-3">🐍</div>
              <h4 class="font-semibold text-gray-900">Python</h4>
            </div>
            <div
              class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div class="text-4xl mb-3">☕</div>
              <h4 class="font-semibold text-gray-900">Java</h4>
            </div>
            <div
              class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div class="text-4xl mb-3">⚡</div>
              <h4 class="font-semibold text-gray-900">C++</h4>
            </div>
            <div
              class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div class="text-4xl mb-3">🗄️</div>
              <h4 class="font-semibold text-gray-900">SQL</h4>
            </div>
            <div
              class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div class="text-4xl mb-3">🐳</div>
              <h4 class="font-semibold text-gray-900">Docker</h4>
            </div>
            <div
              class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div class="text-4xl mb-3">☸️</div>
              <h4 class="font-semibold text-gray-900">Kubernetes</h4>
            </div>
            <div
              class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div class="text-4xl mb-3">🤖</div>
              <h4 class="font-semibold text-gray-900">TensorFlow</h4>
            </div>
            <div
              class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div class="text-4xl mb-3">☁️</div>
              <h4 class="font-semibold text-gray-900">AWS</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="section-padding bg-gradient-to-br from-slate-900 via-purple-900 to-violet-900"
    >
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center text-white">
          <h2 class="text-4xl font-bold mb-6">Zacznij swoją karierę w IT</h2>
          <p class="text-xl text-purple-100 mb-8">
            Umów darmową lekcję próbną i zobacz, jak szybko możesz się rozwijać
            w informatyce
          </p>
          <UiButton
            variant="primary"
            size="lg"
            href="#contact"
            class="!bg-green-500 !text-white hover:!bg-green-600 shadow-2xl"
          >
            Umów darmową lekcję próbną
          </UiButton>
          <p class="text-sm text-purple-200 mt-4">
            Bez zobowiązań • Pierwsze projekty już na pierwszych lekcjach
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
  title:
    "Korepetycje z Informatyki - Matura rozszerzona, Python, Java, C++, Code Review",
  ogTitle: "Korepetycje z Informatyki - Przygotowanie do matury rozszerzonej",
  description:
    "Profesjonalne korepetycje z informatyki: przygotowanie do matury rozszerzonej, Python, Java, C++, SQL. Code review, budowa portfolio i pomoc w szukaniu pierwszej pracy IT. Umów darmową lekcję!",
  ogDescription:
    "Matura rozszerzona z informatyki. Code review, projekty portfolio i doradztwo kariery IT. 92% zdawalność matury. 120 zł/h. Umów darmową lekcję próbną!",
});
</script>
