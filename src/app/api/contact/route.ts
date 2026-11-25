import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, location, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required fields.' },
        { status: 400 }
      )
    }

    const contactId = `contact_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`
    const timestamp = new Date().toISOString()

    const payload = {
      id: contactId,
      timestamp,
      sender: {
        name: String(name).trim(),
        email: String(email).trim().toLowerCase(),
        phone: String(phone || '').trim(),
      },
      project: {
        service: String(service || 'Vila Luksoze / Rezidencë Private'),
        location: String(location || '').trim(),
        message: String(message).trim(),
      },
      status: 'new_lead',
    }

    // Server-side audit log
    console.log('[A-X CONTACT SUBMISSION]', JSON.stringify(payload, null, 2))

    return NextResponse.json(
      {
        success: true,
        message: 'Mesazhi juaj u pranua me sukses.',
        id: contactId,
        timestamp,
      },
      { status: 200 }
    )
  } catch (err: any) {
    console.error('[A-X CONTACT ERROR]', err)
    return NextResponse.json(
      { error: 'Internal server error processing contact request.' },
      { status: 500 }
    )
  }
}
