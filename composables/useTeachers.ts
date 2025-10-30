import { computed } from 'vue'
import type { Teacher } from '~/types'
import { useTeachersData } from './useContent'

/**
 * Composable specyficzne dla zarządzania nauczycielami
 */
export const useTeachers = () => {
  const { teachers, loading, error, loadTeachers } = useTeachersData()

  /**
   * Pobiera nauczyciela po ID
   */
  const getTeacherById = (id: string): Teacher | undefined => {
    return teachers.value.find(teacher => teacher.id === id)
  }

  /**
   * Pobiera nauczycieli uczących określonego przedmiotu
   */
  const getTeachersBySubject = (subject: string): Teacher[] => {
    return teachers.value.filter(teacher =>
      teacher.subjects.includes(subject)
    )
  }

  /**
   * Pobiera top nauczycieli (sortowanych po doświadczeniu)
   */
  const getTopTeachers = (limit = 3): Teacher[] => {
    return [...teachers.value]
      .sort((a, b) => b.experience - a.experience)
      .slice(0, limit)
  }

  /**
   * Wyszukuje nauczycieli po nazwie, przedmiocie lub opisie
   */
  const searchTeachers = (query: string): Teacher[] => {
    if (!query.trim()) return teachers.value

    const searchTerm = query.toLowerCase().trim()
    return teachers.value.filter(teacher =>
      teacher.name.toLowerCase().includes(searchTerm) ||
      teacher.description.toLowerCase().includes(searchTerm) ||
      teacher.education.toLowerCase().includes(searchTerm) ||
      teacher.subjects.some(subject => subject.toLowerCase().includes(searchTerm))
    )
  }

  /**
   * Pobiera nauczycieli z określonym doświadczeniem (min lat)
   */
  const getExperiencedTeachers = (minYears: number): Teacher[] => {
    return teachers.value.filter(teacher => teacher.experience >= minYears)
  }

  /**
   * Pobiera wszystkie przedmioty prowadzone przez nauczycieli
   */
  const getAllSubjectsTaught = computed(() => {
    const subjects = new Set<string>()
    teachers.value.forEach(teacher => {
      teacher.subjects.forEach(subject => subjects.add(subject))
    })
    return Array.from(subjects).sort()
  })

  /**
   * Pobiera statystyki nauczycieli
   */
  const getTeachersStats = computed(() => {
    if (teachers.value.length === 0) {
      return {
        total: 0,
        averageExperience: 0,
        totalSubjects: 0,
        experienceRange: { min: 0, max: 0 }
      }
    }

    const experiences = teachers.value.map(t => t.experience)
    const totalSubjects = new Set(teachers.value.flatMap(t => t.subjects)).size

    return {
      total: teachers.value.length,
      averageExperience: Math.round(
        experiences.reduce((sum, exp) => sum + exp, 0) / experiences.length
      ),
      totalSubjects,
      experienceRange: {
        min: Math.min(...experiences),
        max: Math.max(...experiences)
      }
    }
  })

  /**
   * Pobiera nauczycieli specjalizujących się w przedmiotach ścisłych
   */
  const getScienceTeachers = computed(() => {
    const scienceSubjects = ['matematyka', 'fizyka', 'chemia', 'informatyka']
    return teachers.value.filter(teacher =>
      teacher.subjects.some(subject => scienceSubjects.includes(subject))
    )
  })

  /**
   * Pobiera nauczycieli specjalizujących się w przedmiotach humanistycznych
   */
  const getHumanitiesTeachers = computed(() => {
    const humanitiesSubjects = ['polski', 'angielski', 'geografia', 'biologia']
    return teachers.value.filter(teacher =>
      teacher.subjects.some(subject => humanitiesSubjects.includes(subject))
    )
  })

  /**
   * Sprawdza czy nauczyciel uczy określonego przedmiotu
   */
  const teachesSubject = (teacherId: string, subject: string): boolean => {
    const teacher = getTeacherById(teacherId)
    return teacher?.subjects.includes(subject) || false
  }

  /**
   * Pobiera najlepszego nauczyciela dla przedmiotu (z największym doświadczeniem)
   */
  const getBestTeacherForSubject = (subject: string): Teacher | undefined => {
    const subjectTeachers = getTeachersBySubject(subject)
    if (subjectTeachers.length === 0) return undefined

    return subjectTeachers.reduce((best, current) =>
      current.experience > best.experience ? current : best
    )
  }

  /**
   * Pobiera nauczycieli którzy uczą wielu przedmiotów
   */
  const getVersatileTeachers = (minSubjects = 2): Teacher[] => {
    return teachers.value.filter(teacher => teacher.subjects.length >= minSubjects)
  }

  /**
   * Sortuje nauczycieli według różnych kryteriów
   */
  const sortTeachers = (criteria: 'name' | 'experience' | 'subjects') => {
    return computed(() => {
      const sorted = [...teachers.value]

      switch (criteria) {
        case 'name':
          return sorted.sort((a, b) => a.name.localeCompare(b.name))
        case 'experience':
          return sorted.sort((a, b) => b.experience - a.experience)
        case 'subjects':
          return sorted.sort((a, b) => b.subjects.length - a.subjects.length)
        default:
          return sorted
      }
    })
  }

  /**
   * Pobiera nauczycieli z określoną specjalizacją w wykształceniu
   */
  const getTeachersByEducation = (educationKeyword: string): Teacher[] => {
    return teachers.value.filter(teacher =>
      teacher.education.toLowerCase().includes(educationKeyword.toLowerCase())
    )
  }

  /**
   * Pobiera polecanych nauczycieli (z długim doświadczeniem i szeroką specjalizacją)
   */
  const getRecommendedTeachers = computed(() => {
    return teachers.value
      .filter(teacher => teacher.experience >= 8 && teacher.subjects.length >= 2)
      .sort((a, b) => b.experience - a.experience)
  })

  return {
    // Dane
    teachers,
    loading,
    error,

    // Metody
    loadTeachers,
    getTeacherById,
    getTeachersBySubject,
    getTopTeachers,
    searchTeachers,
    getExperiencedTeachers,
    teachesSubject,
    getBestTeacherForSubject,
    getVersatileTeachers,
    sortTeachers,
    getTeachersByEducation,

    // Computed properties
    getAllSubjectsTaught,
    getTeachersStats,
    getScienceTeachers,
    getHumanitiesTeachers,
    getRecommendedTeachers
  }
}