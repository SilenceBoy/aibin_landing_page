import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import ValueHighlights from './components/ValueHighlights/ValueHighlights'
import Services from './components/Services/Services'
import About from './components/About/About'
import FeaturedContent from './components/FeaturedContent/FeaturedContent'
import ContactCTA from './components/ContactCTA/ContactCTA'
import Footer from './components/Footer/Footer'
import { useScrollObserver } from './hooks/useScrollObserver'

function App() {
  useScrollObserver()

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ValueHighlights />
      <Services />
      <About />
      <FeaturedContent />
      <ContactCTA />
      <Footer />
    </div>
  )
}

export default App
