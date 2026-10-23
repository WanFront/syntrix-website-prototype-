import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import * as images from '../assets/images.js'
import './ProjectHero.css'

const heroProjects = [
  { name: 'Airly', image: images.Airly },
  { name: 'Airofly', image: images.Airofly },
  { name: 'Bookit', image: images.Bookit },
  { name: 'Climate', image: images.Climate },
  { name: 'Glowit', image: images.Glowit },
  { name: 'Moss', image: images.moss },
  { name: 'Simply', image: images.Simply },
  { name: 'Trip Pilot', image: images.Trippilot },
  { name: 'Vacay', image: images.Vacay },
]

// --- Project Hero ---
export default function ProjectHero() {
  // --- useState ---
  const [featuredProjectIndex, setFeaturedProjectIndex] = useState(0)
  const featuredProject = heroProjects[featuredProjectIndex]

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const intervalId = window.setInterval(() => {
      setFeaturedProjectIndex((currentIndex) => {
        let nextIndex = currentIndex
        while (nextIndex === currentIndex) {
          nextIndex = Math.floor(Math.random() * heroProjects.length)
        }
        return nextIndex
      })
    }, 4000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section className="ProjectHero" id="project-hero">
      <div className="MaxWidthWrapper ProjectHeroContainer">
        <div className="ProjectHeroContent">
          <p className="ProjectHeroEyebrow">
            <span className="ProjectHeroDot" aria-hidden="true" />
            Our work
          </p>
          <h1 className="ProjectHeroTitle">
            Projects we
            <br />
            design &amp; <span className="ProjectHeroHighlight">develop.</span>
          </h1>
          <p className="ProjectHeroSubtitle">
            Websites, web apps, and online stores we have designed and built for real businesses.
          </p>
          <a href="#project-list" className="ProjectHeroBtn">
            <span>See recent projects</span>
            <ArrowRight size={16} />
          </a>
        </div>

        <a
          className="ProjectHeroImageLink"
          href="#project-list"
          aria-label={`Look at our recent launches. Browse projects featuring ${featuredProject.name}`}
        >
          <img
            key={featuredProject.image}
            src={featuredProject.image}
            alt={`${featuredProject.name} project preview`}
          />
          <span className="ProjectHeroLaunchCallout">
            <span className="ProjectHeroLaunchDot" aria-hidden="true" />
            <span>Look at our recent launches</span>
          </span>
        </a>
      </div>
    </section>
  )
}
