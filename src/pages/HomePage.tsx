import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Outcome from '../components/Outcome/Outcome'
import HardProof from '../components/HardProof/HardProof'
import CaseHighlights from '../components/CaseHighlights/CaseHighlights'
import WaysToCollaborate from '../components/WaysToCollaborate/WaysToCollaborate'
import Process from '../components/Process/Process'
import ContactCTA from '../components/ContactCTA/ContactCTA'
import Footer from '../components/Footer/Footer'
import { useScrollObserver } from '../hooks/useScrollObserver'

function HomePage() {
    useScrollObserver()

    return (
        <div className="min-h-screen pt-16">
            <Header />
            <Hero />
            <Outcome />
            <HardProof />
            <CaseHighlights />
            <WaysToCollaborate />
            <Process />
            <ContactCTA />
            <Footer />
        </div>
    )
}

export default HomePage
