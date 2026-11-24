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

async function run() {
  console.log('🚀 Connecting to Sanity Content Lake [projectId: 1s3zgmg6, dataset: production]...')

  // 1. UPDATE ALL 8 PROJECTS WITH TOGGLES
  const projects = await client.fetch('*[_type == "project"]{ _id, title }')
  console.log(`Found ${projects.length} project documents in Sanity. Updating toggles...`)

  for (const p of projects) {
    await client
      .patch(p._id)
      .set({
        showProgressSection: true,
        showSpecsSection: true,
        showGallerySection: true,
        showServicesScope: true,
        showAdjacentNav: true,
      })
      .commit()
    console.log(`  ✓ Updated toggles for project: ${p.title} (${p._id})`)
  }

  // 2. SEED / UPDATE THE 5 SPECIALIZED SERVICES
  const servicesData = [
    {
      _id: 'service-01-architectural-design',
      _type: 'service',
      number: '01',
      order: 1,
      slug: { _type: 'slug', current: 'arkitekture-dhe-projektim' },
      title: 'Projektim Arkitektonik & Masterplan',
      title_mk: 'Архитектонско Проектирање и Мастерплан',
      title_en: 'Architectural Design & Masterplanning',
      shortDescription: 'Konceptim arkitektonik bashkëkohor, rezidenca private, dhe objekte komerciale sipas kritereve më të larta estetike dhe funksionale.',
      shortDescription_mk: 'Високо-концептуални архитектонски решенија, вили и деловни комплекси проектирани според највисоки естетски и функционални стандарди.',
      shortDescription_en: 'High-concept architectural masterplans, residential villas, and commercial complexes engineered to the highest aesthetic and structural criteria.',
      description: 'Zyra jonë e projektimit krijon arkitekturë të dallueshme që ndërthur formën me funksionin. Nga skicat e para konceptuale deri te modelimi BIM dhe vizualizimet fotorealiste 3D, ne udhëheqim vizionin tuaj me precizion të pakompromis.',
      description_mk: 'Нашето архитектонско студио создава препознатлива архитектура. Од првични скици и BIM моделирање до 3Д визуелизации и целосна изведбена документација.',
      description_en: 'Our projection office crafts distinct, contemporary architecture that marries form and function. From preliminary hand-sketched spatial studies and BIM models to photorealistic 3D visualizations and complete execution dossiers.',
      features: [
        'Konceptim Hapësinor & Vizualizime Fotorealiste 3D',
        'Projektimi Kryesor për Leje Ndërtimi (Ideore & Zbatuese)',
        'Modelim BIM & Zgjidhje e Përplasjeve Inxhinierike',
        'Plane Detaje Urbanistike & Rregullim Trualli',
      ],
      features_mk: [
        'Идејни Проекти и 3Д Фотореалистични Рендери',
        'Основен Проект за Добивање Градежна Дозвола',
        'BIM Моделирање и Просторна Координација',
        'Урбанистичко Планирање и Парцелација',
      ],
      features_en: [
        'Conceptual Design & 3D Photorealistic Renderings',
        'Full Execution Projects (Main Design & Permitting)',
        'BIM Modeling & Clash Detection',
        'Urban Planning & Zoning Studies',
      ],
      deliverables: [
        'Dosja e Plotë për Leje Ndërtimi',
        'Planet Arkitektonike (Bazat, Prerjet, Fasada 1:50)',
        'Libri i Detajeve të Zbatimit',
        'Renderat 3D në Rezolucion të Lartë 4K',
      ],
      workflow: [
        {
          _key: 'w1',
          stepNumber: '01',
          title: 'Konsultimi Fillestar & Analiza e Parcelës',
          title_mk: 'Почетна Консултација и Локациски Услови',
          title_en: 'Initial Consultation & Site Audit',
          description: 'Përcaktimi i kërkesave të klientit, inspektimi gjeodezik i truallit dhe analizimi i kufijve urbanistikë.',
        },
        {
          _key: 'w2',
          stepNumber: '02',
          title: 'Projekt-Ideja & Modelimi 3D',
          title_mk: 'Идеен Концепт и 3Д Визуелизација',
          title_en: 'Conceptual Spatial Layout & 3D Model',
          description: 'Hartimi i varianteve planimetrike dhe renderimi fotorealist i fasadave me ndriçim natyral.',
        },
        {
          _key: 'w3',
          stepNumber: '03',
          title: 'Projekti Kryesor & Koordinimi me Komunën',
          title_mk: 'Основен Проект и Градежна Дозвола',
          title_en: 'Main Blueprints & Municipal Clearance',
          description: 'Përpilimi i të gjitha fazave inxhinierike dhe dorëzimi për marrjen e lejes së ndërtimit.',
        },
        {
          _key: 'w4',
          stepNumber: '04',
          title: 'Dosja Zbatuese & Dorëzimi në Kantier',
          title_mk: 'Изведбена Документација и Почеток на Градба',
          title_en: 'Execution Dossier & Site Handover',
          description: 'Dorëzimi i specifikimeve teknike te kontraktori dhe asistencë gjatë hapjes së themeleve.',
        },
      ],
      faqs: [
        {
          _key: 'f1',
          question: 'Sa kohë zgjat hartimi i një projekti ideor dhe kryesor?',
          answer: 'Për shtëpi dhe vila private, faza ideore kërkon 2-3 javë, ndërsa projekti kryesor me të gjitha fazat inxhinierike përfundon brenda 30-45 ditëve.',
        },
        {
          _key: 'f2',
          question: 'A ndihmoni ju në marrjen e lejes së ndërtimit në komunë?',
          answer: 'Po, zyra jonë përgatit dhe dorëzon të gjithë dokumentacionin e nevojshëm teknik pranë sektorit urbanistik të komunës përkatëse.',
        },
      ],
      showWorkflow: true,
      showFaqs: true,
      showDeliverables: true,
    },
    {
      _id: 'service-02-construction-supervision',
      _type: 'service',
      number: '02',
      order: 2,
      slug: { _type: 'slug', current: 'mbikeqyrje-e-licencuar-kantier' },
      title: 'Mbikëqyrje Ndërtimore & Audit Teknik (Nadzor)',
      title_mk: 'Градежен Надзор и Техничка Ревизија',
      title_en: 'Construction Supervision & Technical Audit',
      shortDescription: 'Mbikëqyrje e pavarur dhe e licencuar inxhinierike që garanton siguri strukturore, respektim të afateve dhe përputhshmëri ligjore.',
      shortDescription_mk: 'Овластен стручен надзор кој гарантира сеизмичка безбедност, квалитет на бетонот и законска усогласеност.',
      shortDescription_en: 'Independent, uncompromised engineering oversight ensuring structural safety, timeline adherence, and legal compliance.',
      description: 'Ne mbrojmë investimin e klientit përmes mbikëqyrjes rigoroze teknike. Inxhinierët tanë të licencuar inspektojnë punimet ditore, verifikojnë markën e betonit dhe vendosjen e armaturës sipas llogaritjeve statike.',
      description_mk: 'Го штитиме вашиот капитал преку секојдневна стручна контрола на градилиштето, проверка на арматура и водење градежен дневник.',
      description_en: 'We safeguard our clients investments through rigorous on-site technical supervision. Our certified engineers inspect daily works, verify concrete quality and rebar placement.',
      features: [
        'Mbikëqyrje e Licencuar Ndërtimi (Gradbena Nadzorna Sluzba)',
        'Testime dhe Verifikim i Cilësisë së Materialeve',
        'Auditimi Financiar dhe Çertifikimi i Situacioneve',
        'Pranimi Teknik dhe Marrja e Lejes së Përdorimit',
      ],
      features_mk: [
        'Лиценциран Надзорен Инженер за Градежни Објекти',
        'Контрола и Атести на Вградениот Бетон и Железо',
        'Одобрување на Градежни Книги и Ситуации',
        'Технички Прием и Употребна Дозвола',
      ],
      features_en: [
        'Licensed Site Supervision (Gradbena Nadzorna Sluzba)',
        'Static & Material Testing Verification',
        'Contractor Quality and Financial Audits',
        'Final Technical Inspection & Occupancy Approvals',
      ],
      deliverables: [
        'Libri Zyrtar i Ndërtimit (Gradben Dnevnik) i vulosur',
        'Raportet Periodike të Inspektimit',
        'Atestet e Betonit dhe Armaturës',
        'Aktvendimi Përfundimtar i Mbikëqyrjes',
      ],
      workflow: [
        {
          _key: 'w1',
          stepNumber: '01',
          title: 'Hapja e Librit të Ndërtimit & Nënshkrimi',
          description: 'Verifikimi i lejes së ndërtimit dhe hapja zyrtare e ditarit të punimeve në kantier.',
        },
        {
          _key: 'w2',
          stepNumber: '02',
          title: 'Kontrolli i Armaturës & Betoneve',
          description: 'Inspektimi i hekurit para çdo betonimi dhe marrja e mostrave për kube betoni.',
        },
        {
          _key: 'w3',
          stepNumber: '03',
          title: 'Mbikëqyrja e Mureve & Izolimeve',
          description: 'Kontrolli i termoizolimit, hidroizolimit të themeleve dhe instalimeve MEP.',
        },
        {
          _key: 'w4',
          stepNumber: '04',
          title: 'Pranimi Teknik & Çelësat në Dorë',
          description: 'Komisioni përfundimtar i pranimit teknik për pajisjen me leje përdorimi.',
        },
      ],
      faqs: [
        {
          _key: 'f1',
          question: 'A është e detyrueshme mbikëqyrja me ligj?',
          answer: 'Po, çdo objekt ndërtimor kërkon mbikëqyrje nga inxhinier i licencuar sipas ligjeve në fuqi në Maqedoninë e Veriut.',
        },
      ],
      showWorkflow: true,
      showFaqs: true,
      showDeliverables: true,
    },
    {
      _id: 'service-03-luxury-residential',
      _type: 'service',
      number: '03',
      order: 3,
      slug: { _type: 'slug', current: 'ndertim-rezidencial-luksoz' },
      title: 'Ndërtim Rezidencial & Vila Luksoze',
      title_mk: 'Изведба на Луксузни Вили и Резиденции',
      title_en: 'Luxury Residential Construction & Villas',
      shortDescription: 'Ekzekutim me çelësa në dorë i vilave private të nivelit premium dhe komplekseve tona të banimit në Gostivar.',
      shortDescription_mk: 'Изведба по систем клуч на рака на премиум семејни резиденции и модерни вили.',
      shortDescription_en: 'Turnkey execution of premium private residences and our own signature AX developments in Gostivar.',
      description: 'Nga gërmimi me saktësi milimetrike deri te veshjet me mermer italian dhe dritaret Schuco, A-X Engineering sjell standardet më të larta ndërtimore për rezidenca të destinuara të zgjasin me breza.',
      description_mk: 'Од земјени работи до финални занаетчиски завршници, комбинираме модерна механизација и врвни градежни материјали.',
      description_en: 'From precision excavation to the finest Italian stone finishes, AX Engineering delivers high-end residential homes built to endure for generations.',
      features: [
        'Ndërtim me Çelësa në Dorë i Vilave Ekskluzive',
        'Zhvillime të Pronave Signature A-X Residences',
        'Struktura Monolitike me Beton të Armuar C30/37',
        'Fasada të Ventiluara & Xhama Termikë Schuco',
      ],
      features_mk: [
        'Изведба по Систем Клуч на Рака',
        'Монолитни Армирано-Бетонски Конструкции',
        'Термичка Ефикасност и Вентилирани Фасади',
        'Паметни Системи за Домување (Smart Home)',
      ],
      features_en: [
        'Turnkey Villa & Luxury Residence Construction',
        'Upcoming AX Signature Residences Developments',
        'Reinforced Concrete Monolithic Structures',
        'Premium Thermal Envelopes & Schuco Glazing',
      ],
      deliverables: [
        'Objekt i Përfunduar me Garanci Strukturore 10-Vjeçare',
        'Çertifikata e Efiçiencës Energjetike (Klasa A+)',
        'Skemat e të Gjitha Instalimeve të Fshehura (As-Built)',
      ],
      workflow: [
        {
          _key: 'w1',
          stepNumber: '01',
          title: 'Përgatitja e Kantierit & Gërmimet',
          description: 'Hapja e gropës së themeleve dhe vendosja e bazës gjeoteknike.',
        },
        {
          _key: 'w2',
          stepNumber: '02',
          title: 'Konstruksioni Karabinë (Skeleti)',
          description: 'Betonimi i pllakave monolitike, shtyllave dhe trarëve sizmikë.',
        },
        {
          _key: 'w3',
          stepNumber: '03',
          title: 'Zarfi Termik & Fasada',
          description: 'Muret me bllok termik, dritaret triple-glaze dhe fasada e ventiluar.',
        },
        {
          _key: 'w4',
          stepNumber: '04',
          title: 'Punimet Finale & Enterieri',
          description: 'Shtrimi i dyshemeve, instalimi i pajisjeve smart dhe dorëzimi i çelësave.',
        },
      ],
      faqs: [
        {
          _key: 'f1',
          question: 'A ofroni garanci për punimet e ndërtimit?',
          answer: 'Po, të gjitha objektet tona mbulohen me garanci të plotë strukturore dhe mirëmbajtje teknike.',
        },
      ],
      showWorkflow: true,
      showFaqs: true,
      showDeliverables: true,
    },
    {
      _id: 'service-04-structural-engineering',
      _type: 'service',
      number: '04',
      order: 4,
      slug: { _type: 'slug', current: 'inxhinieri-strukturore-statike' },
      title: 'Inxhinieri Strukturore & Llogaritje Statike',
      title_mk: 'Градежно Инженерство и Статика',
      title_en: 'Structural & Civil Engineering Calculations',
      shortDescription: 'Llogaritje sizmike, stabilizim i themeleve në terrene të vështira dhe dizajn statik me efiçiencë të lartë.',
      shortDescription_mk: 'Сеизмички пресметки, стабилност на темели и пресметка на армирано-бетонски конструкции.',
      shortDescription_en: 'Seismic calculations, foundation stabilization on complex soils, and high-efficiency structural static design.',
      description: 'Baza e çdo ndërtese jetëgjatë është inxhinieria rigoroze. Ne jemi të specializuar në statikë komplekse, struktura metalike dhe beton të para-nderur sipas kodeve sizmike ballkanike.',
      description_mk: 'Темелот на секој траен објект е прецизното инженерство. Специјализирани сме за сложени статички пресметки според Еврокод.',
      description_en: 'The foundation of every enduring building is rigorous engineering. We specialize in complex static calculations, foundation stabilization, and seismic risk mitigation.',
      features: [
        'Llogaritje Statike & Dinamike (Eurocodes 2 & 8)',
        'Inxhinieri Gjeoteknike & Themelim me Pila',
        'Dizajn i Strukturave Metalike & Druri Inxhinierik',
        'Auditimi dhe Përforcimi i Ndërtesave Ekzistuese',
      ],
      features_mk: [
        'Статички и Динамички Пресметки (Еврокод 2 и 8)',
        'Геотехничко Инженерство и Санација на Темели',
        'Проектирање на Челични и Бетонски Конструкции',
        'Ревизија и Зајакнување на Постојни Објекти',
      ],
      features_en: [
        'Static & Dynamic Structural Calculations (Eurocodes)',
        'Foundation & Geotechnical Engineering',
        'Post-Tensioned Concrete & Steel Frame Design',
        'Structural Reinforcement & Restoration Audits',
      ],
      deliverables: [
        'Libri i Llogaritjeve Statike me Softuerë të Çertifikuar (Tower/ETABS)',
        'Planet e Detajuara të Armaturës me Specifikim Hekuri',
        'Plani i Themelimit dhe Drenazhit',
      ],
      workflow: [
        {
          _key: 'w1',
          stepNumber: '01',
          title: 'Modelimi Matematik i Strukturës',
          description: 'Krijimi i modelit 3D të ngarkesave gravitacionale dhe erës.',
        },
        {
          _key: 'w2',
          stepNumber: '02',
          title: 'Simulimi Sizmik Eurocode 8',
          description: 'Testimi dinamik i lëkundjeve sizmike për zonën e Gostivarit dhe rajonit.',
        },
        {
          _key: 'w3',
          stepNumber: '03',
          title: 'Dimensionimi i Elementeve Konstruktive',
          description: 'Përcaktimi i saktë i trashësisë së pllakave, trarëve dhe sasisë së hekurit.',
        },
        {
          _key: 'w4',
          stepNumber: '04',
          title: 'Gjenerimi i Planeve të Armimit',
          description: 'Skicat e plota me skema prerjeje dhe specifikim të hekurit për kantier.',
        },
      ],
      faqs: [
        {
          _key: 'f1',
          question: 'A përdorni standardet evropiane Eurocode?',
          answer: 'Po, të gjitha llogaritjet tona statike kryhen në përputhje me Eurocode 2 (beton) dhe Eurocode 8 (sizmikë).',
        },
      ],
      showWorkflow: true,
      showFaqs: true,
      showDeliverables: true,
    },
    {
      _id: 'service-05-interior-styling',
      _type: 'service',
      number: '05',
      order: 5,
      slug: { _type: 'slug', current: 'arkitekture-enterieri-3d' },
      title: 'Dizajn Enterieri & Vizualizim 3D Fotorealist',
      title_mk: 'Внатрешен Дизајн и 3Д Визуелизација',
      title_en: 'Interior Architecture & 3D Visualization',
      shortDescription: 'Mjedise harmonike të brendshme ku materialet natyrore, ndriçimi i kuruar dhe zdrukthëtaria e personalizuar krijojnë hapësira të përjetshme.',
      shortDescription_mk: 'Хармонични ентериери каде природните материјали, осветлувањето и мебелот по мерка создаваат безвременски амбиент.',
      shortDescription_en: 'Harmonious interior environments where natural materials, tailored lighting, and bespoke joinery create timeless living spaces.',
      description: 'Ne e trajtojmë enterierin si vazhdim organik të arkitekturës. Studioja jonë e enterierit dizajnon orendi të personalizuara, zgjedh pllaka mermeri dhe paleta druri fisnik, dhe koreografon skenarë ndriçimi arkitekturor.',
      description_mk: 'Ентериерот го третираме како органско продолжение на објектот. Проектираме мебел по мерка, избор на материјали и амбиентално осветлување.',
      description_en: 'We approach interiors as an organic continuation of the architectural shell. Our interior studio crafts custom cabinetry, specifies natural stone and timber palettes.',
      features: [
        'Dizajn i Personalizuar i Mobiljeve & Zdrukthëtari',
        'Kurim Materialesh (Mermer, Drurë Natyralë, Metale)',
        'Koreografi Ndriçimi Arkitekturor & Ndriçim i Fshehur',
        'Plane Akustike & Integrim i Sistemeve Smart Home',
      ],
      features_mk: [
        'Детални Цртежи за Мебел по Мерка',
        'Избор на Материјали (Мермер, Дрво, Метал)',
        'Проектирање на Архитектонско Осветлување',
        'Акустично Планирање и Smart Home Интеграција',
      ],
      features_en: [
        'Custom Millwork & Joinery Detailing',
        'Material & Texture Curations (Marble, Wood, Metals)',
        'Architectural Lighting Choreography',
        'Acoustic Planning & Smart Home Integration',
      ],
      deliverables: [
        'Katalogu i Plotë i Enterierit me Pamje 3D',
        'Skicat Teknike për Prodhuesit e Mobiljeve (1:20)',
        'Specifikimi i Ndriçuesve, Ngjyrave dhe Pajisjeve Sanitare',
      ],
      workflow: [
        {
          _key: 'w1',
          stepNumber: '01',
          title: 'Moodboard & Përcaktimi i Stilit',
          description: 'Përcaktimi i frymëzimit dizajnersk, paletave të ngjyrave dhe materialeve.',
        },
        {
          _key: 'w2',
          stepNumber: '02',
          title: 'Plani i Shpërndarjes Funksionale',
          description: 'Pozicionimi ergonomik i orendive, rrugëve të lëvizjes dhe ndarjeve me xham.',
        },
        {
          _key: 'w3',
          stepNumber: '03',
          title: 'Renderat 3D Fotorealistë',
          description: 'Vizualizimi i çdo dhome me ndriçim real, tekstura dhe reflektime druri e mermeri.',
        },
        {
          _key: 'w4',
          stepNumber: '04',
          title: 'Detajet Teknike për Zbatim',
          description: 'Vizatim i plotë i mobiljeve me prerje, mekanizma dhe drejtim gjatë montimit.',
        },
      ],
      faqs: [
        {
          _key: 'f1',
          question: 'A përfshihet edhe përzgjedhja e mobiljeve dhe ndriçimit?',
          answer: 'Po, projekti i enterierit përmban listën e plotë të prodhuesve, kodeve të ngjyrave dhe specifikimet e ndriçuesve.',
        },
      ],
      showWorkflow: true,
      showFaqs: true,
      showDeliverables: true,
    },
  ]

  console.log(`Seeding / updating ${servicesData.length} comprehensive services in Sanity...`)
  for (const srv of servicesData) {
    await client.createOrReplace(srv)
    console.log(`  ✓ Synced service: ${srv.title} [${srv._id}]`)
  }

  console.log('🎉 All static data and rich services successfully pushed to Sanity Content Lake!')
}

run().catch((err) => {
  console.error('Error seeding data to Sanity:', err)
  process.exit(1)
})
