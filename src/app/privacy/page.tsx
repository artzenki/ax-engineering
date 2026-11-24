import type { Metadata } from 'next'
import PrivacyClient from '@/components/PrivacyClient'

export const metadata: Metadata = {
  title: 'Politika e Privatësisë | A-X Engineering',
  description: 'Politika e privatësisë dhe mbrojtja e të dhënave për studion e arkitekturës dhe inxhinierisë A-X Engineering.',
}

export default function PrivacyPage() {
  return <PrivacyClient />
}
