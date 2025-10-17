<template>
  <section id="contact" class="section-padding bg-white">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="heading-lg text-gray-900 mb-4">Skontaktuj się z nami</h2>
        <p class="text-large text-gray-600 max-w-3xl mx-auto">
          Masz pytania? Chcesz umówić pierwszą lekcję? Skontaktuj się z nami!
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="card">
          <h3 class="text-xl font-semibold text-gray-900 mb-6">
            Wyślij wiadomość
          </h3>

          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Imię *
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Jan Kowalski"
                />
              </div>

              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="jan@example.com"
                />
              </div>
            </div>

            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  for="phone"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Telefon *
                </label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  required
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="+48 123 456 789"
                />
              </div>

              <div>
                <label
                  for="subject"
                  class="block text-sm font-medium text-gray-700 mb-2"
                >
                  Przedmiot
                </label>
                <select
                  id="subject"
                  v-model="form.subject"
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Wybierz przedmiot</option>
                  <option value="matematyka">Matematyka</option>
                  <option value="angielski">Język angielski</option>
                  <option value="informatyka">Informatyka</option>
                </select>
              </div>
            </div>

            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-700 mb-2"
              >
                Wiadomość *
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Opisz swoje potrzeby..."
              ></textarea>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Preferowana forma kontaktu
              </label>
              <div class="flex space-x-4">
                <label class="flex items-center">
                  <input
                    v-model="form.preferredContact"
                    type="radio"
                    value="email"
                    class="mr-2"
                  />
                  Email
                </label>
                <label class="flex items-center">
                  <input
                    v-model="form.preferredContact"
                    type="radio"
                    value="phone"
                    class="mr-2"
                  />
                  Telefon
                </label>
              </div>
            </div>

            <p v-if="errorMsg" class="text-sm text-red-600">{{ errorMsg }}</p>
            <p v-if="successMsg" class="text-sm text-green-600">
              {{ successMsg }}
            </p>

            <button
              type="submit"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość" }}
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div class="space-y-8">
          <div class="card">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">
              Dane kontaktowe
            </h3>

            <div class="space-y-4">
              <div class="flex items-center">
                <div
                  class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                >
                  <svg
                    class="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L6.16 10.68a11.027 11.027 0 005.395 5.395l1.293-4.064a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-gray-900">Telefon</p>
                  <p class="text-gray-600">+48 123 456 789</p>
                </div>
              </div>

              <div class="flex items-center">
                <div
                  class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                >
                  <svg
                    class="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-gray-900">Email</p>
                  <p class="text-gray-600">kontakt@korepetycje.pl</p>
                </div>
              </div>

              <div class="flex items-center">
                <div
                  class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                >
                  <svg
                    class="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-gray-900">Adres</p>
                  <p class="text-gray-600">
                    ul. Bohaterów Monte Casino<br />81-155 Sopot
                  </p>
                </div>
              </div>

              <div class="flex items-center">
                <div
                  class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4"
                >
                  <svg
                    class="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p class="font-medium text-gray-900">Godziny pracy</p>
                  <p class="text-gray-600">
                    Pn-Pt: 8:00-21:00<br />Sb: 8:00-16:00<br />Nd: 8:00-15:00
                  </p>
                  <p class="text-sm">
                    Oferujemy również lekcje w innych godzinach w razie
                    potrzeby.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">
              Znajdź nas w mediach społecznościowych
            </h3>
            <div class="flex space-x-4">
              <a
                href="#"
                class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
              >
                <span class="sr-only">Facebook</span>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
              >
                <span class="sr-only">Twitter</span>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
              >
                <span class="sr-only">Instagram</span>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.398-1.297-.95-.808-1.297-1.684-1.297-2.634V9.441c0-.95.347-1.826 1.297-2.634.95-.807 2.101-1.297 3.398-1.297h7.102c1.297 0 2.448.49 3.398 1.297.95.808 1.297 1.684 1.297 2.634v3.616c0 .95-.347 1.826-1.297 2.634-.95.807-2.101 1.297-3.398 1.297H8.449z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ContactForm } from "~/types";

const form = reactive<ContactForm>({
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  preferredContact: "email",
});

const isSubmitting = ref(false);
const errorMsg = ref("");
const successMsg = ref("");

const submitForm = async () => {
  errorMsg.value = "";
  successMsg.value = "";
  isSubmitting.value = true;

  const config = useRuntimeConfig();
  try {
    const res = await $fetch<{ success: boolean }>(
      `${config.public.apiUrl}/api/v1/contact/`,
      {
        method: "POST",
        body: form,
      },
    );
    if (res?.success) {
      successMsg.value =
        "Dziękujemy za wiadomość! Skontaktujemy się z Tobą w ciągu 24h.";
      Object.assign(form, {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        preferredContact: "email",
      });
    } else {
      errorMsg.value =
        "Nie udało się wysłać wiadomości. Sprawdź dane i spróbuj ponownie.";
    }
  } catch (e: any) {
    errorMsg.value = "Wystąpił błąd podczas wysyłania wiadomości.";
  } finally {
    isSubmitting.value = false;
  }
};
</script>
