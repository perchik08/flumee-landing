/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Public site URL for absolute Open Graph image links (e.g. https://flumee.app) */
  readonly VITE_SITE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
