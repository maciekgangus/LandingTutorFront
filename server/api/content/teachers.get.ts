import { readFileSync } from 'fs'
import { join } from 'path'
import yaml from 'js-yaml'
import type { Teacher } from '~/types'

interface TeachersData {
  teachers: Teacher[]
}

export default defineEventHandler(async (event) => {
  try {
    // Ścieżka do pliku YAML
    const yamlPath = join(process.cwd(), 'content', 'teachers.yaml')

    // Odczytanie i parsowanie pliku YAML
    const fileContent = readFileSync(yamlPath, 'utf8')
    const data = yaml.load(fileContent) as TeachersData

    // Walidacja danych
    if (!data || !Array.isArray(data.teachers)) {
      throw new Error('Invalid teachers data structure')
    }

    // Zwrócenie danych z dodatkowym metadanymi
    return {
      success: true,
      data: {
        teachers: data.teachers,
        lastUpdated: new Date().toISOString(),
        count: data.teachers.length
      }
    }
  } catch (error) {
    console.error('Error loading teachers data:', error)

    // Zwrócenie błędu
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to load teachers data',
      data: {
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    })
  }
})