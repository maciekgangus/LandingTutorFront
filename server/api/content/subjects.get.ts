import { readFileSync } from 'fs'
import { join } from 'path'
import yaml from 'js-yaml'
import type { Subject } from '~/types'

interface SubjectsData {
  subjects: Subject[]
}

export default defineEventHandler(async (event) => {
  try {
    // Ścieżka do pliku YAML
    const yamlPath = join(process.cwd(), 'content', 'subjects.yaml')

    // Odczytanie i parsowanie pliku YAML
    const fileContent = readFileSync(yamlPath, 'utf8')
    const data = yaml.load(fileContent) as SubjectsData

    // Walidacja danych
    if (!data || !Array.isArray(data.subjects)) {
      throw new Error('Invalid subjects data structure')
    }

    // Zwrócenie danych z dodatkowym metadanymi
    return {
      success: true,
      data: {
        subjects: data.subjects,
        lastUpdated: new Date().toISOString(),
        count: data.subjects.length
      }
    }
  } catch (error) {
    console.error('Error loading subjects data:', error)

    // Zwrócenie błędu
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to load subjects data',
      data: {
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    })
  }
})