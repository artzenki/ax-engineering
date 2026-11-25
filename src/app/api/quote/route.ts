import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      name,
      phone,
      email,
      notes,
      projectType,
      customProjectType,
      area,
      floors,
      location,
      customLocation,
      services,
    } = body

    // Validation
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Name, phone and email are required fields.' },
        { status: 400 }
      )
    }

    const submissionId = `quote_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`
    const timestamp = new Date().toISOString()

    const payload = {
      id: submissionId,
      timestamp,
      client: {
        name: String(name).trim(),
        phone: String(phone).trim(),
        email: String(email).trim().toLowerCase(),
        notes: String(notes || '').trim(),
      },
      specification: {
        projectType: customProjectType ? String(customProjectType).trim() : String(projectType || 'residential'),
        area: Number(area) || 350,
        floors: String(floors || 'P + 1'),
        location: customLocation ? String(customLocation).trim() : String(location || 'Gostivar'),
        services: Array.isArray(services) ? services : [],
      },
      status: 'pending_review',
    }

    // Server-side audit log
    console.log('[A-X QUOTE SUBMISSION]', JSON.stringify(payload, null, 2))

    return NextResponse.json(
      {
        success: true,
        message: 'Kërkesa për ofertë u regjistrua me sukses.',
        id: submissionId,
        timestamp,
      },
      { status: 200 }
    )
  } catch (err: any) {
    console.error('[A-X QUOTE ERROR]', err)
    return NextResponse.json(
      { error: 'Internal server error processing quote request.' },
      { status: 500 }
    )
  }
}
