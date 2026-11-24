export interface ConstructionStage {
  name: string
  name_mk?: string
  name_en?: string
  status: 'completed' | 'current' | 'upcoming'
  date?: string
}

export interface ProjectGalleryItem {
  url: string
  caption?: string
  category?: 'all' | 'exterior' | 'interior' | 'construction' | 'render'
  aspect?: 'tall' | 'wide' | 'square'
  alt?: string
}

export interface ProjectItem {
  id: string
  title: string
  title_mk?: string
  title_en?: string
  slug: string
  category: string
  categorySlug: string
  client: string
  location: string
  year: string
  area: string
  floors?: string
  apartments?: string
  parkingSpaces?: string
  energyClass?: string
  status: 'Completed' | 'Under Construction' | 'In Concept'
  isUnderConstruction?: boolean
  progressPercent?: number
  currentPhase?: string
  currentPhase_mk?: string
  currentPhase_en?: string
  expectedCompletion?: string
  stages?: ConstructionStage[]
  featured: boolean
  heroImage: string
  aspectRatio?: 'tall' | 'wide' | 'square'
  shortDescription: string
  shortDescription_mk?: string
  shortDescription_en?: string
  fullDescription: string
  fullDescription_mk?: string
  fullDescription_en?: string
  servicesDone: string[]
  servicesDone_mk?: string[]
  servicesDone_en?: string[]
  gallery: ProjectGalleryItem[]
  showProgressSection?: boolean
  showSpecsSection?: boolean
  showGallerySection?: boolean
  showServicesScope?: boolean
  showAdjacentNav?: boolean
  metrics?: {
    label: string
    value: string
  }[]
}

export interface ServiceWorkflowStep {
  stepNumber: string
  title: string
  title_mk?: string
  title_en?: string
  description: string
  description_mk?: string
  description_en?: string
}

export interface ServiceFAQItem {
  question: string
  question_mk?: string
  question_en?: string
  answer: string
  answer_mk?: string
  answer_en?: string
}

export interface ServiceItem {
  id?: string
  slug?: string
  number: string
  title: string
  title_mk?: string
  title_en?: string
  shortDescription: string
  shortDescription_mk?: string
  shortDescription_en?: string
  description: string
  description_mk?: string
  description_en?: string
  heroImage?: string
  features: string[]
  features_mk?: string[]
  features_en?: string[]
  deliverables?: string[]
  deliverables_mk?: string[]
  deliverables_en?: string[]
  workflow?: ServiceWorkflowStep[]
  faqs?: ServiceFAQItem[]
  showWorkflow?: boolean
  showFaqs?: boolean
  showDeliverables?: boolean
}

export interface TeamMemberItem {
  name: string
  role: string
  role_mk?: string
  role_en?: string
  bio: string
  bio_mk?: string
  bio_en?: string
  image: string
  email?: string
}

export const CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'luxury-residences', label: 'Luxury Residences' },
  { id: 'commercial', label: 'Commercial & Mixed-Use' },
  { id: 'architectural-design', label: 'Architectural Design' },
  { id: 'site-supervision', label: 'Supervision & Audit' },
  { id: 'interior', label: 'Interior Living' },
]

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: '1',
    title: 'AX Horizon Residence',
    slug: 'ax-horizon-residence',
    category: 'Luxury Residences',
    categorySlug: 'luxury-residences',
    client: 'Private Investor',
    location: 'Gostivar Hillside, North Macedonia',
    year: '2024',
    area: '1,450 m²',
    status: 'Completed',
    featured: true,
    aspectRatio: 'wide',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    shortDescription: 'A monumental private villa sculpted into the Gostivar topography, fusing exposed raw concrete with expansive cantilevered bronze glass facades.',
    fullDescription: 'Commissioned as a signature private retreat, AX Horizon Residence establishes a seamless dialogue between contemporary monolithic architecture and the scenic Macedonian topography. The structural layout uses post-tensioned concrete cantilevers extending over 8 meters without columns, granting uninterrupted panoramic vistas across the valley. Our team directed the complete lifecycle: architectural conceptualization, static structural calculations, MEP engineering, and full site supervision from excavation to interior handover.',
    servicesDone: [
      'Comprehensive Architectural Design',
      'Structural Engineering & Statics',
      'Turnkey Construction Supervision',
      'Interior Spatial Coordination',
      'Technical Audit & Permitting',
    ],
    metrics: [
      { label: 'Plot Surface', value: '3,800 m²' },
      { label: 'Living Space', value: '1,450 m²' },
      { label: 'Cantilever Reach', value: '8.4 m' },
      { label: 'Energy Rating', value: 'Class A+' },
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85',
        caption: 'Evening illumination showcasing double-height atrium and reflective infinity pool.',
        aspect: 'wide',
      },
      {
        url: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1000&q=85',
        caption: 'Minimalist kitchen and living area with continuous Italian microcement flooring.',
        aspect: 'tall',
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85',
        caption: 'Cantilevered private terrace with frameless glass balustrades.',
        aspect: 'square',
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
        caption: 'Master suite bathroom framed with custom slate and brushed champagne fixtures.',
        aspect: 'tall',
      },
      {
        url: 'https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?auto=format&fit=crop&w=1200&q=85',
        caption: 'Detail of textured fluted limestone facade cladding and integrated LED lighting.',
        aspect: 'wide',
      },
    ],
  },
  {
    id: '2',
    title: 'Vanguard Corporate Centre',
    slug: 'vanguard-corporate-centre',
    category: 'Commercial & Mixed-Use',
    categorySlug: 'commercial',
    client: 'Balkan Logistics Group',
    location: 'Tetovo - Gostivar Highway corridor',
    year: '2023 - 2024',
    area: '6,200 m²',
    status: 'Completed',
    featured: true,
    aspectRatio: 'tall',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
    shortDescription: 'A five-story administrative and business hub featuring double-skin solar curtain walls and subterranean logistics bays.',
    fullDescription: 'The Vanguard Corporate Centre redefines commercial architecture along the Gostivar transit corridor. Designed to accommodate multi-tenant corporate headquarters, conference suites, and executive boardrooms, the building incorporates intelligent climate management, acoustic envelope isolation, and optimized thermal mass. AX Engineering served as the head project office, executing static audit, electrical infrastructure planning, and on-site construction safety auditing.',
    servicesDone: [
      'Commercial Master Planning',
      'Façade Engineering & Solar Studies',
      'Construction Site Safety Audit',
      'HVAC & MEP Integration',
    ],
    metrics: [
      { label: 'Gross Built Area', value: '6,200 m²' },
      { label: 'Building Levels', value: '5 + 2 Underground' },
      { label: 'Solar Envelope Ratio', value: '78%' },
      { label: 'Parking Capacity', value: '110 Vehicles' },
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
        caption: 'Central atrium with sculpted spiral steel staircase and natural daylighting skylight.',
        aspect: 'wide',
      },
      {
        url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=85',
        caption: 'Flexible executive workspaces with customized acoustic slatted timber ceilings.',
        aspect: 'tall',
      },
      {
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
        caption: 'Exterior curtain wall geometry interacting with dusk lighting.',
        aspect: 'square',
      },
    ],
  },
  {
    id: '3',
    title: 'Villa Olea Luxury Estate',
    slug: 'villa-olea-luxury-estate',
    category: 'Luxury Residences',
    categorySlug: 'luxury-residences',
    client: 'Swiss-Macedonian Family Office',
    location: 'Lake Mavrovo Foothills',
    year: '2024 - 2025',
    area: '920 m²',
    status: 'Under Construction',
    featured: true,
    aspectRatio: 'square',
    heroImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=85',
    shortDescription: 'Modern Alpine luxury villa blending traditional dark timber, local river stone, and triple-glazed curtain walls.',
    fullDescription: 'Nestled in the sub-alpine terrain near Mavrovo, Villa Olea is conceived as an oasis of quiet luxury and architectural discipline. The layout respects strict snow load regulations while maintaining wide spans for the grand salon and heated indoor wellness spa. AX Engineering spearheaded the soil geomechanics, foundation anchoring, and detailed projection drawings.',
    servicesDone: [
      'Architectural & Interior Design',
      'Alpine Foundation Engineering',
      'Hydro-Insulation & Geothermal Planning',
      'Ongoing Construction Supervision',
    ],
    metrics: [
      { label: 'Living Area', value: '920 m²' },
      { label: 'Altitude', value: '1,150 m' },
      { label: 'Wellness Pavilion', value: '180 m²' },
      { label: 'Completion', value: 'Q3 2025' },
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
        caption: 'Perspective view of the heated outdoor terrace and stone hearth.',
        aspect: 'wide',
      },
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85',
        caption: 'Grand living room featuring custom monolithic stone fireplace.',
        aspect: 'tall',
      },
    ],
  },
  {
    id: '4',
    title: 'AX Signature Residences - Gostivar Central',
    slug: 'ax-signature-residences',
    category: 'Luxury Residences',
    categorySlug: 'luxury-residences',
    client: 'AX Engineering Developments',
    location: 'Central Gostivar, North Macedonia',
    year: '2025 - 2026',
    area: '8,400 m²',
    status: 'In Concept',
    featured: true,
    aspectRatio: 'tall',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
    shortDescription: 'Our upcoming flagship residential development: 32 boutique luxury apartments, rooftop penthouses, and private underground wellness center.',
    fullDescription: 'Representing AX Engineering’s historic transition into proprietary residential development, AX Signature Residences sets a new benchmark for luxury living in Gostivar. Each residence features 3-meter clear ceilings, floor-to-ceiling Schuco glazing, individual acoustic zoning, and private elevator lobbies for top penthouses. Designed, engineered, and constructed exclusively by our in-house multidisciplinary team.',
    servicesDone: [
      'Proprietary Real Estate Development',
      'Master Architecture & Urban Planning',
      'Turnkey General Contracting',
      'High-End Interior Fitout',
    ],
    metrics: [
      { label: 'Units', value: '32 Luxury Residences' },
      { label: 'Penthouse Suites', value: '4 Exclusive' },
      { label: 'Underground Parking', value: '64 Spaces' },
      { label: 'Private Spa & Gym', value: '420 m²' },
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
        caption: 'Rooftop penthouse terrace with infinity plunge pool overlooking Gostivar.',
        aspect: 'wide',
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85',
        caption: 'Private lobby with bookmatched Calacatta marble and architectural brass accents.',
        aspect: 'tall',
      },
    ],
  },
  {
    id: '5',
    title: 'Kalyon Technical Complex & Logistic Center',
    slug: 'kalyon-technical-complex',
    category: 'Supervision & Audit',
    categorySlug: 'site-supervision',
    client: 'Industrial Development Corp',
    location: 'Polog Valley Industrial Zone',
    year: '2023',
    area: '14,000 m²',
    status: 'Completed',
    featured: false,
    aspectRatio: 'wide',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=85',
    shortDescription: 'Comprehensive site audit, static integrity certification, and rigorous construction supervision for heavy industrial operations.',
    fullDescription: 'An extensive industrial development demanding the highest standards of safety, load-bearing verification, and seismic damping. AX Engineering was designated as the primary site supervisor and legal technical auditor. Our engineers monitored daily concrete pour testing, steel rebar reinforcement schedules, and structural compliance with European Eurocode guidelines.',
    servicesDone: [
      'Independent Construction Supervision',
      'Structural Load Certification',
      'Seismic Compliance Audit',
      'Material Quality Verification',
    ],
    metrics: [
      { label: 'Structural Steel', value: '820 Metric Tons' },
      { label: 'Inspected Concrete', value: '11,400 m³' },
      { label: 'Site Safety Record', value: 'Zero Incidents' },
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=85',
        caption: 'Steel framework installation and laser leveling inspections.',
        aspect: 'wide',
      },
    ],
  },
  {
    id: '6',
    title: 'Boutique Residence M & Private Wellness',
    slug: 'boutique-residence-m',
    category: 'Interior Living',
    categorySlug: 'interior',
    client: 'Private Residence',
    location: 'Gostivar Old Town District',
    year: '2024',
    area: '480 m²',
    status: 'Completed',
    featured: false,
    aspectRatio: 'tall',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85',
    shortDescription: 'A bespoke interior redesign combining travertine stone walls, hidden ambient illumination, and bespoke millwork.',
    fullDescription: 'Residence M is an exercise in warm minimalism and sensory harmony. Our interior architecture studio reorganized the historical floorplan into an open, fluid sequence of spaces centered around light courtyards. Custom-designed oak millwork conceals storage, climate controls, and acoustic panels.',
    servicesDone: [
      'Interior Architecture & Detail Design',
      'Custom Millwork Design & Detailing',
      'Lighting Choreography',
      'Site Coordination & Furnishing',
    ],
    metrics: [
      { label: 'Flooring', value: 'Roman Travertine' },
      { label: 'Ceiling Detail', value: 'Recessed Shadowlines' },
      { label: 'Execution Period', value: '7 Months' },
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
        caption: 'Lounge area featuring bespoke textured linen seating and sculptural coffee tables.',
        aspect: 'wide',
      },
    ],
  },
  {
    id: '7',
    title: 'Panorama Tower & Urban Retail Complex',
    slug: 'panorama-tower-urban-complex',
    category: 'Commercial & Mixed-Use',
    categorySlug: 'commercial',
    client: 'Gostivar Urban Holdings',
    location: 'Vardar Riverside, Gostivar',
    year: '2025',
    area: '11,200 m²',
    status: 'In Concept',
    featured: true,
    aspectRatio: 'wide',
    heroImage: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1600&q=85',
    shortDescription: 'Mixed-use residential and commercial tower designed along the Vardar riverbank with tiered green gardens.',
    fullDescription: 'An ambitious urban regeneration project proposing 9 levels of premium riverside apartments over a 2-level podium of artisan cafes, boutiques, and pedestrian terraces. The facade utilizes vertical bronze louvers that rotate with the sun to minimize summer solar heat gain while opening vistas to Mount Bistra.',
    servicesDone: [
      'Urban Design & Conceptual Projection',
      'Environmental & Wind Tunnel Modeling',
      'BIM Level 2 Coordination',
      'Municipal Zoning Audit',
    ],
    metrics: [
      { label: 'Height', value: '38 Meters' },
      { label: 'Retail Space', value: '2,800 m²' },
      { label: 'Residential Units', value: '48 Apartments' },
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
        caption: 'Podium terrace interface with riverwalk pedestrian promenade.',
        aspect: 'wide',
      },
    ],
  },
  {
    id: '8',
    title: 'The Stone Ridge Villa',
    slug: 'the-stone-ridge-villa',
    category: 'Architectural Design',
    categorySlug: 'architectural-design',
    client: 'Private Client',
    location: 'Shar Mountain Foothills',
    year: '2024',
    area: '760 m²',
    status: 'Completed',
    featured: false,
    aspectRatio: 'tall',
    heroImage: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1600&q=85',
    shortDescription: 'Modern geometry meets indigenous mountain masonry, featuring cantilevered glass infinity wings.',
    fullDescription: 'Stone Ridge Villa anchors itself onto a steep granite ridge. By utilizing locally quarried natural stone for the lower plinth and ultra-slender steel framing for the upper pavilion, the residence appears to float above the valley fog in the morning.',
    servicesDone: [
      'Complete Architectural Project',
      'Steep-Slope Foundation Engineering',
      'Full Site Supervision',
      'Custom Exterior Landscape Design',
    ],
    metrics: [
      { label: 'Terrace Area', value: '340 m²' },
      { label: 'Pool Length', value: '18 Meters' },
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
        caption: 'Rear courtyard with outdoor kitchen and stone retaining walls.',
        aspect: 'wide',
      },
    ],
  },
]

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: '01',
    title: 'Architectural Design & Projection',
    shortDescription: 'High-concept architectural masterplans, residential villas, and commercial complexes engineered to the highest aesthetic and structural criteria.',
    description: 'Our projection office crafts distinct, contemporary architecture that marries form and function. From preliminary hand-sketched spatial studies and BIM models to photorealistic 3D visualizations and complete execution dossiers, we guide your vision with precision.',
    features: [
      'Conceptual Design & 3D Photorealistic Renderings',
      'Full Execution Projects (Main Design & Permitting)',
      'BIM Modeling & Clash Detection',
      'Urban Planning & Zoning Studies',
    ],
  },
  {
    number: '02',
    title: 'Construction Site Supervision & Audit',
    shortDescription: 'Independent, uncompromised engineering oversight ensuring structural safety, timeline adherence, and legal compliance.',
    description: 'We safeguard our clients’ investments through rigorous on-site technical supervision and audits. Our certified engineers inspect daily works, verify concrete quality and rebar placement, certify contractor invoices, and ensure total compliance with state construction standards.',
    features: [
      'Licensed Site Supervision (Gradbena Nadzorna Sluzba)',
      'Static & Material Testing Verification',
      'Contractor Quality and Financial Audits',
      'Final Technical Inspection & Occupancy Approvals',
    ],
  },
  {
    number: '03',
    title: 'Luxury Residential Construction',
    shortDescription: 'Turnkey execution of premium private residences and our own signature AX developments in Gostivar.',
    description: 'From precision excavation to the finest Italian stone finishes, AX Engineering delivers high-end residential homes. We combine specialized heavy machinery with master craftsmen, ensuring your residence is built to endure for generations.',
    features: [
      'Turnkey Villa & Luxury Residence Construction',
      'Upcoming AX Signature Residences Developments',
      'Reinforced Concrete Monolithic Structures',
      'Premium Thermal Envelopes & Schuco Glazing',
    ],
  },
  {
    number: '04',
    title: 'Structural & Civil Engineering',
    shortDescription: 'Seismic calculations, foundation stabilization on complex soils, and high-efficiency structural static design.',
    description: 'The foundation of every enduring building is rigorous engineering. We specialize in complex static calculations, post-tensioned spans, steep terrain stabilization, and seismic risk mitigation tailored to Balkan geotechnical conditions.',
    features: [
      'Static & Dynamic Structural Calculations (Eurocodes)',
      'Foundation & Geotechnical Engineering',
      'Post-Tensioned Concrete & Steel Frame Design',
      'Structural Reinforcement & Restoration Audits',
    ],
  },
  {
    number: '05',
    title: 'Interior Architecture & Spatial Styling',
    shortDescription: 'Harmonious interior environments where natural materials, tailored lighting, and bespoke joinery create timeless living spaces.',
    description: 'We approach interiors as an organic continuation of the architectural shell. Our interior studio crafts custom cabinetry, specifies natural stone and timber palettes, and designs bespoke lighting schemes that elevate daily living into an extraordinary experience.',
    features: [
      'Custom Millwork & Joinery Detailing',
      'Material & Texture Curations (Marble, Wood, Metals)',
      'Architectural Lighting Choreography',
      'Acoustic Planning & Smart Home Integration',
    ],
  },
]

export const TEAM_MEMBERS_DATA: TeamMemberItem[] = [
  {
    name: 'Arch. Xhevdet Alili',
    role: 'Principal Architect & Founder',
    bio: 'Over 18 years shaping premium residential architecture and urban projection across North Macedonia and the region. Graduated with honors in Architecture and Civil Engineering.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85',
    email: 'xhevdet@axengineering.mk',
  },
  {
    name: 'Ing. Agim Rexhepi',
    role: 'Chief Structural Engineer & Audit Lead',
    bio: 'Specialist in high-rise statics, seismic engineering, and technical site audit. Licensed technical auditor for complex construction projects.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85',
    email: 'agim@axengineering.mk',
  },
  {
    name: 'Arch. Blerta Krasniqi',
    role: 'Head of Interior Architecture & Design',
    bio: 'Educated in Milan and Skopje, Blerta oversees interior spatial layouts, luxury material sourcing, and photorealistic visualization.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85',
    email: 'blerta@axengineering.mk',
  },
  {
    name: 'Ing. Valon Murati',
    role: 'Senior Project & Site Construction Manager',
    bio: 'Oversees daily contractor operations, structural testing, worker safety, and timeline execution on all AX developments.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=85',
    email: 'valon@axengineering.mk',
  },
]

export const SITE_STATS = [
  { value: '18+', label: 'Years of Engineering Excellence' },
  { value: '140+', label: 'Completed Projects & Villas' },
  { value: '85,000 m²', label: 'Engineered & Supervised Area' },
  { value: '100%', label: 'Safety & Audit Compliance' },
]

export const COMPANY_INFO = {
  name: 'AX Engineering',
  tagline: 'Architecture • Engineering • Construction',
  address: 'Bulevard Braka Ginovski, Gostivar 1230, North Macedonia',
  phone: '+389 42 215 890',
  mobile: '+389 70 850 120',
  email: 'info@axengineering.mk',
  contactEmail: 'contact@axengineering.mk',
  workingHours: 'Monday - Friday: 08:30 - 17:30 / Saturday: 09:00 - 14:00',
  description: 'AX Engineering is a premier architecture, engineering projection, and construction firm based in Gostivar, North Macedonia. Specializing in luxury residences, private villas, commercial complexes, and professional site supervision.',
}
