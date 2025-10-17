import { z } from 'zod'

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  subject: z.string().optional().default(''),
  message: z.string().min(10),
  preferredContact: z.enum(['email', 'phone']).default('email')
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const parsed = ContactSchema.safeParse(body)
  if (!parsed.success) {
    setResponseStatus(event, 400)
    return { ok: false, errors: parsed.error.flatten() }
  }

  // Tu można podpiąć wysyłkę e-mail / CRM / webhook
  // await sendEmail(parsed.data)

  return {
    ok: true,
    received: parsed.data,
    timestamp: new Date().toISOString()
  }
})

