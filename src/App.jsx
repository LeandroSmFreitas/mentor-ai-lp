import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Integrations from './components/Integrations.jsx'
import Problem from './components/Problem.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Features from './components/Features.jsx'
import Areas from './components/Areas.jsx'
import Security from './components/Security.jsx'
import Pricing from './components/Pricing.jsx'
import Faq from './components/Faq.jsx'
import FinalCta from './components/FinalCta.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Integrations />
        <Problem />
        <HowItWorks />
        <Features />
        <Areas />
        <Security />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
