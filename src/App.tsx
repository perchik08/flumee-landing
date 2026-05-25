import { CustomCursor } from './components/CustomCursor'
import { EarlyAccess } from './components/EarlyAccess'
import { FAQ } from './components/FAQ'
import { Features } from './components/Features'
import { FinalCTA } from './components/FinalCTA'
import { FinancialStrength } from './components/FinancialStrength'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HeroFlumee } from './components/HeroFlumee'
import { HowItWorks } from './components/HowItWorks'
import { Limits } from './components/Limits'
import { MainIdea } from './components/MainIdea'
import { Marquee } from './components/Marquee'
import { PlanningPurchase } from './components/PlanningPurchase'
import { Problem } from './components/Problem'
import { Questions } from './components/Questions'
import { UseCases } from './components/UseCases'
import { WhyTelegram } from './components/WhyTelegram'

function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <HeroFlumee />
        <Marquee />
        <Problem />
        <MainIdea />
        <HowItWorks />
        <Features />
        <UseCases />
        <Questions />
        <Limits />
        <PlanningPurchase />
        <FinancialStrength />
        <WhyTelegram />
        <EarlyAccess />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
