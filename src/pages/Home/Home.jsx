import Header from '../../components/Header.jsx'
import Services from '../../components/Services.jsx'
import StatsBar from '../../components/StatsBar.jsx'
import ContactForm from '../../components/ContactForm.jsx'
import Footer from '../../components/Footer.jsx'
import BusinessOverview from '../../components/BusinessOverview.jsx'

import HeroSection from './components/HeroSection.jsx'
import RecentProjects from './components/RecentProjects.jsx'
import TechSection from './components/TechSection.jsx'

import * as images from './assets/images.js'
import { business, overview, navLinks, services, stats } from '../../data/business.js'

import './Home.css'

const serviceImages = [images.service1, images.service2, images.service3, images.service4]

// --- Home Page ---
export default function HomePage() {
  return (
    <div className="HomePage">
      <Header businessName={business.name} navLinks={navLinks} />
      <HeroSection />
      <BusinessOverview
        businessName={business.name}
        problem={overview.problem}
        highlights={overview.highlights}
      />
      <Services
        eyebrow="What we offer"
        title="Four services, one outcome:"
        titleMuted="a system your team trusts."
        services={services}
        images={serviceImages}
      />
      <StatsBar stats={stats} />
      <RecentProjects />
      <TechSection />
      <ContactForm />
      <Footer
        businessName={business.name}
        tagline={business.tagline}
        contact={business.contact}
        navLinks={navLinks}
        services={services}
      />
    </div>
  )
}
