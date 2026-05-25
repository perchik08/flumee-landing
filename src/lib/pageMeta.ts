import { SEO_IMAGE_PATH, SITE_NAME } from '../constants'
import type { Dictionary } from '../i18n/types'

function siteOrigin(): string {
  const fromEnv = import.meta.env.VITE_SITE_URL as string | undefined
  if (fromEnv) return fromEnv.replace(/\/$/, '')
  if (typeof window !== 'undefined') return window.location.origin
  return ''
}

function absoluteAsset(path: string): string {
  const origin = siteOrigin()
  if (!origin) return path
  return `${origin}${path.startsWith('/') ? path : `/${path}`}`
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`
  let el = document.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function updatePageMeta(t: Dictionary) {
  const imageUrl = absoluteAsset(SEO_IMAGE_PATH)
  const pageUrl =
    typeof window !== 'undefined' ? window.location.href : siteOrigin()

  document.title = t.meta.title
  setMeta('name', 'description', t.meta.description)
  setMeta('property', 'og:type', 'website')
  setMeta('property', 'og:site_name', SITE_NAME)
  setMeta('property', 'og:title', t.meta.title)
  setMeta('property', 'og:description', t.meta.description)
  setMeta('property', 'og:image', imageUrl)
  setMeta('property', 'og:image:alt', t.meta.imageAlt)
  setMeta('property', 'og:locale', t.meta.ogLocale)
  if (pageUrl) setMeta('property', 'og:url', pageUrl)
  setMeta('name', 'twitter:card', 'summary_large_image')
  setMeta('name', 'twitter:title', t.meta.title)
  setMeta('name', 'twitter:description', t.meta.description)
  setMeta('name', 'twitter:image', imageUrl)
  setMeta('name', 'twitter:image:alt', t.meta.imageAlt)
}
