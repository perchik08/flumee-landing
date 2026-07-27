import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LanguageProvider } from './i18n/LanguageProvider'
import { Var1Landing } from './components/var1/Var1Landing'
import './index.css'
import App from './App.tsx'

const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
const isVar1 = pathname === '/var1'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {isVar1 ? (
      <Var1Landing />
    ) : (
      <LanguageProvider>
        <App />
      </LanguageProvider>
    )}
  </StrictMode>,
)
