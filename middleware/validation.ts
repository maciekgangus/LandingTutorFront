import { z } from 'zod'
import type { H3Event } from 'h3'

// Podstawowe schematy walidacji
export const ContactFormSchema = z.object({
  name: z.string()
    .min(2, 'Imię musi mieć minimum 2 znaki')
    .max(50, 'Imię może mieć maksymalnie 50 znaków')
    .regex(/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s-]+$/, 'Imię może zawierać tylko litery, spacje i myślniki'),

  email: z.string()
    .email('Niepoprawny format adresu email')
    .max(100, 'Email może mieć maksymalnie 100 znaków'),

  phone: z.string()
    .min(9, 'Numer telefonu musi mieć minimum 9 cyfr')
    .max(15, 'Numer telefonu może mieć maksymalnie 15 cyfr')
    .regex(/^[+]?[0-9\s-()]+$/, 'Niepoprawny format numeru telefonu'),

  subject: z.string()
    .max(100, 'Przedmiot może mieć maksymalnie 100 znaków')
    .optional()
    .default(''),

  message: z.string()
    .min(10, 'Wiadomość musi mieć minimum 10 znaków')
    .max(1000, 'Wiadomość może mieć maksymalnie 1000 znaków'),

  preferredContact: z.enum(['email', 'phone'], {
    errorMap: () => ({ message: 'Preferowany kontakt musi być email lub phone' })
  }).default('email')
})

export const BookingFormSchema = z.object({
  studentName: z.string()
    .min(2, 'Imię ucznia musi mieć minimum 2 znaki')
    .max(50, 'Imię ucznia może mieć maksymalnie 50 znaków')
    .regex(/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s-]+$/, 'Imię może zawierać tylko litery, spacje i myślniki'),

  parentName: z.string()
    .min(2, 'Imię rodzica musi mieć minimum 2 znaki')
    .max(50, 'Imię rodzica może mieć maksymalnie 50 znaków')
    .regex(/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s-]+$/, 'Imię może zawierać tylko litery, spacje i myślniki')
    .optional(),

  email: z.string()
    .email('Niepoprawny format adresu email')
    .max(100, 'Email może mieć maksymalnie 100 znaków'),

  phone: z.string()
    .min(9, 'Numer telefonu musi mieć minimum 9 cyfr')
    .max(15, 'Numer telefonu może mieć maksymalnie 15 cyfr')
    .regex(/^[+]?[0-9\s-()]+$/, 'Niepoprawny format numeru telefonu'),

  subject: z.enum(['matematyka', 'fizyka', 'chemia', 'informatyka', 'angielski'], {
    errorMap: () => ({ message: 'Niepoprawny przedmiot' })
  }),

  level: z.enum(['podstawowy', 'średni', 'zaawansowany', 'matura', 'studia'], {
    errorMap: () => ({ message: 'Niepoprawny poziom' })
  }),

  preferredTime: z.string()
    .min(5, 'Preferowany termin musi być określony')
    .max(200, 'Preferowany termin może mieć maksymalnie 200 znaków'),

  notes: z.string()
    .max(500, 'Uwagi mogą mieć maksymalnie 500 znaków')
    .optional()
})

// Typy wynikowe
export type ValidatedContactForm = z.infer<typeof ContactFormSchema>
export type ValidatedBookingForm = z.infer<typeof BookingFormSchema>

// Utility functions dla error handling
export interface ValidationError {
  field: string
  message: string
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  errors?: ValidationError[]
}

export function formatZodErrors(error: z.ZodError): ValidationError[] {
  return error.errors.map(err => ({
    field: err.path.join('.'),
    message: err.message
  }))
}

export function createSuccessResponse<T>(data: T, message?: string): ApiResponse<T> {
  return {
    success: true,
    data,
    message
  }
}

export function createErrorResponse(message: string, errors?: ValidationError[]): ApiResponse {
  return {
    success: false,
    message,
    errors
  }
}

// Middleware functions
export async function validateContactForm(event: H3Event): Promise<ValidatedContactForm> {
  const body = await readBody(event)
  const result = ContactFormSchema.safeParse(body)

  if (!result.success) {
    const errors = formatZodErrors(result.error)
    setResponseStatus(event, 400)
    throw createError({
      statusCode: 400,
      statusMessage: 'Błąd walidacji danych',
      data: {
        success: false,
        message: 'Przesłane dane są niepoprawne',
        errors
      }
    })
  }

  return result.data
}

export async function validateBookingForm(event: H3Event): Promise<ValidatedBookingForm> {
  const body = await readBody(event)
  const result = BookingFormSchema.safeParse(body)

  if (!result.success) {
    const errors = formatZodErrors(result.error)
    setResponseStatus(event, 400)
    throw createError({
      statusCode: 400,
      statusMessage: 'Błąd walidacji danych',
      data: {
        success: false,
        message: 'Przesłane dane są niepoprawne',
        errors
      }
    })
  }

  return result.data
}

// Rate limiting helper (prosty in-memory store)
const requestCounts = new Map<string, { count: number, resetTime: number }>()

export function checkRateLimit(ip: string, maxRequests = 10, windowMs = 60000): boolean {
  const now = Date.now()
  const record = requestCounts.get(ip)

  if (!record || now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (record.count >= maxRequests) {
    return false
  }

  record.count++
  return true
}

export function applyRateLimit(event: H3Event, maxRequests = 10, windowMs = 60000): void {
  // Bezpieczne pobieranie IP
  let ip = 'unknown'
  try {
    ip = event.node.req.socket.remoteAddress || 'unknown'
  } catch {
    ip = getHeader(event, 'x-forwarded-for') ||
         getHeader(event, 'x-real-ip') ||
         'unknown'
  }

  if (!checkRateLimit(ip, maxRequests, windowMs)) {
    setResponseStatus(event, 429)
    throw createError({
      statusCode: 429,
      statusMessage: 'Zbyt wiele żądań',
      data: {
        success: false,
        message: 'Zbyt wiele żądań. Spróbuj ponownie za chwilę.'
      }
    })
  }
}

// Logger helper
export function logRequest(event: H3Event, data?: any): void {
  const timestamp = new Date().toISOString()
  const method = getMethod(event)
  const url = getRequestURL(event)

  // Bezpieczne pobieranie IP - obsługa różnych wersji H3
  let ip = 'unknown'
  try {
    ip = event.node.req.socket.remoteAddress || 'unknown'
  } catch {
    // Fallback dla starszych wersji H3
    ip = getHeader(event, 'x-forwarded-for') ||
         getHeader(event, 'x-real-ip') ||
         'unknown'
  }

  console.log(`[${timestamp}] ${method} ${url} - IP: ${ip}`, data ? { data } : '')
}