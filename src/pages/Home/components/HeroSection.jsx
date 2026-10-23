import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import * as images from '../assets/images.js'
import './HeroSection.css'

const heroSlides = [
  { src: images.slide1, alt: 'Developers reviewing code together' },
  { src: images.slide2, alt: 'Syntrix team at work' },
  { src: images.slide3, alt: 'Syntrix systems in action' },
]

// --- Hero Section ---
export default function HeroSection() {
  // --- useState ---
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="hero" className="HeroSection">
      <div className="MaxWidthWrapper HeroGrid">
        <div className="HeroLeft">
          <div className="HeroBadge">
            <span className="HeroBadgePing">
              <span className="HeroBadgePingOuter"></span>
              <span className="HeroBadgePingInner"></span>
            </span>
            <span className="HeroBadgeText">Where Technology Meets Innovation</span>
          </div>

          <h1 className="HeroHeadline">
            We develop modern &amp; efficient web–based <span className="HeroHeadlineAccent">systems.</span>
          </h1>

          <p className="HeroSubtext">
            We build web systems that automate daily operations, keep your records organized, and bring your
            team's scattered tools into one reliable workflow.
          </p>

          <div className="HeroButtons">
            <Link to="/projects" className="HeroBtnPrimary">
              <span>See our recent projects</span>
              <ArrowRight size={16} />
            </Link>
            <a href="#services" className="HeroBtnSecondary">
              <span>What we offer</span>
            </a>
          </div>
        </div>

        <div className="HeroRight">
          <div className="HeroRightBacklight"></div>

          <div className="HeroComposition">
            <div className="HeroFloatingBadge">
              <p className="HeroFloatingBadgeText">Turning ideas into real solutions.</p>
              <div className="HeroSignalBars">
                <span className="HeroSignalBar HeroSignalBar1"></span>
                <span className="HeroSignalBar HeroSignalBar2"></span>
                <span className="HeroSignalBar HeroSignalBar3"></span>
                <span className="HeroSignalBar HeroSignalBar4"></span>
              </div>
            </div>

            <div className="HeroImageFrame">
              {/* --- map --- */}
              {heroSlides.map((slide, i) => (
                <img
                  key={i}
                  src={slide.src}
                  alt={slide.alt}
                  className={`HeroSlide ${i === currentSlide ? 'HeroSlideActive' : ''}`}
                />
              ))}
              <div className="HeroImageVignette"></div>
            </div>

            <div className="HeroStatsCard">
              <div className="HeroStatsRow">
                <div className="HeroStatBlock HeroStatBlockAccent">
                  <div className="HeroStatAccentRow">
                    <span className="HeroBadgePing HeroStatPing">
                      <span className="HeroBadgePingOuter"></span>
                      <span className="HeroBadgePingInner"></span>
                    </span>
                    <p className="HeroStatValue HeroStatValueAccent">50+</p>
                  </div>
                  <p className="HeroStatLabel">Satisfied clients</p>
                </div>
                <div className="HeroStatBlock">
                  <p className="HeroStatValue">70+</p>
                  <p className="HeroStatLabel">Projects delivered</p>
                </div>
                <div className="HeroStatBlock">
                  <p className="HeroStatValue">3+</p>
                  <p className="HeroStatLabel">Years of experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

