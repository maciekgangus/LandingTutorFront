import { ref, computed } from 'vue'
import type { Subject, Teacher, FAQ, Review } from '~/types'

interface SubjectsData {
  subjects: Subject[]
}

interface TeachersData {
  teachers: Teacher[]
}

interface FaqData {
  faq: FAQ[]
}

interface ReviewsData {
  reviews: Review[]
}

// Cache dla danych
const subjectsCache = ref<Subject[] | null>(null)
const teachersCache = ref<Teacher[] | null>(null)
const faqCache = ref<FAQ[] | null>(null)
const reviewsCache = ref<Review[] | null>(null)

/**
 * Composable do ładowania danych o przedmiotach
 */
export const useSubjectsData = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)

  const loadSubjects = async () => {
    if (subjectsCache.value) {
      return subjectsCache.value
    }

    loading.value = true
    error.value = null

    try {
      const response = await $fetch<{ success: boolean; data: { subjects: Subject[] } }>('/api/content/subjects')
      subjectsCache.value = response.data.subjects
      return response.data.subjects
    } catch (err) {
      error.value = 'Błąd podczas ładowania danych o przedmiotach'
      console.error('Error loading subjects:', err)
      return []
    } finally {
      loading.value = false
    }
  }

  const subjects = computed(() => subjectsCache.value || [])

  return {
    subjects,
    loading: readonly(loading),
    error: readonly(error),
    loadSubjects,
    refresh: () => {
      subjectsCache.value = null
      return loadSubjects()
    }
  }
}

/**
 * Composable do ładowania danych o nauczycielach
 */
export const useTeachersData = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)

  const loadTeachers = async () => {
    if (teachersCache.value) {
      return teachersCache.value
    }

    loading.value = true
    error.value = null

    try {
      const response = await $fetch<{ success: boolean; data: { teachers: Teacher[] } }>('/api/content/teachers')
      teachersCache.value = response.data.teachers
      return response.data.teachers
    } catch (err) {
      error.value = 'Błąd podczas ładowania danych o nauczycielach'
      console.error('Error loading teachers:', err)
      return []
    } finally {
      loading.value = false
    }
  }

  const teachers = computed(() => teachersCache.value || [])

  return {
    teachers,
    loading: readonly(loading),
    error: readonly(error),
    loadTeachers,
    refresh: () => {
      teachersCache.value = null
      return loadTeachers()
    }
  }
}

/**
 * Composable do ładowania FAQ z możliwością filtrowania po kategorii
 */
export const useFaqData = (category?: string) => {
  const loading = ref(false)
  const error = ref<string | null>(null)

  const loadFaq = async () => {
    if (faqCache.value) {
      return faqCache.value
    }

    loading.value = true
    error.value = null

    try {
      const response = await $fetch<{ success: boolean; data: { faq: FAQ[] } }>('/api/content/faq')
      faqCache.value = response.data.faq
      return response.data.faq
    } catch (err) {
      error.value = 'Błąd podczas ładowania FAQ'
      console.error('Error loading FAQ:', err)
      return []
    } finally {
      loading.value = false
    }
  }

  const allFaq = computed(() => faqCache.value || [])

  const faq = computed(() => {
    if (!category) return allFaq.value
    return allFaq.value.filter(item => item.category === category)
  })

  const categories = computed(() => {
    const cats = new Set(allFaq.value.map(item => item.category))
    return Array.from(cats)
  })

  return {
    faq,
    allFaq,
    categories,
    loading: readonly(loading),
    error: readonly(error),
    loadFaq,
    refresh: () => {
      faqCache.value = null
      return loadFaq()
    }
  }
}

/**
 * Composable do ładowania opinii klientów
 */
export const useReviewsData = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)

  const loadReviews = async () => {
    if (reviewsCache.value) {
      return reviewsCache.value
    }

    loading.value = true
    error.value = null

    try {
      const response = await $fetch<{ success: boolean; data: { reviews: Review[] } }>('/api/content/reviews')
      reviewsCache.value = response.data.reviews
      return response.data.reviews
    } catch (err) {
      error.value = 'Błąd podczas ładowania opinii'
      console.error('Error loading reviews:', err)
      return []
    } finally {
      loading.value = false
    }
  }

  const reviews = computed(() => reviewsCache.value || [])

  return {
    reviews,
    loading: readonly(loading),
    error: readonly(error),
    loadReviews,
    refresh: () => {
      reviewsCache.value = null
      return loadReviews()
    }
  }
}

/**
 * Composable do ładowania wszystkich danych na raz
 */
export const useAllContent = () => {
  const { subjects, loadSubjects, loading: subjectsLoading } = useSubjectsData()
  const { teachers, loadTeachers, loading: teachersLoading } = useTeachersData()
  const { faq, loadFaq, loading: faqLoading } = useFaqData()
  const { reviews, loadReviews, loading: reviewsLoading } = useReviewsData()

  const loading = computed(() =>
    subjectsLoading.value || teachersLoading.value || faqLoading.value || reviewsLoading.value
  )

  const loadAllContent = async () => {
    await Promise.all([
      loadSubjects(),
      loadTeachers(),
      loadFaq(),
      loadReviews()
    ])
  }

  return {
    subjects,
    teachers,
    faq,
    reviews,
    loading,
    loadAllContent
  }
}