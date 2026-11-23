import { groq } from 'next-sanity'

export const projectsQuery = groq`*[_type == "project"] | order(order asc, _createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  categoryName,
  "category": category->{ title, "slug": slug.current },
  client,
  location,
  year,
  area,
  status,
  featured,
  mainImage,
  shortDescription,
  servicesDone,
  order
}`

export const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  categoryName,
  "category": category->{ title, "slug": slug.current },
  client,
  location,
  year,
  area,
  status,
  featured,
  mainImage,
  gallery,
  shortDescription,
  fullDescription,
  servicesDone
}`

export const featuredProjectsQuery = groq`*[_type == "project" && featured == true] | order(order asc, _createdAt desc)[0...6] {
  _id,
  title,
  "slug": slug.current,
  categoryName,
  client,
  location,
  year,
  area,
  status,
  mainImage,
  shortDescription
}`

export const categoriesQuery = groq`*[_type == "category"] | order(title asc) {
  _id,
  title,
  "slug": slug.current,
  description
}`

export const teamMembersQuery = groq`*[_type == "teamMember"] | order(order asc, _createdAt asc) {
  _id,
  name,
  role,
  bio,
  image,
  email,
  linkedin
}`

export const servicesQuery = groq`*[_type == "service"] | order(order asc) {
  _id,
  number,
  title,
  shortDescription,
  description,
  features
}`
