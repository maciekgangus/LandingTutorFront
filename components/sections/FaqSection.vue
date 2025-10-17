<template>
  <section id="faq" class="section-padding gradient-bg">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="heading-lg text-gray-900 mb-4">
          Najczęściej zadawane pytania
        </h2>
        <p class="text-large text-gray-600 max-w-3xl mx-auto">
          Wszystko, co musisz wiedzieć o naszych korepetycjach. Nie znalazłeś
          odpowiedzi? Skontaktuj się z nami!
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="space-y-6">
          <div
            v-for="(faq, index) in faqs"
            :key="faq.id"
            class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full px-8 py-6 text-left flex justify-between items-start hover:bg-gray-50 focus:outline-none transition-colors duration-200"
            >
              <div class="flex-1 pr-4">
                <h3 class="font-semibold text-lg text-gray-900 leading-relaxed">
                  {{ faq.question }}
                </h3>
              </div>
              <div
                :class="[
                  'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300',
                  openFaqs.includes(index)
                    ? 'bg-blue-600 rotate-180'
                    : 'bg-gray-200',
                ]"
              >
                <svg
                  class="w-5 h-5 transition-colors duration-300"
                  :class="
                    openFaqs.includes(index) ? 'text-white' : 'text-gray-600'
                  "
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
              </div>
            </button>

            <transition
              enter-active-class="transition-all duration-300 ease-out"
              leave-active-class="transition-all duration-300 ease-in"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-96"
              leave-from-class="opacity-100 max-h-96"
              leave-to-class="opacity-0 max-h-0"
            >
              <div v-show="openFaqs.includes(index)" class="overflow-hidden">
                <div class="px-8 pb-6 pt-2">
                  <p class="text-gray-600 leading-relaxed">{{ faq.answer }}</p>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <div class="mt-12 text-center">
          <div class="bg-white rounded-2xl shadow-md p-8">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">
              Masz inne pytanie?
            </h3>
            <p class="text-gray-600 mb-6">
              Nasz zespół jest gotowy, aby Ci pomóc!
            </p>
            <UiButton variant="primary" to="/#contact">
              Skontaktuj się z nami
            </UiButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { FAQ } from "~/types";

const openFaqs = ref<number[]>([]);

const toggleFaq = (index: number) => {
  if (openFaqs.value.includes(index)) {
    openFaqs.value = openFaqs.value.filter((i) => i !== index);
  } else {
    openFaqs.value.push(index);
  }
};

const faqs: FAQ[] = [
  {
    id: "1",
    question: "Jak przebiega pierwsza lekcja?",
    answer:
      "Pierwsza lekcja to spotkanie diagnostyczne, podczas którego poznajemy potrzeby ucznia, sprawdzamy poziom wiedzy i ustalamy plan nauki. Trwa ona zwykle 15 minut i jest bezpłatna.",
    category: "general",
  },
  {
    id: "2",
    question: "Czy mogę zmieniać terminy lekcji?",
    answer:
      "Tak, oferujemy pełną elastyczność w planowaniu lekcji. Wystarczy powiadomić nas z 24-godzinnym wyprzedzeniem o potrzebie zmiany terminu.",
    category: "scheduling",
  },
  {
    id: "3",
    question: "Jak wyglądają lekcje online?",
    answer:
      "Lekcje online odbywają się przez nowoczesne platformy edukacyjne z tablicą interaktywną (idroo), udostępnianiem ekranu i możliwością jego nagrywania. Jakość nauczania jest identyczna jak w przypadku lekcji stacjonarnych.",
    category: "online",
  },
  {
    id: "4",
    question: "Jakie są formy płatności?",
    answer:
      "Akceptujemy płatności gotówką, przelewem bankowym oraz BLIK. Można płacić za pojedyncze lekcje lub wykupić pakiety z rabatem.",
    category: "payment",
  },
  {
    id: "5",
    question: "Czy oferujecie zajęcia grupowe?",
    answer:
      "Tak, organizujemy zajęcia grupowe online dla 2-3 osób. To doskonała opcja dla znajomych o podobnym poziomie wiedzy. Cena za osobę jest wtedy niższa.",
    category: "group",
  },
  {
    id: "6",
    question: "Jak szybko można zobaczyć postępy?",
    answer:
      "Pierwsze postępy są widoczne już po 2-3 lekcjach. Regularnie monitorujemy rozwój ucznia i informujemy o osiąganych celach.",
    category: "progress",
  },
  {
    id: "7",
    question: "Jaka jest minimalna liczba lekcji do zakupu?",
    answer:
      "Nie ma minimalnej liczby lekcji. Możesz zacząć od pojedynczej lekcji próbnej, a następnie zdecydować o dalszej współpracy.",
    category: "general",
  },
];
</script>
