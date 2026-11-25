import { Language } from '@/context/AppContext'

export interface TranslationDictionary {
  nav: {
    home: string
    projects: string
    services: string
    about: string
    staff: string
    contact: string
    callUs: string
    inquire: string
  }
  hero: {
    tag: string
    title1: string
    titleAccent: string
    title2: string
    subtitle: string
    viewPortfolio: string
    initiateProject: string
    stat1: string
    stat2: string
    stat3: string
    stat4: string
  }
  about: {
    tag: string
    title: string
    p1: string
    p2: string
    p3: string
    license1Title: string
    license1Desc: string
    license2Title: string
    license2Desc: string
    pillar1Title: string
    pillar1Desc: string
    pillar2Title: string
    pillar2Desc: string
    pillar3Title: string
    pillar3Desc: string
    pillar4Title: string
    pillar4Desc: string
    readFull: string
    upcomingTag: string
    upcomingTitle: string
    upcomingDesc: string
  }
  portfolio: {
    tag: string
    title: string
    desc: string
    viewAll: string
    inspect: string
    categories: Record<string, string>
    status: Record<string, string>
  }
  services: {
    tag: string
    title: string
  }
  contact: {
    tag: string
    title: string
    subtitle: string
    officeTitle: string
    addressLabel: string
    phoneLabel: string
    emailLabel: string
    hoursLabel: string
    hoursValue: string
    whatsAppBtn: string
    registryTitle: string
    registryDesc: string
    formTitle: string
    formSubtitle: string
    fullName: string
    email: string
    phone: string
    discipline: string
    location: string
    brief: string
    submitBtn: string
    transmitting: string
    successTitle: string
    successDesc: string
    sendAnother: string
    confidentialNotice: string
  }
  footer: {
    tag: string
    title: string
    scheduleMeeting: string
    description: string
    certifiedAudit: string
    navigationTitle: string
    expertiseTitle: string
    headquartersTitle: string
    rights: string
  }
  projectDetail: {
    backToProjects: string
    breadcrumbHome: string
    breadcrumbProjects: string
    underConstruction: string
    completed: string
    requestQuoteBtn: string
    viewGalleryBtn: string
    floors: string
    surfaceArea: string
    typology: string
    parking: string
    deliveryYear: string
    overviewTag: string
    overviewTitle: string
    servicesScopeTag: string
    servicesScopeTitle: string
    constructionTag: string
    constructionTitle: string
    constructionSubtitle: string
    overallProgress: string
    currentPhase: string
    stageCompleted: string
    stageCurrent: string
    stageUpcoming: string
    galleryTag: string
    galleryTitle: string
    allPhotos: string
    exterior: string
    interior: string
    constructionTab: string
    renderTab: string
    prevProject: string
    nextProject: string
  }
}

export const translations: Record<Language, TranslationDictionary> = {
  sq: {
    nav: {
      home: 'Ballina',
      projects: 'Projektet',
      services: 'Shërbimet',
      about: 'Rreth Nesh',
      staff: 'Stafi',
      contact: 'Kontakt',
      callUs: 'Na Telefononi:',
      inquire: 'Kërko Ofertë',
    },
    hero: {
      tag: 'Gostivar • Studio Arkitekture & Mbikëqyrje',
      title1: 'Krijojmë Hapësira',
      titleAccent: 'Jetëgjata.',
      title2: '',
      subtitle:
        'A-X Engineering është studio e themeluar e projektimit arkitektonik dhe inxhinierisë strukturore me seli në Gostivar. E specializuar në vila luksoze private, qendra afariste, mbikëqyrje profesionale dhe rezidenca vetanake.',
      viewPortfolio: 'Shiko Portfolion',
      initiateProject: 'Fillo Projektin',
      stat1: 'Projekte të Realizuara',
      stat2: 'Vite Përvojë Inxhinierike',
      stat3: 'Metra Katrorë të Ndërtuar',
      stat4: 'Arkitektë & Inxhinierë në Ekip',
    },
    about: {
      tag: 'Standardi A-X',
      title: 'Ku vizioni arkitektonik bashkohet me saktësinë inxhinierike.',
      p1: 'Me seli në Gostivar, A-X Engineering ka krijuar një autoritet të dëshmuar në ndërtimtarinë rajonale. Studioja jonë harmonizon bukurinë estetike të arkitekturës me disiplinën rigoroze të inxhinierisë statike.',
      p2: 'Nga mbikëqyrja e pavarur e kantiereve dhe llogaritjet sizmike e statike për vila moderne, deri te fillimi i punimeve për rezidencat tona ekskluzive, ne menaxhojmë çdo fazë nga skica deri te pranimi teknik.',
      p3: 'Zyra jonë posedon licencat zyrtare të Kategorisë A dhe B nga Oda e Inxhinierëve dhe Ministria e Transportit.',
      license1Title: 'Oda e Inxhinierëve',
      license1Desc: 'Autorizim Zyrtar Kategoria A & B',
      license2Title: 'Mbikëqyrje & Audit',
      license2Desc: 'Mbikëqyrje e Licencuar e Ndërtimit',
      pillar1Title: 'Projektim Arkitektonik',
      pillar1Desc: 'Skica konceptuale dhe vizualizime fotorealiste 3D.',
      pillar2Title: 'Zyra e Projektimit',
      pillar2Desc: 'Llogaritje statike, projekte kryesore dhe leje ndërtimi.',
      pillar3Title: 'Mbikëqyrje Ndërtimi',
      pillar3Desc: 'Kontroll cilësie, siguri në kantier dhe pranim teknik.',
      pillar4Title: 'Rezidenca & Zhvillim',
      pillar4Desc: 'Ndërtim me çelësa në dorë dhe komplekse banimi.',
      readFull: 'Lexo filozofinë dhe njoftu stafin tonë',
      upcomingTag: 'Projekt në Zhvillim',
      upcomingTitle: 'A-X Rezidencat • Gostivar',
      upcomingDesc: 'Banim kolektiv modern me beton minimalist, xhama termikë panoramikë dhe efikasitet të lartë energjetik.',
    },
    portfolio: {
      tag: 'Punët e Përzgjedhura',
      title: 'Portfoli Arkitektonik',
      desc: 'Eksploroni koleksionin e vilave private, objekteve afariste dhe mbikëqyrjeve tona inxhinierike në Gostivar dhe më gjerë.',
      viewAll: 'Shiko të Gjitha Punët',
      inspect: 'Detaje',
      categories: {
        all: 'Të Gjitha',
        'luxury-residences': 'Vila & Rezidenca',
        commercial: 'Objekte Afariste',
        'architectural-design': 'Projektim Arkitekturor',
        'site-supervision': 'Mbikëqyrje Ndërtimi',
        'interior-living': 'Enterier & Dizajn',
      },
      status: {
        Completed: 'E Përfunduar',
        'Under Construction': 'Në Ndërtim',
        'In Concept': 'Faza Konceptuale',
      },
    },
    services: {
      tag: 'Fushat e Veprimtarisë',
      title: 'Disiplinat e Integruara të Arkitekturës dhe Inxhinierisë',
    },
    contact: {
      tag: 'Dialog i Drejtpërdrejtë',
      title: 'Konsultohuni me Inxhinierët Kryesorë',
      subtitle: 'Pavarësisht nëse po planifikoni një vilë private, keni nevojë për mbikëqyrje të licencuar ndërtimi, apo interesoheni për Rezidencat A-X, zyra jonë është në dispozicionin tuaj.',
      officeTitle: 'Selia në Gostivar',
      addressLabel: 'Adresa e Zyrës',
      phoneLabel: 'Telefon & WhatsApp',
      emailLabel: 'Posta Elektronike',
      hoursLabel: 'Orari i Punës',
      hoursValue: 'Hënë - Premte: 08:30 - 17:00 | Shtunë: Me Termine',
      whatsAppBtn: 'Bisedo Drejtpërdrejt në WhatsApp',
      registryTitle: 'Regjistri Zyrtar',
      registryDesc: 'Projektim dhe mbikëqyrje e autorizuar me licencë shtetërore.',
      formTitle: 'Përshkruani Projektin Tuaj',
      formSubtitle: 'Plotësoni të dhënat kryesore për parcelën ose ndërtimin tuaj. Zyra jonë do të analizojë fizibilitetin dhe rregulloren urbanistike.',
      fullName: 'Emri & Mbiemri / Kompania *',
      email: 'Email Adresa *',
      phone: 'Telefoni / WhatsApp *',
      discipline: 'Shërbimi i Kërkuar',
      location: 'Vendndodhja e Parcelës',
      brief: 'Përshkrimi i Projektit / Kërkesat *',
      submitBtn: 'Dërgo Kërkesën',
      transmitting: 'Duke dërguar...',
      successTitle: 'Kërkesa u Pranua me Sukses',
      successDesc: 'Faleminderit. Zyra jonë e inxhinierisë në Gostivar do t’ju kontaktojë brenda 24 orëve të punës.',
      sendAnother: 'Dërgo një kërkesë tjetër',
      confidentialNotice: 'Të dhënat tuaja ruhen me konfidencialitet të plotë. Konsultimi fillestar është pa obligim.',
    },
    footer: {
      tag: 'Filloni Vizionin Tuaj',
      title: 'Le të ndërtojmë së bashku objektin tuaj të ardhshëm.',
      scheduleMeeting: 'Caktoni një Takim',
      description: 'Zyrë e licencuar e projektimit arkitektonik, inxhinierisë strukturore dhe mbikëqyrjes së ndërtimit në Gostivar.',
      certifiedAudit: 'Zyrë e Çertifikuar e Mbikëqyrjes Ndërtimore',
      navigationTitle: 'Lidhje të Shpejta',
      expertiseTitle: 'Ekspertiza',
      headquartersTitle: 'Selia Qendrore',
      rights: 'Të gjitha të drejtat e rezervuara.',
    },
    projectDetail: {
      backToProjects: 'Kthehu te Projektet',
      breadcrumbHome: 'Ballina',
      breadcrumbProjects: 'Projektet',
      underConstruction: 'Në Ndërtim e Sipër',
      completed: 'Projekt i Përfunduar',
      requestQuoteBtn: 'Kërko Ofertë të Ngjashme',
      viewGalleryBtn: 'Shiko Galerinë',
      floors: 'Kate',
      surfaceArea: 'Sipërfaqja',
      typology: 'Tipologjia',
      parking: 'Parkimi',
      deliveryYear: 'Viti / Dorëzimi',
      overviewTag: 'Koncepti Arkitekturor',
      overviewTitle: 'Koreografia Hapësinore & Integriteti Strukturor',
      servicesScopeTag: 'Fusha e Veprimit',
      servicesScopeTitle: 'Shërbimet e Realizuara nga A-X',
      constructionTag: 'Ndjekja e Punimeve në Kantier',
      constructionTitle: 'Progresi i Ndërtimit & Fazat Teknike',
      constructionSubtitle: 'Mbikëqyrje e drejtpërdrejtë dhe raporte të përditësuara nga inxhinierët e kantierit.',
      overallProgress: 'Progresi i Përgjithshëm',
      currentPhase: 'Faza Aktuale',
      stageCompleted: 'Përfunduar',
      stageCurrent: 'Në Zhvillim',
      stageUpcoming: 'Në Pritje',
      galleryTag: 'Dokumentimi Vizual',
      galleryTitle: 'Galeria e Projektit & Detajet',
      allPhotos: 'Të Gjitha',
      exterior: 'Eksterier',
      interior: 'Enterier',
      constructionTab: 'Kantieri',
      renderTab: 'Render 3D',
      prevProject: 'Projekti Paraprak',
      nextProject: 'Projekti i Radhës',
    },
  },
  mk: {
    nav: {
      home: 'Почетна',
      projects: 'Проекти',
      services: 'Услуги',
      about: 'За Нас',
      staff: 'Тим',
      contact: 'Контакт',
      callUs: 'Јавете ни се:',
      inquire: 'Побарајте Понуда',
    },
    hero: {
      tag: 'Гостивар • Архитектонско Студио & Надзор',
      title1: 'Создаваме',
      titleAccent: 'Трајни',
      title2: 'Простори.',
      subtitle:
        'A-X Engineering е етаблирано архитектонско проектантско биро и студио за градежно инженерство со седиште во Гостивар. Специјализирано за луксузни приватни вили, деловни центри, стручен градежен надзор и сопствени станбени комплекси.',
      viewPortfolio: 'Види Портфолио',
      initiateProject: 'Започни Проект',
      stat1: 'Реализирани Проекти',
      stat2: 'Години Инженерско Искуство',
      stat3: 'Изградена Квадратура',
      stat4: 'Инженери и Архитекти во Тим',
    },
    about: {
      tag: 'Стандардот A-X',
      title: 'Каде архитектонската визија се спојува со инженерската прецизност.',
      p1: 'Со седиште во Гостивар, A-X Engineering изгради препознатлив авторитет во регионалното градежништво. Нашата пракса прави баланс меѓу современата естетика и строгата статичка пресметка.',
      p2: 'Од независен стручен градежен надзор и сеизмички анализи за модерни вили, до сопствени станбени објекти, ние го водиме целиот процес од скица до технички прием.',
      p3: 'Бирото поседува целосни овластувања Категорија А и Б издадени од Комората на овластени архитекти и инженери.',
      license1Title: 'Комора на Инженери',
      license1Desc: 'Овластување Категорија А и Б',
      license2Title: 'Градежен Надзор',
      license2Desc: 'Лиценциран Стручен Градежен Надзор',
      pillar1Title: 'Архитектонско Проектирање',
      pillar1Desc: 'Идејни решенија и фотореалистична 3D визуелизација.',
      pillar2Title: 'Проектантско Биро',
      pillar2Desc: 'Основни проекти, статички пресметки и одобренија за градба.',
      pillar3Title: 'Стручен Градежен Надзор',
      pillar3Desc: 'Контрола на квалитет, арматура, бетон и технички прием.',
      pillar4Title: 'Изведба и Инвестиции',
      pillar4Desc: 'Клуч на рака изведба и сопствени станбени комплекси.',
      readFull: 'Прочитајте за нашиот тим и филозофија',
      upcomingTag: 'Нов Проект',
      upcomingTitle: 'A-X Резиденција • Гостивар',
      upcomingDesc: 'Модерно колективно домување со современ бетон, панорамски стакла и висока енергетска ефикасност.',
    },
    portfolio: {
      tag: 'Избрани Дела',
      title: 'Архитектонско Портфолио',
      desc: 'Истражете ја нашата колекција на луксузни вили, деловни центри и објекти под наш стручен надзор во Гостивар и регионот.',
      viewAll: 'Сите Проекти',
      inspect: 'Детали',
      categories: {
        all: 'Сите Проекти',
        'luxury-residences': 'Луксузни Вили',
        commercial: 'Деловни Објекти',
        'architectural-design': 'Архитектонско Проектирање',
        'site-supervision': 'Градежен Надзор',
        'interior-living': 'Ентериер & Дизајн',
      },
      status: {
        Completed: 'Завршено',
        'Under Construction': 'Во Изградба',
        'In Concept': 'Идеен Проект',
      },
    },
    services: {
      tag: 'Подрачја на Делување',
      title: 'Интегрирани Архитектонски и Градежни Дисциплини',
    },
    contact: {
      tag: 'Директен Контакт',
      title: 'Консултирајте се со Водечките Инженери',
      subtitle: 'Без разлика дали планирате изградба на приватна вила, ви е потребен лиценциран надзор или се интересирате за резиденциите A-X, нашето биро ви стои на располагање.',
      officeTitle: 'Седиште во Гостивар',
      addressLabel: 'Адреса на Канцеларија',
      phoneLabel: 'Телефон & WhatsApp',
      emailLabel: 'Електронска Пошта',
      hoursLabel: 'Работно Време',
      hoursValue: 'Пон - Пет: 08:30 - 17:00 | Сабота: Со Закажување',
      whatsAppBtn: 'Директен WhatsApp Разговор',
      registryTitle: 'Службен Регистар',
      registryDesc: 'Овластено проектантско биро и надзор со државна лиценца.',
      formTitle: 'Испратете Податоци за Проектот',
      formSubtitle: 'Внесете ги основните информации за парцелата или објектот. Ќе ги разгледаме урбанистичките услови и техничката изводливост.',
      fullName: 'Име и Презиме / Компанија *',
      email: 'Е-пошта *',
      phone: 'Телефон / WhatsApp *',
      discipline: 'Потребна Услуга',
      location: 'Локација на Парцелата',
      brief: 'Краток Опис на Проектот *',
      submitBtn: 'Испрати Барање',
      transmitting: 'Се испраќа...',
      successTitle: 'Барањето е Успешно Примено',
      successDesc: 'Ви благодариме. Нашиот тим ќе ве контактира во рок од 24 работни часа.',
      sendAnother: 'Испрати ново барање',
      confidentialNotice: 'Вашите податоци се заштитени. Првичната консултација е необврзувачка.',
    },
    footer: {
      tag: 'Започнете ја Вашата Визија',
      title: 'Да го изградиме вашиот следен архитектонски белег.',
      scheduleMeeting: 'Закажете Средба',
      description: 'Лиценцирано биро за архитектонско проектирање, градежно инженерство и стручен надзор во Гостивар.',
      certifiedAudit: 'Сертифицирано Биро за Градежен Надзор',
      navigationTitle: 'Навигација',
      expertiseTitle: 'Експертиза',
      headquartersTitle: 'Седиште',
      rights: 'Сите права се задржани.',
    },
    projectDetail: {
      backToProjects: 'Назад кон Проекти',
      breadcrumbHome: 'Почетна',
      breadcrumbProjects: 'Проекти',
      underConstruction: 'Во Градба',
      completed: 'Завршен Проект',
      requestQuoteBtn: 'Побарајте Понуда',
      viewGalleryBtn: 'Види Галерија',
      floors: 'Катност',
      surfaceArea: 'Површина',
      typology: 'Типологија',
      parking: 'Паркинг',
      deliveryYear: 'Година / Рок',
      overviewTag: 'Архитектонски Концепт',
      overviewTitle: 'Просторна Кореографија & Статичка Сигурност',
      servicesScopeTag: 'Опсег на Изведба',
      servicesScopeTitle: 'Извршени Услуги од A-X',
      constructionTag: 'Следење на Градежните Работи',
      constructionTitle: 'Градежен Прогрес & Технички Фази',
      constructionSubtitle: 'Директен стручен надзор и редовни теренски извештаи од нашите инженери.',
      overallProgress: 'Вкупен Прогрес',
      currentPhase: 'Тековна Фаза',
      stageCompleted: 'Завршено',
      stageCurrent: 'Во Тек',
      stageUpcoming: 'Претстојно',
      galleryTag: 'Визуелна Документација',
      galleryTitle: 'Галерија на Проектот',
      allPhotos: 'Сите',
      exterior: 'Екстериер',
      interior: 'Ентериер',
      constructionTab: 'Градилиште',
      renderTab: '3D Рендер',
      prevProject: 'Претходен Проект',
      nextProject: 'Следен Проект',
    },
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      services: 'Services',
      about: 'About',
      staff: 'Staff',
      contact: 'Contact',
      callUs: 'Call Us:',
      inquire: 'Inquire',
    },
    hero: {
      tag: 'Gostivar • Architecture Studio & Audit',
      title1: 'Sculpting',
      titleAccent: 'Enduring',
      title2: 'Spaces.',
      subtitle:
        'A-X Engineering is an established architectural projection office and structural engineering studio based in Gostivar. Specializing in high-end private villas, commercial hubs, licensed site supervision, and proprietary signature residences.',
      viewPortfolio: 'View Portfolio',
      initiateProject: 'Initiate Project',
      stat1: 'Projects Delivered',
      stat2: 'Years Engineering Experience',
      stat3: 'Square Meters Built',
      stat4: 'In-House Architects & Engineers',
    },
    about: {
      tag: 'The A-X Standard',
      title: 'Where architectural vision meets precision engineering.',
      p1: 'Headquartered in Gostivar, A-X Engineering has established an authoritative presence in the Balkan construction landscape. Our practice bridges the delicate balance between sculptural aesthetic design and rigorous technical discipline.',
      p2: 'Whether overseeing large-scale civil audits, engineering complex cantilevers for luxury hillside villas, or breaking ground on our own upcoming signature residences, we manage the complete lifecycle from sketch to occupancy certification.',
      p3: 'Our practice holds full statutory licensing Category A and B from the Chamber of Engineers and Ministry of Transport.',
      license1Title: 'Chamber of Engineers',
      license1Desc: 'Fully Licensed Authorization A & B',
      license2Title: 'Technical Audit',
      license2Desc: 'Certified Legal Construction Supervision',
      pillar1Title: 'Bespoke Projection',
      pillar1Desc: 'Concept drawings & photorealistic 3D visualization.',
      pillar2Title: 'Projection Office',
      pillar2Desc: 'Eurocode static calculations, MEP engineering & municipal permits.',
      pillar3Title: 'Site Supervision & Audit',
      pillar3Desc: 'Independent site supervision, quality control & legal audit.',
      pillar4Title: 'Construction & Developments',
      pillar4Desc: 'Turnkey construction and proprietary signature residential developments.',
      readFull: 'Read our full philosophy & team',
      upcomingTag: 'Upcoming Development',
      upcomingTitle: 'A-X Signature Residences • Gostivar',
      upcomingDesc: 'Luxury multi-family living crafted with minimalist concrete, expansive glass, and sustainable energy efficiency.',
    },
    portfolio: {
      tag: 'Selected Works',
      title: 'Architectural Portfolio',
      desc: 'Explore our curation of private luxury villas, modern commercial centres, and technical supervision achievements across the region.',
      viewAll: 'Explore All Archive Works',
      inspect: 'Inspect',
      categories: {
        all: 'All Projects',
        'luxury-residences': 'Luxury Residences',
        commercial: 'Commercial & Mixed-Use',
        'architectural-design': 'Architectural Design',
        'site-supervision': 'Supervision & Audit',
        'interior-living': 'Interior Living',
      },
      status: {
        Completed: 'Completed',
        'Under Construction': 'Under Construction',
        'In Concept': 'In Concept',
      },
    },
    services: {
      tag: 'Practice Areas',
      title: 'Integrated Architectural & Engineering Disciplines',
    },
    contact: {
      tag: 'Direct Dialogue',
      title: 'Consult With Our Principal Engineers',
      subtitle: 'Whether you are embarking on a bespoke residence, requiring legal construction site supervision in the Polog region, or inquiring about our upcoming A-X Signature Developments, our studio is at your disposal.',
      officeTitle: 'Gostivar Headquarters',
      addressLabel: 'Office Address',
      phoneLabel: 'Direct Telephony & WhatsApp',
      emailLabel: 'Electronic Mail',
      hoursLabel: 'Working Consultations',
      hoursValue: 'Mon - Fri: 08:30 - 17:00 | Sat: By Appointment',
      whatsAppBtn: 'Instant WhatsApp Direct Chat',
      registryTitle: 'Official Registry',
      registryDesc: 'Authorized design & construction supervision licensed by the Ministry of Transport and Communications.',
      formTitle: 'Transmit Your Project Parameters',
      formSubtitle: 'Please share essential information regarding your planned development. Our project office will review land cadastral data and engineering feasibility.',
      fullName: 'Full Name / Organisation *',
      email: 'Email Address *',
      phone: 'Telephone / WhatsApp *',
      discipline: 'Discipline Required',
      location: 'Plot / Project Location',
      brief: 'Project Brief / Scope of Work *',
      submitBtn: 'Transmit Project Brief',
      transmitting: 'Transmitting Brief...',
      successTitle: 'Inquiry Received',
      successDesc: 'Thank you. Our lead architectural and engineering office in Gostivar will contact you within 24 business hours.',
      sendAnother: 'Send another inquiry',
      confidentialNotice: 'Your data is treated with confidentiality. Initial architectural consultation is non-binding.',
    },
    footer: {
      tag: 'Commence Your Vision',
      title: 'Let us shape your next architectural landmark.',
      scheduleMeeting: 'Schedule Initial Meeting',
      description: 'Licensed architectural projection office, structural engineering, and construction supervision based in Gostivar.',
      certifiedAudit: 'Certified Technical Audit Office',
      navigationTitle: 'Navigation',
      expertiseTitle: 'Expertise',
      headquartersTitle: 'Headquarters',
      rights: 'All rights reserved.',
    },
    projectDetail: {
      backToProjects: 'Back to Projects',
      breadcrumbHome: 'Home',
      breadcrumbProjects: 'Projects',
      underConstruction: 'Under Construction',
      completed: 'Completed Project',
      requestQuoteBtn: 'Request Similar Offer',
      viewGalleryBtn: 'View Gallery',
      floors: 'Floors',
      surfaceArea: 'Surface Area',
      typology: 'Typology',
      parking: 'Parking',
      deliveryYear: 'Year / Handover',
      overviewTag: 'Architectural Concept',
      overviewTitle: 'Spatial Choreography & Structural Integrity',
      servicesScopeTag: 'Scope of Services',
      servicesScopeTitle: 'Services Rendered by A-X',
      constructionTag: 'On-Site Construction Tracking',
      constructionTitle: 'Construction Progress & Technical Milestones',
      constructionSubtitle: 'Direct technical site supervision and verified reports from our licensed engineers.',
      overallProgress: 'Overall Progress',
      currentPhase: 'Current Phase',
      stageCompleted: 'Completed',
      stageCurrent: 'In Progress',
      stageUpcoming: 'Upcoming',
      galleryTag: 'Visual Documentation',
      galleryTitle: 'Project Gallery & Perspectives',
      allPhotos: 'All',
      exterior: 'Exterior',
      interior: 'Interior',
      constructionTab: 'On Site',
      renderTab: '3D Render',
      prevProject: 'Previous Project',
      nextProject: 'Next Project',
    },
  },
}
