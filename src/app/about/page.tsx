import { Metadata } from 'next'
import AboutClient from '@/components/AboutClient'
import { getTeamMembers } from '@/sanity/lib/dataService'

export const metadata: Metadata = {
  title: 'Rreth Nesh & Ekipi | A-X Engineering Gostivar',
  description:
    'Zbuloni A-X Engineering: studio e projektimit arkitektonik, inxhinierisë civile dhe mbikëqyrjes profesionale të ndërtimit në Gostivar.',
}

export default async function AboutPage() {
  const team = await getTeamMembers()
  return <AboutClient team={team} />
}
