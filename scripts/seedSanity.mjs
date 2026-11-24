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

const categories = [
  {
    _id: 'cat-luxury-residences',
    _type: 'category',
    title: 'Vila & Rezidenca',
    title_mk: 'Луксузни Вили',
    title_en: 'Luxury Residences',
    slug: { _type: 'slug', current: 'luxury-residences' },
    description: 'Vila private luksoze dhe rezidenca bashkëkohore.',
    description_mk: 'Луксузни приватни вили и современи резиденции.',
    description_en: 'High-end private villas and contemporary residences.',
  },
  {
    _id: 'cat-commercial',
    _type: 'category',
    title: 'Objekte Afariste',
    title_mk: 'Деловни Објекти',
    title_en: 'Commercial & Mixed-Use',
    slug: { _type: 'slug', current: 'commercial' },
    description: 'Qendra biznesi dhe komplekse tregtare multifunksionale.',
    description_mk: 'Деловни центри и мултифункционални објекти.',
    description_en: 'Corporate headquarters and commercial retail hubs.',
  },
  {
    _id: 'cat-architectural-design',
    _type: 'category',
    title: 'Projektim Arkitekturor',
    title_mk: 'Архитектонско Проектирање',
    title_en: 'Architectural Design',
    slug: { _type: 'slug', current: 'architectural-design' },
    description: 'Konceptualizim hapësinor dhe plane kryesore të ekzekutimit.',
    description_mk: 'Идејни и основни архитектонски проекти.',
    description_en: 'Spatial conceptualization and comprehensive architectural plans.',
  },
  {
    _id: 'cat-site-supervision',
    _type: 'category',
    title: 'Mbikëqyrje Ndërtimi (Nadzor)',
    title_mk: 'Градежен Надзор',
    title_en: 'Supervision & Audit',
    slug: { _type: 'slug', current: 'site-supervision' },
    description: 'Mbikëqyrje e pavarur inxhinierike dhe audit ligjor teknik.',
    description_mk: 'Стручен градежен надзор и контрола на квалитет.',
    description_en: 'Independent engineering site supervision and structural audit.',
  },
  {
    _id: 'cat-interior',
    _type: 'category',
    title: 'Enterier & Dizajn',
    title_mk: 'Ентериер & Дизајн',
    title_en: 'Interior Living',
    slug: { _type: 'slug', current: 'interior' },
    description: 'Koreografi hapësinore, materiale natyrore dhe ndriçim arkitekturor.',
    description_mk: 'Дизајн на внатрешен простор и материјали.',
    description_en: 'Bespoke spatial styling, tactile materials, and ambient lighting.',
  },
]

const projects = [
  {
    slug: 'ax-horizon-residence',
    title: 'Rezidenca AX Horizon',
    title_mk: 'Резиденција AX Horizon',
    title_en: 'AX Horizon Residence',
    categoryRef: 'cat-luxury-residences',
    categoryName: 'Luxury Residences',
    client: 'Investitor Privat',
    location: 'Kodrat e Gostivarit, Maqedoni e Veriut',
    year: '2024',
    area: '1,450 m²',
    status: 'Completed',
    featured: true,
    order: 1,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    shortDescription: 'Vilë monumentale private e integruar në relievin e Gostivarit, me beton natyral dhe xhama panoramikë të konsoluar mbi 8 metra.',
    shortDescription_mk: 'Монументална приватна вила интегрирана во релјефот на Гостивар, со видлив бетон и конзолни стаклени површини од 8 метри.',
    shortDescription_en: 'A monumental private villa sculpted into the Gostivar topography, fusing exposed raw concrete with expansive cantilevered bronze glass facades.',
    fullDescription: 'E projektuar si një vendpushim ekskluziv privat, Rezidenca AX Horizon krijon një dialog harmonik mes arkitekturës monolitike dhe panoramës së luginës së Pollogut. Struktura mbështetet në konsola betoni të paratensionuara me dalje mbi 8 metra pa shtylla të ndërmjetme. Zyra jonë udhëhoqi projektimin arkitektonik, llogaritjen statike dhe mbikëqyrjen e plotë të kantierit.',
    fullDescription_mk: 'Проектирана како ексклузивно приватно засолниште, AX Horizon Residence воспоставува беспрекорен дијалог меѓу современата монолитна архитектура и панорамата на Полог. Конзолите од 8 метри овозможуваат непречен поглед кон долината. Студиото го водеше комплетниот циклус од идеја до клуч на рака.',
    fullDescription_en: 'Commissioned as a signature private retreat, AX Horizon Residence establishes a seamless dialogue between contemporary monolithic architecture and the scenic Macedonian topography. The structural layout uses post-tensioned concrete cantilevers extending over 8 meters without columns. Our team directed the complete lifecycle from excavation to interior handover.',
    servicesDone: [
      'Projektim Gjithëpërfshirës Arkitektonik',
      'Inxhinieri Strukturore & Statikë Sizmike',
      'Mbikëqyrje e Plotë e Ndërtimit (Nadzor)',
      'Koordinim i Enterierit & Ndriçimit',
      'Audit Teknik & Legalizim',
    ],
    servicesDone_mk: [
      'Комплетно Архитектонско Проектирање',
      'Градежна Статика и Сеизмичка Анализа',
      'Стручен Градежен Надзор',
      'Координација на Внатрешен Дизајн',
      'Технички Прием',
    ],
    servicesDone_en: [
      'Comprehensive Architectural Design',
      'Structural Engineering & Statics',
      'Turnkey Construction Supervision',
      'Interior Spatial Coordination',
      'Technical Audit & Permitting',
    ],
  },
  {
    slug: 'vanguard-corporate-centre',
    title: 'Qendra Afariste Vanguard',
    title_mk: 'Деловен Центар Vanguard',
    title_en: 'Vanguard Corporate Centre',
    categoryRef: 'cat-commercial',
    categoryName: 'Commercial & Mixed-Use',
    client: 'Balkan Logistics Group',
    location: 'Korridori Tetovë - Gostivar',
    year: '2023 - 2024',
    area: '6,200 m²',
    status: 'Completed',
    featured: true,
    order: 2,
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
    shortDescription: 'Objekt administrativ pesë-katësh me fasadë xhami me dy shtresa për izolim termik dhe hapësira logjistike nëntokësore.',
    shortDescription_mk: 'Петкатен деловен комплекс со двојна стаклена соларна фасада и подземна логистичка платформа.',
    shortDescription_en: 'A five-story administrative and business hub featuring double-skin solar curtain walls and subterranean logistics bays.',
    fullDescription: 'Qendra Afariste Vanguard ridefinon arkitekturën tregtare përgjatë korridorit kryesor Gostivar - Tetovë. E dizajnuar për seli korporative, salla konferencash dhe zyra ekzekutive me menaxhim inteligjent të klimës. A-X Engineering kreu auditin statik dhe mbikëqyrjen e pavarur.',
    fullDescription_mk: 'Vanguard Corporate Centre ја редефинира деловната архитектура по должината на автопатот Тетово - Гостивар. Објектот вклучува интелигентно управување со енергија и подземни паркинг нивоа. A-X Engineering беше главен проектант и надзорен орган.',
    fullDescription_en: 'The Vanguard Corporate Centre redefines commercial architecture along the Gostivar transit corridor. Designed to accommodate multi-tenant corporate headquarters and executive boardrooms with smart climate control. AX Engineering served as the head project office.',
    servicesDone: [
      'Masterplan Afarist & Urbanistik',
      'Inxhinieri Fasade & Efiçiencë Energjetike',
      'Audit i Sigurisë në Kantier',
      'Integrim i Instalimeve MEP',
    ],
    servicesDone_mk: [
      'Урбанистички и Деловен Мастерплан',
      'Фасадно Инженерство',
      'Контрола на Квалитет и Безбедност',
      'Машински и Електро Инсталации',
    ],
    servicesDone_en: [
      'Commercial Master Planning',
      'Façade Engineering & Solar Studies',
      'Construction Site Safety Audit',
      'HVAC & MEP Integration',
    ],
  },
  {
    slug: 'villa-olea-luxury-estate',
    title: 'Vila Olea Luxury Estate',
    title_mk: 'Вила Olea Луксузен Имот',
    title_en: 'Villa Olea Luxury Estate',
    categoryRef: 'cat-luxury-residences',
    categoryName: 'Luxury Residences',
    client: 'Family Office Zvicerano-Makedonas',
    location: 'Rrëzë Liqenit të Mavrovës',
    year: '2024 - 2025',
    area: '920 m²',
    status: 'Under Construction',
    featured: true,
    order: 3,
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85',
    shortDescription: 'Vilë alpine luksoze që gërsheton drurin masiv, gurin natyror të lumit dhe xhamat termikë me tre shtresa.',
    shortDescription_mk: 'Модерна алпска луксузна вила која комбинира природно дрво, локален речен камен и трислојни стаклени ѕидови.',
    shortDescription_en: 'Modern Alpine luxury villa blending traditional dark timber, local river stone, and triple-glazed curtain walls.',
    fullDescription: 'E vendosur në zonën malore afër Mavrovës, Vila Olea është konceptuar si një oaz qetësie dhe elegance. Struktura përballon ngarkesa të larta të borës duke ruajtur hapësira të gjera pa mure të ndërmjetme në sallonin kryesor dhe spa-në e brendshme.',
    fullDescription_mk: 'Сместена во планинскиот предел близу Маврово, Вила Olea е спој на рустикална традиција и врвен модерен луксуз. Дизајнот ги почитува строгите стандарди за оптоварување од снег.',
    fullDescription_en: 'Nestled in the sub-alpine terrain near Mavrovo, Villa Olea is conceived as an oasis of quiet luxury and architectural discipline. The layout respects strict snow load regulations while maintaining wide open spans.',
    servicesDone: [
      'Dizajn Arkitekturor & Enterier',
      'Inxhinieri e Themeltimit në Terrene Malore',
      'Gjeotermi & Izolim Termik',
      'Mbikëqyrje e Vazhdueshme e Ndërtimit',
    ],
    servicesDone_mk: [
      'Архитектура и Внатрешен Дизајн',
      'Темелење на Планински Терен',
      'Хидро и Термо Изолација',
      'Тековен Градежен Надзор',
    ],
    servicesDone_en: [
      'Architectural & Interior Design',
      'Alpine Foundation Engineering',
      'Hydro-Insulation & Geothermal Planning',
      'Ongoing Construction Supervision',
    ],
  },
  {
    slug: 'ax-signature-residences',
    title: 'Rezidencat A-X Gostivar',
    title_mk: 'А-Х Резиденција Гостивар',
    title_en: 'AX Signature Residences - Gostivar Central',
    categoryRef: 'cat-luxury-residences',
    categoryName: 'Luxury Residences',
    client: 'A-X Engineering Developments',
    location: 'Qendër, Gostivar',
    year: '2025 - 2026',
    area: '8,400 m²',
    status: 'In Concept',
    featured: true,
    order: 4,
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
    shortDescription: 'Zhvillimi ynë më i ri rezidencial: 32 apartamente luksoze, penthause panoramikë dhe qendër private mirëqenieje.',
    shortDescription_mk: 'Нашиот најнов станбен комплекс: 32 луксузни апартмани, пентхауси на врвот и приватен спа центар.',
    shortDescription_en: 'Our upcoming flagship residential development: 32 boutique luxury apartments, rooftop penthouses, and private underground wellness center.',
    fullDescription: 'Rezidencat A-X përfaqësojnë standardin më të lartë të banimit kolektiv në Gostivar. Çdo njësi posedon lartësi tavani prej 3 metrash, xhama Schuco nga dyshemeja në tavan dhe ashensorë privatë për penthauset.',
    fullDescription_mk: 'А-Х Резиденција поставува нов репер за станбено домување во Гостивар. Просториите имаат висина од 3 метри, премиум стаклени профили и енергетски ефикасен систем за греење и ладење.',
    fullDescription_en: 'Representing AX Engineering’s transition into proprietary residential development, AX Signature Residences sets a new benchmark for luxury living in Gostivar with 3-meter clear ceilings and floor-to-ceiling glazing.',
    servicesDone: [
      'Zhvillim Vetanor i Pronave të Patundshme',
      'Arkitekturë Kryesore & Planifikim Urban',
      'Ndërtim me Çelësa në Dorë',
      'Enterier Ekskluziv',
    ],
    servicesDone_mk: [
      'Сопствена Инвестиција и Развој',
      'Архитектонско Проектирање',
      'Градба Клуч на Рака',
      'Луксузен Ентериер',
    ],
    servicesDone_en: [
      'Proprietary Real Estate Development',
      'Master Architecture & Urban Planning',
      'Turnkey General Contracting',
      'High-End Interior Fitout',
    ],
  },
  {
    slug: 'kalyon-technical-complex',
    title: 'Kompleksi Teknik Kalyon & Qendra Logjistike',
    title_mk: 'Технички Комплекс Калјон',
    title_en: 'Kalyon Technical Complex & Logistic Center',
    categoryRef: 'cat-site-supervision',
    categoryName: 'Supervision & Audit',
    client: 'Industrial Development Corp',
    location: 'Zona Industriale e Pollogut',
    year: '2023',
    area: '14,000 m²',
    status: 'Completed',
    featured: false,
    order: 5,
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=85',
    shortDescription: 'Audit i thelluar inxhinierik, çertifikim i integritetit statik dhe mbikëqyrje rigoroze e ndërtimit industrial.',
    shortDescription_mk: 'Комплетен градежен надзор, сертификација на статичка носивост и контрола на индустриски објект.',
    shortDescription_en: 'Comprehensive site audit, static integrity certification, and rigorous construction supervision for heavy industrial operations.',
    fullDescription: 'Zhvillim industrial në shkallë të gjerë me standardet më të larta të sigurisë dhe verifikimit të ngarkesave. Inxhinierët tanë monitoruan çdo derdhje betoni dhe armaturë çeliku sipas Eurocode.',
    fullDescription_mk: 'Голем индустриски проект кој бара највисоки стандарди за безбедност и сеизмичка отпорност. A-X Engineering беше назначен за главен надзорен орган.',
    fullDescription_en: 'An extensive industrial development demanding the highest standards of safety, load-bearing verification, and seismic damping. AX Engineering served as the primary site supervisor.',
    servicesDone: [
      'Mbikëqyrje e Pavarur e Ndërtimit (Nadzor)',
      'Çertifikim i Ngarkesave Strukturore',
      'Audit Sizmik & Eurocode',
      'Verifikim Laboratorik i Materialeve',
    ],
    servicesDone_mk: [
      'Стручен Градежен Надзор (Надзор)',
      'Сертификација на Носивост',
      'Сеизмички Анализи',
      'Лабораториска Контрола на Бетон',
    ],
    servicesDone_en: [
      'Independent Construction Supervision',
      'Structural Load Certification',
      'Seismic Compliance Audit',
      'Material Quality Verification',
    ],
  },
  {
    slug: 'boutique-residence-m',
    title: 'Rezidenca Boutique M & Wellness Privat',
    title_mk: 'Бутик Резиденција М',
    title_en: 'Boutique Residence M & Private Wellness',
    categoryRef: 'cat-interior',
    categoryName: 'Interior Living',
    client: 'Rezidencë Private',
    location: 'Çarshia e Vjetër, Gostivar',
    year: '2024',
    area: '480 m²',
    status: 'Completed',
    featured: false,
    order: 6,
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
    shortDescription: 'Rikonceptim i brendshëm ekskluziv me gur travertin natyror, drita lineare të fshehura dhe mobilierí artizanale lisi.',
    shortDescription_mk: 'Елегантен ентериерен проект кој комбинира природен травертин, дискретно осветлување и мебел од масивно дрво.',
    shortDescription_en: 'A bespoke interior redesign combining travertine stone walls, hidden ambient illumination, and bespoke millwork.',
    fullDescription: 'Rezidenca M përfaqëson minimalizmin e ngrohtë dhe qetësinë vizuale. Hapësirat janë të lidhura në mënyrë fluide rreth atriumit të ndriçuar natyralisht.',
    fullDescription_mk: 'Резиденција М претставува вежба во топол минимализам и сензорна хармонија. Секој детал од мебелот е дизајниран уникатно за просторот.',
    fullDescription_en: 'Residence M is an exercise in warm minimalism and sensory harmony. Our interior architecture studio reorganized the floorplan into an open, fluid sequence of spaces.',
    servicesDone: [
      'Arkitekturë e Brendshme & Detaje Ekzekutive',
      'Dizajn i Mobilierisë së Personalizuar',
      'Projektim Ndriçimi Arkitekturor',
      'Mbikëqyrje e Punimeve Artizanale',
    ],
    servicesDone_mk: [
      'Внатрешна Архитектура',
      'Дизајн на Мебел по Мерка',
      'Архитектонско Осветлување',
      'Координација и Опремување',
    ],
    servicesDone_en: [
      'Interior Architecture & Detail Design',
      'Custom Millwork Design & Detailing',
      'Lighting Choreography',
      'Site Coordination & Furnishing',
    ],
  },
  {
    slug: 'panorama-tower-urban-complex',
    title: 'Kulla Panorama & Kompleksi Afarist',
    title_mk: 'Панорама Кула и Комплекс',
    title_en: 'Panorama Tower & Urban Retail Complex',
    categoryRef: 'cat-commercial',
    categoryName: 'Commercial & Mixed-Use',
    client: 'Gostivar Urban Holdings',
    location: 'Bregu i Vardarit, Gostivar',
    year: '2025',
    area: '11,200 m²',
    status: 'In Concept',
    featured: true,
    order: 7,
    imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1600&q=85',
    shortDescription: 'Kullë e përzier banimi dhe afarizmi buzë lumit Vardar me tarraca të gjelbëruara dhe lamelë mbrojtëse diellore.',
    shortDescription_mk: 'Мултифункционална кула за домување и бизнис покрај реката Вардар со тераси и зелени градини.',
    shortDescription_en: 'Mixed-use residential and commercial tower designed along the Vardar riverbank with tiered green gardens.',
    fullDescription: 'Një projekt ambicioz i rigjenerimit urban me 9 kate apartamente luksoze mbi një podium 2-katësh me kafene, butiqe dhe shëtitore këmbësore buzë Vardarit.',
    fullDescription_mk: 'Амбициозен урбан проект со 9 ката модерни апартмани и 2 ката деловен простор покрај кејот на Вардар со поглед кон Бистра.',
    fullDescription_en: 'An ambitious urban regeneration project proposing 9 levels of premium riverside apartments over a 2-level podium of artisan cafes and pedestrian promenades.',
    servicesDone: [
      'Projektim Konceptual & Urbanistik',
      'Analiza të Erës & Efiçiencës Diellore',
      'Koordinim BIM Niveli 2',
      'Verifikim i Rregullores së Zonimit',
    ],
    servicesDone_mk: [
      'Урбанистичко и Архитектонско Решение',
      'Анализа на Ветер и Енергетска Ефикасност',
      'BIM Координација Ниво 2',
      'Зонирање и Урбанистички Услови',
    ],
    servicesDone_en: [
      'Urban Design & Conceptual Projection',
      'Environmental & Wind Tunnel Modeling',
      'BIM Level 2 Coordination',
      'Municipal Zoning Audit',
    ],
  },
  {
    slug: 'the-stone-ridge-villa',
    title: 'Vila Stone Ridge',
    title_mk: 'Вила Stone Ridge',
    title_en: 'The Stone Ridge Villa',
    categoryRef: 'cat-architectural-design',
    categoryName: 'Architectural Design',
    client: 'Klient Privat',
    location: 'Rrëzë Malit Sharr',
    year: '2024',
    area: '760 m²',
    status: 'Completed',
    featured: false,
    order: 8,
    imageUrl: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1600&q=85',
    shortDescription: 'Gjeometri moderne e ndërthurur me muraturë tradicionale prej guri malor dhe pishinë infinite të konsoluar.',
    shortDescription_mk: 'Модерна геометрија споена со традиционален планински камен и конзолен инфинити базен.',
    shortDescription_en: 'Modern geometry meets indigenous mountain masonry, featuring cantilevered glass infinity wings.',
    fullDescription: 'Vila Stone Ridge ngrihet mbi një shkëmb graniti në Sharr. Duke shfrytëzuar gurin natyror lokal në bazë dhe konstruksionin e lehtë prej çeliku e xhami sipër, rezidenca duket sikur noton mbi mjegullën e mëngjesit.',
    fullDescription_mk: 'Вила Stone Ridge се наоѓа на планинските падини на Шара. Комбинацијата на природен камен и челична конструкција создава впечаток дека лебди над долината.',
    fullDescription_en: 'Stone Ridge Villa anchors itself onto a steep granite ridge. By utilizing locally quarried natural stone for the lower plinth and ultra-slender steel framing for the upper pavilion, the residence appears to float above the valley fog.',
    servicesDone: [
      'Projekt i Plotë Arkitektonik',
      'Inxhinieri e Themeltimit në Shpat të Pjerrët',
      'Mbikëqyrje e Plotë e Kantierit',
      'Projektim i Peizazhit të Jashtëm',
    ],
    servicesDone_mk: [
      'Комплетен Архитектонски Проект',
      'Темелење на Стрмен Терен',
      'Целосен Градежен Надзор',
      'Хортикултурно Уредување',
    ],
    servicesDone_en: [
      'Complete Architectural Project',
      'Steep-Slope Foundation Engineering',
      'Full Site Supervision',
      'Custom Exterior Landscape Design',
    ],
  },
]

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

async function run() {
  console.log('🚀 Starting Sanity Seed for AX Engineering (Project: 1s3zgmg6)...')

  // 1. Seed Categories
  console.log('\n📁 Creating / Updating Categories...')
  for (const cat of categories) {
    await client.createOrReplace(cat)
    console.log(`  ✓ Category: ${cat.title} (${cat._id})`)
  }

  // 2. Seed Projects
  console.log('\n🏗️ Creating / Updating 8 Curated Projects...')
  for (const p of projects) {
    console.log(`\n  Processing: ${p.title} (${p.slug})...`)

    // Upload hero image to Sanity asset library
    let imageAsset = null
    if (p.imageUrl) {
      console.log(`    Uploading image to Sanity media asset...`)
      imageAsset = await uploadImageFromUrl(p.imageUrl, `${p.slug}-hero.jpg`)
    }

    const doc = {
      _id: `project-${p.slug}`,
      _type: 'project',
      title: p.title,
      title_mk: p.title_mk,
      title_en: p.title_en,
      slug: { _type: 'slug', current: p.slug },
      category: {
        _type: 'reference',
        _ref: p.categoryRef,
      },
      categoryName: p.categoryName,
      client: p.client,
      location: p.location,
      year: p.year,
      area: p.area,
      status: p.status,
      featured: p.featured,
      order: p.order,
      shortDescription: p.shortDescription,
      shortDescription_mk: p.shortDescription_mk,
      shortDescription_en: p.shortDescription_en,
      fullDescription: p.fullDescription,
      fullDescription_mk: p.fullDescription_mk,
      fullDescription_en: p.fullDescription_en,
      servicesDone: p.servicesDone,
      servicesDone_mk: p.servicesDone_mk,
      servicesDone_en: p.servicesDone_en,
    }

    if (imageAsset?._id) {
      doc.mainImage = {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: imageAsset._id,
        },
        alt: `${p.title} - A-X Engineering`,
      }
    }

    await client.createOrReplace(doc)
    console.log(`  ✓ Seeded project: ${p.title} -> Sanity ID: ${doc._id}`)
  }

  console.log('\n🎉 ALL 8 PROJECTS & 5 CATEGORIES SUCCESSFULLY PUSHED TO SANITY!')
}

run().catch((err) => {
  console.error('Fatal error during seed:', err)
  process.exit(1)
})
