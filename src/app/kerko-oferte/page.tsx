import type { Metadata } from 'next'
import QuoteStepperClient from '@/components/QuoteStepperClient'

export const metadata: Metadata = {
  title: 'Kërko Ofertë | A-X Engineering',
  description: 'Llogaritësi interaktiv i projektit të ndërtimit, projektimit arkitektonik dhe mbikëqyrjes inxhinierike nga A-X Engineering në Gostivar.',
}

export default function QuotePage() {
  return <QuoteStepperClient />
}
