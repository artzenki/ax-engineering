import { createClient } from 'next-sanity'
import fs from 'fs'
import path from 'path'

let authToken = ''
const configPaths = [
  path.join(process.env.HOME || '', '.config', 'sanity', 'config.json'),
  path.join(process.env.HOME || '', '.sanity', 'config.json'),
]

for (const cp of configPaths) {
  if (fs.existsSync(cp)) {
    try {
      const data = JSON.parse(fs.readFileSync(cp, 'utf-8'))
      if (data.authToken) {
        authToken = data.authToken
        break
      }
    } catch {}
  }
}

if (!authToken) {
  authToken = process.env.SANITY_AUTH_TOKEN || ''
}

const client = createClient({
  projectId: '1s3zgmg6',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: authToken,
  useCdn: false,
})

const specsUpdate = [
  {
    id: 'project-ax-horizon-residence',
    floors: 'P + 2 + PK',
    apartments: '1 Vilë Individuale',
    parkingSpaces: '4 Garazhe të Mbyllura',
    energyClass: 'Klasa A+',
    isUnderConstruction: false,
    progressPercent: 100,
    currentPhase: 'I Përfunduar & Dorëzuar me Sukses',
    currentPhase_mk: 'Завршен и Предаден со Употребна Дозвола',
    currentPhase_en: 'Completed & Certified with Occupancy Permit',
    expectedCompletion: '2024',
    stages: [
      { name: 'Gërmimi & Themeli i Thellë', name_mk: 'Ископ и Фундирање', name_en: 'Deep Excavation & Foundation', status: 'completed', date: 'Q1 2023' },
      { name: 'Struktura Monolite e Betonit', name_mk: 'Арматура и Бетонска Конструкција', name_en: 'Monolithic Concrete Structure', status: 'completed', date: 'Q3 2023' },
      { name: 'Fasada Termike & Dritare Schuco', name_mk: 'Фасадна Изолација & Schuco', name_en: 'Thermal Envelope & Glazing', status: 'completed', date: 'Q1 2024' },
      { name: 'Enterieri & Mobilimi i Brendshëm', name_mk: 'Внатрешно Уредување', name_en: 'Interior & Custom Millwork', status: 'completed', date: 'Q3 2024' },
      { name: 'Pranimi Teknik & Çelësa në Dorë', name_mk: 'Технички Преглед & Клуч на Рака', name_en: 'Technical Inspection & Handover', status: 'completed', date: '2024' },
    ],
  },
  {
    id: 'project-ax-signature-residences',
    floors: '2B + P + 6',
    apartments: '36 Apartamente Ekskluzive & Penthouses',
    parkingSpaces: '48 Vende nëntokësore',
    energyClass: 'Klasa A+',
    isUnderConstruction: true,
    progressPercent: 82,
    currentPhase: 'Faza Aktuale: Fasada e Ventiluar & Punimet e Instalimeve Termosanitare',
    currentPhase_mk: 'Тековна Фаза: Вентилирана фасада и термо-санитарни инсталации',
    currentPhase_en: 'Current Phase: Ventilated Facade & MEP Installations',
    expectedCompletion: 'Fundi i Vitit 2025',
    stages: [
      { name: 'Gërmimi dhe Stabilizimi i Nëntokës', name_mk: 'Ископ и Подземна Заштита', name_en: 'Deep Excavation & Sub-Level Piling', status: 'completed', date: 'Q1 2024' },
      { name: 'Skeleti Monolit 6 Kate', name_mk: 'Монолитна Армирано-Бетонска Конструкција', name_en: 'Monolithic 6-Story Concrete Shell', status: 'completed', date: 'Q3 2024' },
      { name: 'Muret Ndarëse Akustike & Fasada', name_mk: 'Акустични Преградни Ѕидови & Фасада', name_en: 'Acoustic Partitions & Ventilated Facade', status: 'current', date: 'Q1 2025' },
      { name: 'Instalimet e Ngrohjes Qendrore & Smart Home', name_mk: 'Греење & Паметен Дом', name_en: 'Floor Heating & Smart Home Automation', status: 'current', date: 'Q2 2025' },
      { name: 'Parku Privat & Pranim Teknik', name_mk: 'Приватен Парк & Технички Прием', name_en: 'Private Courtyard & Technical Handover', status: 'upcoming', date: 'Fundi 2025' },
    ],
  },
  {
    id: 'project-boutique-residence-m',
    floors: 'P + 2',
    apartments: 'Vilë Rezidenciale me Zonë Wellness',
    parkingSpaces: '3 Vende Parkimi',
    energyClass: 'Klasa A+',
    isUnderConstruction: false,
    progressPercent: 100,
    currentPhase: 'I Përfunduar & Çertifikuar',
    currentPhase_mk: 'Завршен и Сертифициран',
    currentPhase_en: 'Completed & Certified',
    expectedCompletion: '2024',
    stages: [
      { name: 'Gërmimi & Izolimi i Pishinës', name_mk: 'Ископ & Базен Хидроизолација', name_en: 'Excavation & Pool Waterproofing', status: 'completed', date: '2023' },
      { name: 'Struktura Arkitekturore e Hapur', name_mk: 'Отворена Архитектонска Конструкција', name_en: 'Open Cantilevered Structure', status: 'completed', date: '2023' },
      { name: 'Fasada me Dru Termo-Trajtuar', name_mk: 'Термо-Третирано Дрво', name_en: 'Thermo-Treated Timber Facade', status: 'completed', date: '2024' },
      { name: 'Salla e Wellness & Spa', name_mk: 'Велнес & Спа Салон', name_en: 'Private Wellness & Spa Suite', status: 'completed', date: '2024' },
    ],
  },
  {
    id: 'project-kalyon-technical-complex',
    floors: 'P + 3',
    apartments: 'Kompleks Industrial & Logjistik',
    parkingSpaces: '50 Vende për Kamionë & Vetura',
    energyClass: 'Klasa A (Industrial Eurocode)',
    isUnderConstruction: false,
    progressPercent: 100,
    currentPhase: 'I Përfunduar me Sukses',
    currentPhase_mk: 'Завршен со Употребна Дозвола',
    currentPhase_en: 'Completed & Operational',
    expectedCompletion: '2023',
    stages: [
      { name: 'Faza e Themelit me Plaka të Rënda', name_mk: 'Индустриски Темелни Плочи', name_en: 'Heavy Duty Industrial Slab Foundations', status: 'completed', date: '2022' },
      { name: 'Skeleti Çeliku & Parapërgatitja', name_mk: 'Челична Конструкција', name_en: 'Prefabricated Steel Superstructure', status: 'completed', date: '2023' },
      { name: 'Panelet Sanduiç Termike & Çatia', name_mk: 'Термоизолациони Панели', name_en: 'Thermal Sandwich Panels & Roof', status: 'completed', date: '2023' },
      { name: 'Audit Teknik i Sigurisë Strukturore', name_mk: 'Технички Аудит на Статика', name_en: 'Structural Safety & Load Testing Audit', status: 'completed', date: '2023' },
    ],
  },
  {
    id: 'project-panorama-tower-urban-complex',
    floors: '3B + P + 12',
    apartments: '42 Apartamente & 12 Zyra',
    parkingSpaces: '85 Vende Parkimi',
    energyClass: 'Klasa A+ Premium',
    isUnderConstruction: true,
    progressPercent: 68,
    currentPhase: 'Faza Aktuale: Montim i Fasadës së Ventiluar & Instalimet e Ashensorëve',
    currentPhase_mk: 'Тековна Фаза: Вентилирана фасада и монтажа на панорамски лифтови',
    currentPhase_en: 'Current Phase: Ventilated Facade & Panoramic Elevator Installations',
    expectedCompletion: 'Fillim 2026',
    stages: [
      { name: 'Faza e Thellë Gjeoteknike (Pilona)', name_mk: 'Длабоко Фундирање со Шпови', name_en: 'Deep Piled Foundation Engineering', status: 'completed', date: 'Q2 2024' },
      { name: 'Skeleti Vertikal 12 Kate', name_mk: 'Вертикална Конструкција 12 Ката', name_en: '12-Story Monolithic Concrete Core', status: 'completed', date: 'Q4 2024' },
      { name: 'Fasada Panoramike e Xhamit', name_mk: 'Панорамска Стаклена Фасада', name_en: 'Panoramic Curtain Wall Glazing', status: 'current', date: 'Q1 2025' },
      { name: 'Instalimet e Brendshme & BMS', name_mk: 'Инсталации & Паметен Систем', name_en: 'Internal Infrastructure & Smart BMS', status: 'upcoming', date: 'Q3 2025' },
      { name: 'Pranimi Teknik Shtetëror', name_mk: 'Државен Технички Преглед', name_en: 'State Technical Certification', status: 'upcoming', date: '2026' },
    ],
  },
  {
    id: 'project-the-stone-ridge-villa',
    floors: 'B + P + 1',
    apartments: 'Vilë Kodrinore Panoramike',
    parkingSpaces: '2 Garazhe të Brendshme',
    energyClass: 'Klasa A+',
    isUnderConstruction: false,
    progressPercent: 100,
    currentPhase: 'I Përfunduar',
    currentPhase_mk: 'Завршен',
    currentPhase_en: 'Completed',
    expectedCompletion: '2024',
    stages: [
      { name: 'Gërmimi në Shkëmb & Mure Mbajtëse', name_mk: 'Ископ во Карпа & Потпорни Ѕидови', name_en: 'Rock Excavation & Retaining Walls', status: 'completed', date: '2023' },
      { name: 'Struktura me Beton të Dukshëm (Fair-faced)', name_mk: 'Натурен Декоративен Бетон', name_en: 'Fair-Faced Architectural Concrete', status: 'completed', date: '2023' },
      { name: 'Fasada me Gur Natyror të Zonës', name_mk: 'Природен Автохтон Камен', name_en: 'Local Natural Stone Cladding', status: 'completed', date: '2024' },
      { name: 'Përfundimi i Enterierit & Tarracave', name_mk: 'Ентериер и Тераси', name_en: 'Interior Joinery & Cantilevered Decks', status: 'completed', date: '2024' },
    ],
  },
  {
    id: 'project-vanguard-corporate-centre',
    floors: '2B + P + 5',
    apartments: '18 Hub-e Afariste & Zyra',
    parkingSpaces: '65 Vende Parkimi Nëntokësor',
    energyClass: 'Klasa A+ (Double-skin Solar)',
    isUnderConstruction: true,
    progressPercent: 78,
    currentPhase: 'Faza Aktuale: Montim i Fasadës së Dyfishtë të Xhamit & Instalimet HVAC',
    currentPhase_mk: 'Тековна Фаза: Монтажа на двојна соларна стаклена фасада и климатизација',
    currentPhase_en: 'Current Phase: Double-Skin Solar Curtain Wall & Central HVAC Installations',
    expectedCompletion: 'Q4 2025',
    stages: [
      { name: 'Gërmime të Thella & Mure Mbrojtëse', name_mk: 'Длабок Ископ & Потпорни Ѕидови', name_en: 'Excavation & Retaining Diaphragm', status: 'completed', date: 'Q1 2024' },
      { name: 'Skeleti Monolit & 2 Nivele Nëntokësore', name_mk: 'Бетонска Конструкција & Подземни Нивоа', name_en: 'Monolithic Concrete & 2 Sub-Levels', status: 'completed', date: 'Q3 2024' },
      { name: 'Fasada e Dyfishtë e Xhamit & Çeliku', name_mk: 'Двојна Стаклена Фасада & Челик', name_en: 'Double-Skin Glazed Facade & Steel', status: 'current', date: 'Q1 2025' },
      { name: 'Rrjeti Elektrik, BMS & HVAC', name_mk: 'Електроинсталации & Климатизација', name_en: 'BMS Smart Network & HVAC', status: 'current', date: 'Q2 2025' },
      { name: 'Lobi Qendror & Pranim Përfundimtar', name_mk: 'Централно Лоби & Употребна Дозвола', name_en: 'Central Lobby & Occupancy Approval', status: 'upcoming', date: 'Q4 2025' },
    ],
  },
  {
    id: 'project-villa-olea-luxury-estate',
    floors: 'P + 1',
    apartments: 'Vilë Alpine Ekskluzive',
    parkingSpaces: '3 Garazhe Private',
    energyClass: 'Klasa A+',
    isUnderConstruction: true,
    progressPercent: 62,
    currentPhase: 'Faza Aktuale: Veshje me Gur Natyror Lavorat & Zdrukthëtari Alpine',
    currentPhase_mk: 'Тековна Фаза: Поставување на природен речен камен и дрвена фасада',
    currentPhase_en: 'Current Phase: Natural River Stone Cladding & Timber Joinery',
    expectedCompletion: 'Verë 2025',
    stages: [
      { name: 'Stabilizimi i Terrenit & Themeli', name_mk: 'Стабилизација на Терен & Темели', name_en: 'Terrain Stabilization & Foundation', status: 'completed', date: 'Q2 2024' },
      { name: 'Struktura Monolite e Betonit', name_mk: 'Армирано-Бетонска Конструкција', name_en: 'Monolithic Concrete Structure', status: 'completed', date: 'Q4 2024' },
      { name: 'Veshja me Gur Lavorat & Izolimi Termik', name_mk: 'Камена Фасада & Термоизолација', name_en: 'Stone Cladding & Thermal Insulation', status: 'current', date: 'Q1 2025' },
      { name: 'Dritaret Triple-Glazed & Parketi Alpin', name_mk: 'Тројно Застаклување & Паркет', name_en: 'Triple-Glazed Windows & Timber Floors', status: 'upcoming', date: 'Q2 2025' },
      { name: 'Pishina e Jashtme & Peizazhi', name_mk: 'Отворен Базен & Хортикултура', name_en: 'Infinity Pool & Landscape Gardening', status: 'upcoming', date: 'Verë 2025' },
    ],
  },
]

async function run() {
  console.log('🚀 Updating all 8 Sanity projects with floors, area, and construction progress specs...')

  for (const s of specsUpdate) {
    console.log(`  Updating ${s.id}...`)
    
    await client
      .patch(s.id)
      .set({
        floors: s.floors,
        apartments: s.apartments,
        parkingSpaces: s.parkingSpaces,
        energyClass: s.energyClass,
        isUnderConstruction: s.isUnderConstruction,
        progressPercent: s.progressPercent,
        currentPhase: s.currentPhase,
        currentPhase_mk: s.currentPhase_mk,
        currentPhase_en: s.currentPhase_en,
        expectedCompletion: s.expectedCompletion,
        stages: s.stages,
      })
      .commit()
    
    console.log(`  ✓ Successfully patched ${s.id}`)
  }

  console.log('\n🎉 ALL 8 PROJECTS IN SANITY ARE ENRICHED WITH SPECS & CONSTRUCTION PROGRESS!')
}

run().catch((err) => {
  console.error('Fatal error during project patch:', err)
  process.exit(1)
})
