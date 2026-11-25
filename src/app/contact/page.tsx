import { Metadata } from 'next'
import ContactClient from '@/components/ContactClient'

export const metadata: Metadata = {
  title: 'Kontakt | A-X Engineering Architecture Studio Gostivar',
  description:
    'Kontaktoni studion e projektimit dhe ndërtimit A-X Engineering në Gostivar. Konsultim për vila luksoze, mbikëqyrje ndërtimi, dhe llogaritje statike.',
}

export default function ContactPage() {
  return <ContactClient />
}
