import { groq } from 'next-sanity'

export const projectsQuery = groq`*[_type == "project"] | order(order asc, _createdAt desc) {
  _id,
  title,
  title_mk,
  title_en,
  "slug": slug.current,
  categoryName,
  "category": category->{ title, title_mk, title_en, "slug": slug.current },
  client,
  location,
  year,
  area,
  status,
  featured,
  mainImage,
  shortDescription,
  shortDescription_mk,
  shortDescription_en,
  servicesDone,
  servicesDone_mk,
  servicesDone_en,
  order
}`

export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  title_mk,
  title_en,
  "slug": slug.current,
  categoryName,
  "category": category->{ title, title_mk, title_en, "slug": slug.current },
  client,
  location,
  year,
  area,
  floors,
  apartments,
  parkingSpaces,
  energyClass,
  status,
  isUnderConstruction,
  progressPercent,
  currentPhase,
  currentPhase_mk,
  currentPhase_en,
  expectedCompletion,
  stages[] {
    name,
    name_mk,
    name_en,
    status,
    date
  },
  featured,
  mainImage,
  gallery,
  shortDescription,
  shortDescription_mk,
  shortDescription_en,
  fullDescription,
  fullDescription_mk,
  fullDescription_en,
  servicesDone,
  servicesDone_mk,
  servicesDone_en,
  showProgressSection,
  showSpecsSection,
  showGallerySection,
  showServicesScope,
  showAdjacentNav
}`

export const featuredProjectsQuery = groq`*[_type == "project" && featured == true] | order(order asc, _createdAt desc)[0...6] {
  _id,
  title,
  title_mk,
  title_en,
  "slug": slug.current,
  categoryName,
  client,
  location,
  year,
  area,
  status,
  mainImage,
  shortDescription,
  shortDescription_mk,
  shortDescription_en
}`

export const categoriesQuery = groq`*[_type == "category"] | order(title asc) {
  _id,
  title,
  title_mk,
  title_en,
  "slug": slug.current,
  description
}`

export const teamMembersQuery = groq`*[_type == "teamMember"] | order(order asc, _createdAt asc) {
  _id,
  name,
  role,
  role_mk,
  role_en,
  bio,
  bio_mk,
  bio_en,
  image,
  email,
  linkedin
}`

export const servicesQuery = groq`*[_type == "service"] | order(order asc) {
  _id,
  number,
  "slug": slug.current,
  title,
  title_mk,
  title_en,
  shortDescription,
  shortDescription_mk,
  shortDescription_en,
  description,
  description_mk,
  description_en,
  heroImage,
  features,
  features_mk,
  features_en,
  deliverables,
  deliverables_mk,
  deliverables_en,
  workflow[] {
    stepNumber,
    title,
    title_mk,
    title_en,
    description,
    description_mk,
    description_en
  },
  faqs[] {
    question,
    question_mk,
    question_en,
    answer,
    answer_mk,
    answer_en
  },
  showWorkflow,
  showFaqs,
  showDeliverables
}`

export const serviceBySlugQuery = groq`*[_type == "service" && slug.current == $slug][0] {
  _id,
  number,
  "slug": slug.current,
  title,
  title_mk,
  title_en,
  shortDescription,
  shortDescription_mk,
  shortDescription_en,
  description,
  description_mk,
  description_en,
  heroImage,
  features,
  features_mk,
  features_en,
  deliverables,
  deliverables_mk,
  deliverables_en,
  workflow[] {
    stepNumber,
    title,
    title_mk,
    title_en,
    description,
    description_mk,
    description_en
  },
  faqs[] {
    question,
    question_mk,
    question_en,
    answer,
    answer_mk,
    answer_en
  },
  showWorkflow,
  showFaqs,
  showDeliverables
}`

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0] {
  _id,
  companyName,
  tagline,
  heroImage,
  heroImageAlt,
  location,
  address,
  phone,
  email,
  workingHours
}`

