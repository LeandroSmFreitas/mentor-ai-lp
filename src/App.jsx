import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Problem from './components/Problem.jsx'
import Features from './components/Features.jsx'
import Demo from './components/Demo.jsx'
import Benefits from './components/Benefits.jsx'
import Pricing from './components/Pricing.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Faq from './components/Faq.jsx'
import FinalCta from './components/FinalCta.jsx'
import Footer from './components/Footer.jsx'
import ConsentBanner from './components/ConsentBanner.jsx'
import { captureAttribution, loadAnalytics } from './lib/analytics.js'

export default function App() {
  // plano que despertou interesse: escolhido nos cartões e enviado junto com o lead
  const [plan, setPlan] = useState('')

  useEffect(() => {
    captureAttribution()
    loadAnalytics()
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Demo />
        <Benefits />
        <Pricing onSelectPlan={setPlan} />
        <HowItWorks />
        <Faq />
        <FinalCta plan={plan} onPlanChange={setPlan} />
      </main>
      <Footer />
      <ConsentBanner />
    </>
  )
}
