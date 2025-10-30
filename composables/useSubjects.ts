import { computed } from 'vue'
import type { Subject } from '~/types'
import { useSubjectsData } from './useContent'

/**
 * Composable specyficzne dla zarządzania przedmiotami
 */
export const useSubjects = () => {
  const { subjects, loading, error, loadSubjects } = useSubjectsData()

  /**
   * Pobiera przedmiot po slug
   */
  const getSubjectBySlug = (slug: string): Subject | undefined => {
    return subjects.value.find(subject => subject.id === slug)
  }

  /**
   * Pobiera przedmioty dla określonego poziomu
   */
  const getSubjectsByLevel = (level: string): Subject[] => {
    return subjects.value.filter(subject =>
      subject.levels.some(subjectLevel =>
        subjectLevel.toLowerCase().includes(level.toLowerCase())
      )
    )
  }

  /**
   * Pobiera popularne przedmioty (sortowane po cenie od najniższej)
   */
  const getPopularSubjects = (limit = 4): Subject[] => {
    return [...subjects.value]
      .sort((a, b) => a.priceFrom - b.priceFrom)
      .slice(0, limit)
  }

  /**
   * Wyszukuje przedmioty po nazwie lub opisie
   */
  const searchSubjects = (query: string): Subject[] => {
    if (!query.trim()) return subjects.value

    const searchTerm = query.toLowerCase().trim()
    return subjects.value.filter(subject =>
      subject.name.toLowerCase().includes(searchTerm) ||
      subject.description.toLowerCase().includes(searchTerm) ||
      subject.levels.some(level => level.toLowerCase().includes(searchTerm))
    )
  }

  /**
   * Pobiera przedmioty w określonym przedziale cenowym
   */
  const getSubjectsByPriceRange = (minPrice: number, maxPrice: number): Subject[] => {
    return subjects.value.filter(subject =>
      subject.priceFrom >= minPrice && subject.priceFrom <= maxPrice
    )
  }

  /**
   * Pobiera wszystkie dostępne poziomy ze wszystkich przedmiotów
   */
  const getAllLevels = computed(() => {
    const levels = new Set<string>()
    subjects.value.forEach(subject => {
      subject.levels.forEach(level => levels.add(level))
    })
    return Array.from(levels).sort()
  })

  /**
   * Pobiera przedmioty ścisłe (matematyka, fizyka, chemia, informatyka)
   */
  const getScienceSubjects = computed(() => {
    const scienceSubjectIds = ['matematyka', 'fizyka', 'chemia', 'informatyka']
    return subjects.value.filter(subject =>
      scienceSubjectIds.includes(subject.id)
    )
  })

  /**
   * Pobiera przedmioty humanistyczne
   */
  const getHumanitiesSubjects = computed(() => {
    const humanitiesSubjectIds = ['polski', 'angielski', 'geografia']
    return subjects.value.filter(subject =>
      humanitiesSubjectIds.includes(subject.id)
    )
  })

  /**
   * Pobiera statystyki przedmiotów
   */
  const getSubjectsStats = computed(() => {
    if (subjects.value.length === 0) {
      return {
        total: 0,
        averagePrice: 0,
        priceRange: { min: 0, max: 0 },
        totalLevels: 0
      }
    }

    const prices = subjects.value.map(s => s.priceFrom)
    const totalLevels = new Set(subjects.value.flatMap(s => s.levels)).size

    return {
      total: subjects.value.length,
      averagePrice: Math.round(prices.reduce((sum, price) => sum + price, 0) / prices.length),
      priceRange: {
        min: Math.min(...prices),
        max: Math.max(...prices)
      },
      totalLevels
    }
  })

  /**
   * Sprawdza czy przedmiot ma określony poziom
   */
  const hasLevel = (subjectId: string, level: string): boolean => {
    const subject = getSubjectBySlug(subjectId)
    return subject?.levels.includes(level) || false
  }

  /**
   * Pobiera przedmioty przygotowujące do matury
   */
  const getMaturaSubjects = computed(() => {
    return subjects.value.filter(subject =>
      subject.levels.includes('matura')
    )
  })

  /**
   * Sortuje przedmioty według różnych kryteriów
   */
  const sortSubjects = (criteria: 'name' | 'price' | 'levels') => {
    return computed(() => {
      const sorted = [...subjects.value]

      switch (criteria) {
        case 'name':
          return sorted.sort((a, b) => a.name.localeCompare(b.name))
        case 'price':
          return sorted.sort((a, b) => a.priceFrom - b.priceFrom)
        case 'levels':
          return sorted.sort((a, b) => b.levels.length - a.levels.length)
        default:
          return sorted
      }
    })
  }

  return {
    // Dane
    subjects,
    loading,
    error,

    // Metody
    loadSubjects,
    getSubjectBySlug,
    getSubjectsByLevel,
    getPopularSubjects,
    searchSubjects,
    getSubjectsByPriceRange,
    hasLevel,
    sortSubjects,

    // Computed properties
    getAllLevels,
    getScienceSubjects,
    getHumanitiesSubjects,
    getSubjectsStats,
    getMaturaSubjects
  }
}