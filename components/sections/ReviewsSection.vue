<template>
  <section id="reviews" class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="heading-lg text-gray-900 mb-4">Opinie naszych uczniów</h2>
        <p class="text-large text-gray-600 max-w-3xl mx-auto">
          Zobacz co mówią o nas uczniowie i ich rodzice.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="review in reviews" :key="review.id" class="card">
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
              <span class="text-gray-600 font-semibold text-sm">
                {{ review.name.charAt(0) }}
              </span>
            </div>
            <div>
              <h4 class="font-semibold text-gray-900">{{ review.name }}</h4>
              <div class="flex items-center">
                <div class="flex text-yellow-400 mr-2">
                  <span v-for="star in 5" :key="star" class="text-lg">
                    {{ star <= review.rating ? '★' : '☆' }}
                  </span>
                </div>
                <span class="text-sm text-gray-500">{{ review.subject }}</span>
              </div>
            </div>
          </div>

          <blockquote class="text-gray-700 italic mb-4">
            "{{ review.comment }}"
          </blockquote>

          <div class="text-sm text-gray-500">
            {{ formatDate(review.date) }}
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <div class="inline-flex items-center space-x-4 bg-blue-50 px-6 py-4 rounded-lg">
          <div class="text-2xl font-bold text-blue-600">4.9/5</div>
          <div class="text-gray-700">
            <div class="font-semibold">Średnia ocen</div>
            <div class="text-sm">na podstawie 500+ opinii</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Review } from '~/types'

const reviews: Review[] = [
  {
    id: '1',
    name: 'Marta Kowalska',
    rating: 5,
    comment: 'Dzięki korepetycjom z matematyki poprawiłam ocenę z 2 na 5! Anna świetnie tłumaczy trudne zagadnienia.',
    subject: 'Matematyka',
    date: '2024-03-15'
  },
  {
    id: '2',
    name: 'Jan Nowak',
    rating: 5,
    comment: 'Piotr pomógł mi przygotować się do matury z chemii. Zdałem na 95%! Bardzo polecam.',
    subject: 'Chemia',
    date: '2024-03-10'
  },
  {
    id: '3',
    name: 'Anna Wiśniewska',
    rating: 5,
    comment: 'Sarah jest niesamowitą nauczycielką angielskiego. Dzięki niej zdałam egzamin FCE!',
    subject: 'Język angielski',
    date: '2024-03-08'
  },
  {
    id: '4',
    name: 'Piotr Zieliński',
    rating: 4,
    comment: 'Profesjonalne podejście, elastyczność w planowaniu lekcji. Polecam każdemu!',
    subject: 'Fizyka',
    date: '2024-03-05'
  },
  {
    id: '5',
    name: 'Karolina Maj',
    rating: 5,
    comment: 'Córka bardzo chętnie chodzi na korepetycje. Widać postępy już po pierwszym miesiącu.',
    subject: 'Matematyka',
    date: '2024-03-01'
  },
  {
    id: '6',
    name: 'Tomasz Król',
    rating: 5,
    comment: 'Lekcje online są bardzo dobrze przygotowane. Platforma jest intuicyjna i funkcjonalna.',
    subject: 'Informatyka',
    date: '2024-02-28'
  }
]

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
