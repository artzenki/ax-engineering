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
  status,
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
  servicesDone_en
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
  title,
  title_mk,
  title_en,
  shortDescription,
  shortDescription_mk,
  shortDescription_en,
  description,
  description_mk,
  description_en,
  features,
  features_mk,
  features_en
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

