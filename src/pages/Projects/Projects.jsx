import Header from '../../components/Header.jsx'
import ContactForm from '../../components/ContactForm.jsx'
import Footer from '../../components/Footer.jsx'

import ProjectHero from './components/ProjectHero.jsx'
import ProjectSection from './components/ProjectSection.jsx'
import Testimonials from './components/Testimonials.jsx'

import { business, navLinks, services } from '../../data/business.js'

import './Projects.css'

// --- Project ---
export default function Project() {
  return (
    <div className="ProjectPage">
      <Header businessName={business.name} navLinks={navLinks} />
      <ProjectHero />
      <ProjectSection />
      <Testimonials />
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
