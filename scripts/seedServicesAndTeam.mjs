import { createClient } from 'next-sanity'
import fs from 'fs'
import path from 'path'

// Get auth token from ~/.config/sanity/config.json or ~/.sanity/config.json
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

async function uploadImageFromUrl(url, filename) {
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const arrayBuffer = await res.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const asset = await client.assets.upload('image', buffer, { filename })
    return asset
  } catch (err) {
    console.warn(`Failed to upload image from ${url}:`, err.message)
    return null
  }
}

const services = [
  {
    _id: 'service-01-architectural-design',
    number: '01',
    order: 1,
    title: 'Projektim & Konceptualizim Arkitekturor',
    title_mk: 'Архитектонско Проектирање & Концепт',
    title_en: 'Architectural Design & Projection',
    shortDescription: 'Masterplane arkitekturore me koncept të lartë, vila private dhe objekte afariste të inxhinieruara sipas kritereve më të larta estetike dhe strukturore.',
    shortDescription_mk: 'Архитектонски решенија со висок концепт, приватни вили и деловни комплекси според највисоки естетски и статички стандарди.',
    shortDescription_en: 'High-concept architectural masterplans, residential villas, and commercial complexes engineered to the highest aesthetic and structural criteria.',
    description: 'Zyra jonë e projektimit krijon arkitekturë bashkëkohore dhe unike që bashkon formën me funksionin. Nga skicat fillestare hapësinore dhe modelet BIM deri te vizualizimet fotorealiste 3D dhe dosjet e plota të lejeve të ndërtimit, ne udhëheqim vizionin tuaj me saktësi maksimale.',
    description_mk: 'Нашето проектантско биро создава современа архитектура која ги спојува формата и функцијата. Од прелиминарни просторни скици и BIM модели до фотореалистични 3D визуелизации и комплетни изведбени досиеја.',
    description_en: 'Our projection office crafts distinct, contemporary architecture that marries form and function. From preliminary hand-sketched spatial studies and BIM models to photorealistic 3D visualizations and complete execution dossiers, we guide your vision with precision.',
    features: [
      'Dizajn Konceptual & Render 3D Fotorealist',
      'Projekte Kryesore të Zbatimit & Leje Ndërtimi',
      'Modelim BIM & Zbulim Konfliktesh Strukturore',
      'Plane Urbanistike & Studime Zonale',
    ],
    features_mk: [
      'Идеен Проект & 3D Фотореалистична Визуелизација',
      'Основни Проекти за Изведба и Одобренија',
      'BIM Моделирање & Координација',
      'Урбанистичко Планирање',
    ],
    features_en: [
      'Conceptual Design & 3D Photorealistic Renderings',
      'Full Execution Projects (Main Design & Permitting)',
      'BIM Modeling & Clash Detection',
      'Urban Planning & Zoning Studies',
    ],
  },
  {
    _id: 'service-02-supervision-audit',
    number: '02',
    order: 2,
    title: 'Mbikëqyrje Ndërtimi & Audit Teknik (Nadzor)',
    title_mk: 'Градежен Надзор & Технички Аудит',
    title_en: 'Construction Site Supervision & Audit',
    shortDescription: 'Mbikëqyrje e pavarur inxhinierike dhe e pakompromis që garanton siguri strukturore, respektim afatesh dhe përputhshmëri të plotë ligjore.',
    shortDescription_mk: 'Независен, бескомпромисен инженеринг надзор кој гарантира структурна сигурност, почитување рокови и правна усогласеност.',
    shortDescription_en: 'Independent, uncompromised engineering oversight ensuring structural safety, timeline adherence, and legal compliance.',
    description: 'Ne mbrojmë investimet e klientëve tanë përmes mbikëqyrjes dhe auditimeve rigoroze teknike në kantier. Inxhinierët tanë të licencuar inspektojnë punimet ditore, verifikojnë cilësinë e betonit dhe armaturës, certifikojnë situacionet e kontraktorëve dhe garantojnë përputhshmëri me të gjitha standardet shtetërore.',
    description_mk: 'Ги заштитуваме инвестициите на нашите клиенти преку ригорозен технички надзор на терен. Нашите лиценцирани инженери вршат секојдневна инспекција, тестирање на материјали и усогласеност со сите државни градежни норми.',
    description_en: 'We safeguard our clients’ investments through rigorous on-site technical supervision and audits. Our certified engineers inspect daily works, verify concrete quality and rebar placement, certify contractor invoices, and ensure total compliance with state construction standards.',
    features: [
      'Mbikëqyrje e Licencuar Ndërtimore (Shërbimi i Nadzorit)',
      'Verifikim i Statikës & Testim i Materialeve',
      'Audit Financiar & Kontroll i Cilësisë së Kontraktorëve',
      'Pranim Teknik & Miratime Përfundimtare për Përdorim',
    ],
    features_mk: [
      'Лиценциран Градежен Надзор',
      'Статичка Контрола & Тестирање на Бетон и Железо',
      'Финансиски Аудит на Изведувачите',
      'Технички Преглед & Употребна Дозвола',
    ],
    features_en: [
      'Licensed Site Supervision (Gradbena Nadzorna Sluzba)',
      'Static & Material Testing Verification',
      'Contractor Quality and Financial Audits',
      'Final Technical Inspection & Occupancy Approvals',
    ],
  },
  {
    _id: 'service-03-luxury-residential',
    number: '03',
    order: 3,
    title: 'Ndërtim Rezidencial Luksoz',
    title_mk: 'Изведба на Луксузни Објекти',
    title_en: 'Luxury Residential Construction',
    shortDescription: 'Ekzekutim me çelësa në dorë i rezidencave private premium dhe komplekseve ekskluzive të zhvilluara nga AX në Gostivar.',
    shortDescription_mk: 'Клуч на рака изведба на премиум приватни вили и наши сопствени потпишани AX проекти во Гостивар.',
    shortDescription_en: 'Turnkey execution of premium private residences and our own signature AX developments in Gostivar.',
    description: 'Nga gërmimet e sakta te punimet më të rafinuara me gurë italianë dhe dru natyror, AX Engineering ndërton banesa të standardeve më të larta. Ne kombinojmë makineri të rënda të specializuara me mjeshtra të rrallë, duke garantuar që rezidenca juaj t’i rezistojë brezave.',
    description_mk: 'Од прецизен ископ до најфини италијански камени завршници, AX Engineering испорачува луксузни домови. Комбинираме врвна механизација со мајсторска прецизност.',
    description_en: 'From precision excavation to the finest Italian stone finishes, AX Engineering delivers high-end residential homes. We combine specialized heavy machinery with master craftsmen, ensuring your residence is built to endure for generations.',
    features: [
      'Ndërtim Çelësa në Dorë i Vilave Luksoze',
      'Zhvillime Ekskluzive AX Signature Residences',
      'Struktura Monolite Betoni të Armuar',
      'Fasada Termike Premium & Dritare Schuco',
    ],
    features_mk: [
      'Клуч на Рака за Премиум Резиденции',
      'AX Signature Residences Проекти',
      'Монолитни Армирано-Бетонски Конструкции',
      'Премиум Термоизолација & Schuco Фасади',
    ],
    features_en: [
      'Turnkey Villa & Luxury Residence Construction',
      'Upcoming AX Signature Residences Developments',
      'Reinforced Concrete Monolithic Structures',
      'Premium Thermal Envelopes & Schuco Glazing',
    ],
  },
  {
    _id: 'service-04-structural-engineering',
    number: '04',
    order: 4,
    title: 'Inxhinieri Statike & Strukturore',
    title_mk: 'Статика & Градежно Инженерство',
    title_en: 'Structural & Civil Engineering',
    shortDescription: 'Llogaritje sizmike, stabilizim themelesh në terrene komplekse dhe projektim statik me efiçiencë të lartë.',
    shortDescription_mk: 'Сеизмички пресметки, стабилизација на темели на комплексни почви и високоефикасно статичко проектирање.',
    shortDescription_en: 'Seismic calculations, foundation stabilization on complex soils, and high-efficiency structural static design.',
    description: 'Themeli i çdo ndërtese të qëndrueshme është inxhinieria e përpiktë. Ne specializohemi në llogaritje komplekse statike, hapësira të parasforcuara, stabilizim të terreneve të pjerrëta dhe zbutje të rrezikut sizmik sipas kushteve gjeoteknike rajonale.',
    description_mk: 'Темелот на секоја долговечна градба е строго инженерство. Специјализирани сме за сложени статички пресметки, пренапрегнат бетон и сеизмичка заштита според Еврокодови.',
    description_en: 'The foundation of every enduring building is rigorous engineering. We specialize in complex static calculations, post-tensioned spans, steep terrain stabilization, and seismic risk mitigation tailored to Balkan geotechnical conditions.',
    features: [
      'Llogaritje Statike & Dinamike Sizmike (Eurocodes)',
      'Inxhinieri Gjeoteknike & Themelesh',
      'Konstruksione Betoni të Parasforcuar & Çeliku',
      'Përforcime Strukturore & Auditim i Sigurisë',
    ],
    features_mk: [
      'Сеизмички & Статички Пресметки (Еврокодови)',
      'Геотехника & Санација на Терен',
      'Преднапрегнат Бетон & Челични Конструкции',
      'Конструктивно Зајакнување',
    ],
    features_en: [
      'Static & Dynamic Structural Calculations (Eurocodes)',
      'Foundation & Geotechnical Engineering',
      'Post-Tensioned Concrete & Steel Frame Design',
      'Structural Reinforcement & Restoration Audits',
    ],
  },
  {
    _id: 'service-05-interior-architecture',
    number: '05',
    order: 5,
    title: 'Arkitekturë Enterieri & Dizajn Hapësinor',
    title_mk: 'Ентериерна Архитектура & Дизајн',
    title_en: 'Interior Architecture & Spatial Styling',
    shortDescription: 'Mjedise harmonike të brendshme ku materialet natyrore, ndriçimi i kuruar dhe zdrukthëtaria me porosi krijojnë hapësira të përjetshme.',
    shortDescription_mk: 'Хармонични внатрешни средини каде природните материјали и дизајнерското осветлување создаваат безвременски простори.',
    shortDescription_en: 'Harmonious interior environments where natural materials, tailored lighting, and bespoke joinery create timeless living spaces.',
    description: 'Ne e trajtojmë enterierin si vazhdimësi organike të mbështjellësit arkitekturor. Studioja jonë e enterierit dizajnon orendi me porosi, përzgjedh paleta mermeri dhe druri fisnik dhe krijon skena ndriçimi që lartësojnë përvojën e jetesës së përditshme.',
    description_mk: 'Пристапуваме кон ентериерот како природно продолжение на архитектурата. Создаваме уникатен мебел, избор на мермер и природно дрво и светлосни сценарија.',
    description_en: 'We approach interiors as an organic continuation of the architectural shell. Our interior studio crafts custom cabinetry, specifies natural stone and timber palettes, and designs bespoke lighting schemes that elevate daily living into an extraordinary experience.',
    features: [
      'Dizajn i Personalizuar i Mobilierisë & Marangozisë',
      'Kurim i Teksturave & Materialeve (Mermer, Dru, Metal)',
      'Ndriçim Arkitekturor & Skenografi Drite',
      'Akustikë Hapësinore & Integrim i Shtëpisë Inteligjente',
    ],
    features_mk: [
      'Прилагоден Мебел & Детали',
      'Премиум Материјали (Мермер, Дрво, Метал)',
      'Архитектонско Осветлување',
      'Паметни Домови & Акустика',
    ],
    features_en: [
      'Custom Millwork & Joinery Detailing',
      'Material & Texture Curations (Marble, Wood, Metals)',
      'Architectural Lighting Choreography',
      'Acoustic Planning & Smart Home Integration',
    ],
  },
]

const teamMembers = [
  {
    _id: 'team-xhevdet-alili',
    order: 1,
    name: 'Arch. Xhevdet Alili',
    role: 'Kryearkitekt & Themelues',
    role_mk: 'Главен Архитект & Основач',
    role_en: 'Principal Architect & Founder',
    bio: 'Mbi 18 vite përvojë në formësimin e arkitekturës rezidenciale premium dhe projektimit urban në Maqedoninë e Veriut dhe rajon. Diplomuar me merita të larta në Arkitekturë dhe Ndërtimtari.',
    bio_mk: 'Над 18 години искуство во обликување на премиум станбена архитектура и урбано проектирање во регионот.',
    bio_en: 'Over 18 years shaping premium residential architecture and urban projection across North Macedonia and the region. Graduated with honors in Architecture and Civil Engineering.',
    email: 'xhevdet@axengineering.mk',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85',
  },
  {
    _id: 'team-agim-rexhepi',
    order: 2,
    name: 'Ing. Agim Rexhepi',
    role: 'Kryeinxhinier i Strukturave & Udhëheqës i Nadzorit',
    role_mk: 'Главен Градежен Инженер & Раководител на Надзор',
    role_en: 'Chief Structural Engineer & Audit Lead',
    bio: 'Specialist në llogaritje statike të ndërtesave të larta, inxhinieri sizmike dhe auditim teknik të kantierit. Auditor teknik i licencuar për objekte të ndërlikuara ndërtimore.',
    bio_mk: 'Специјалист за висока сеизмичка статика и лиценциран технички ревизор за комплексни градежни проекти.',
    bio_en: 'Specialist in high-rise statics, seismic engineering, and technical site audit. Licensed technical auditor for complex construction projects.',
    email: 'agim@axengineering.mk',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85',
  },
  {
    _id: 'team-blerta-krasniqi',
    order: 3,
    name: 'Arch. Blerta Krasniqi',
    role: 'Udhëheqëse e Enterierit & Dizajnit Hapësinor',
    role_mk: 'Раководител на Ентериер & Дизајн',
    role_en: 'Head of Interior Architecture & Design',
    bio: 'E arsimuar në Milano dhe Shkup, Blerta drejton organizimin hapësinor të brendshëm, përzgjedhjen e materialeve luksoze dhe vizualizimet fotorealiste të enterierit.',
    bio_mk: 'Дипломирана во Милано и Скопје, води просторен дизајн на ентериери и луксузни материјали.',
    bio_en: 'Educated in Milan and Skopje, Blerta oversees interior spatial layouts, luxury material sourcing, and photorealistic visualization.',
    email: 'blerta@axengineering.mk',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85',
  },
  {
    _id: 'team-valon-murati',
    order: 4,
    name: 'Ing. Valon Murati',
    role: 'Menaxher i Lartë i Projekteve & Kantierit Ndërtimor',
    role_mk: 'Сениор Проектен Менаџер & Градилиште',
    role_en: 'Senior Project & Site Construction Manager',
    bio: 'Mbikëqyr punimet ditore të kontraktorëve, testimet strukturore të materialeve, sigurinë në punë dhe zbatimin e afateve në të gjitha kantieret e AX.',
    bio_mk: 'Координира теренски активности, контрола на квалитет, безбедност и рокови на сите AX градилишта.',
    bio_en: 'Oversees daily contractor operations, structural testing, worker safety, and timeline execution on all AX developments.',
    email: 'valon@axengineering.mk',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=85',
  },
]

async function run() {
  console.log('🚀 Pushing all 5 Services and 4 Team Members to Sanity dataset "production"...')

  // 1. Seed Services
  for (const s of services) {
    const doc = {
      _id: s._id,
      _type: 'service',
      number: s.number,
      order: s.order,
      title: s.title,
      title_mk: s.title_mk,
      title_en: s.title_en,
      shortDescription: s.shortDescription,
      shortDescription_mk: s.shortDescription_mk,
      shortDescription_en: s.shortDescription_en,
      description: s.description,
      description_mk: s.description_mk,
      description_en: s.description_en,
      features: s.features,
      features_mk: s.features_mk,
      features_en: s.features_en,
    }
    await client.createOrReplace(doc)
    console.log(`  ✓ Seeded Service: [${s.number}] ${s.title}`)
  }

  // 2. Seed Team Members
  for (const m of teamMembers) {
    console.log(`  Processing Team Member: ${m.name}...`)
    let imageAsset = null
    if (m.imageUrl) {
      imageAsset = await uploadImageFromUrl(m.imageUrl, `${m._id}.jpg`)
    }

    const doc = {
      _id: m._id,
      _type: 'teamMember',
      order: m.order,
      name: m.name,
      role: m.role,
      role_mk: m.role_mk,
      role_en: m.role_en,
      bio: m.bio,
      bio_mk: m.bio_mk,
      bio_en: m.bio_en,
      email: m.email,
    }

    if (imageAsset?._id) {
      doc.image = {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: imageAsset._id,
        },
      }
    }

    await client.createOrReplace(doc)
    console.log(`  ✓ Seeded Team Member: ${m.name}`)
  }

  console.log('\n🎉 ALL SERVICES AND TEAM MEMBERS ARE NOW FULLY SEEDED IN SANITY!')
}

run().catch((err) => {
  console.error('Fatal error during seed:', err)
  process.exit(1)
})
