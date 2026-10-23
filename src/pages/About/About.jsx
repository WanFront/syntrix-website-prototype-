import Header from '../../components/Header.jsx'
import ContactForm from '../../components/ContactForm.jsx'
import Footer from '../../components/Footer.jsx'
import BusinessProfile from '../../components/BusinessProfile.jsx'
import BusinessFeatures from '../../components/BusinessFeatures.jsx'
import MissionVision from '../../components/MissionVision.jsx'

import OurStory from './components/OurStory.jsx'
import Team from './components/Team.jsx'
import HowWeWork from './components/HowWeWork.jsx'

import { business, navLinks, services, mission, vision, coreValues, team } from '../../data/business.js'
import side1 from './assets/side1.webp'
import side2 from './assets/side2.webp'
import mainImage from './assets/main.webp'
import core1 from './assets/core1.webp'
import core2 from './assets/core2.webp'
import core3 from './assets/core3.webp'
import missionIcon from './assets/mIcon.svg'
import visionIcon from './assets/vIcon.svg'
import mvImage from './assets/MV.webp'

import './About.css'

const profileHighlights = [
  { id: 'creative', label: 'Creative Solutions', image: side1 },
  { id: 'digital', label: 'Digital Experiences', image: side2 },
]

const coreImages = [core1, core2, core3]
// --- map ---
const features = coreValues.map((value, index) => ({ ...value, image: coreImages[index] }))

const storyStats = [
  { id: 'years', value: '3+', label: 'Years of experience' },
  { id: 'projects', value: '70+', label: 'Projects delivered' },
  { id: 'satisfaction', value: '98%', label: 'Client satisfaction' },
]

// --- About Us ---
export default function AboutUs() {
  return (
    <div className="AboutUsPage">
      <Header businessName={business.name} navLinks={navLinks} />

      <BusinessProfile
        label="About Us:"
        title="Beyond the interface"
        description="We are a small team of developers and designers who build websites, web systems, and custom software around how our clients actually work. From UI/UX design and development to launch and long-term maintenance, we turn ideas into reliable, easy-to-use solutions that help businesses grow."
        highlights={profileHighlights}
        mainImage={mainImage}
      />

      <OurStory stats={storyStats} />

      <BusinessFeatures
        eyebrow="Core values"
        title="What we stand for"
        description="Three principles guide every project, from the first conversation to the last update: deliver quality, keep innovating, and stay committed to our clients."
        features={features}
      />

      <HowWeWork />

      <MissionVision
        mission={mission}
        vision={vision}
        missionIcon={missionIcon}
        visionIcon={visionIcon}
        image={mvImage}
      />

      <Team members={team} />

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
