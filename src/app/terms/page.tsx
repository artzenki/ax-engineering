import type { Metadata } from 'next'
import TermsClient from '@/components/TermsClient'

export const metadata: Metadata = {
  title: 'Kushtet e Përdorimit | A-X Engineering',
  description: 'Kushtet e përdorimit dhe rregullat ligjore të shërbimeve inxhinierike dhe arkitekturore A-X Engineering.',
}

export default function TermsPage() {
  return <TermsClient />
}
