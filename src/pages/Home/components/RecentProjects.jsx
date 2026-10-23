import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import * as images from '../assets/images.js'
import './RecentProjects.css'

// --- Recent Projects ---
export default function RecentProjects() {
  return (
    <section id="projects" className="ProjectsSection">
      <div className="MaxWidthWrapper ProjectsGrid">
        <div className="ProjectsColumn ProjectsColumnLeft">
          <div className="ProjectsIntro">
            <span className="ProjectsEyebrow">Recent work</span>
            <h2 className="ProjectsTitle">Our most recent launches</h2>
            <p className="ProjectsSubtext">
              A few of the web apps, websites, and online stores we have designed and built recently. Each one
              started as a real problem a client needed solved.
            </p>
          </div>

          <Link to="/projects#project-airofly" className="ProjectCard ProjectOne" aria-label="View Airofly in projects">
            <img
              src={images.Airofly}
              alt="Airofly travel booking website"
              className="ProjectImage"
            />
            <div className="ProjectOverlay">
              <div className="ProjectOverlayIcon ProjectOverlayIconLarge">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </Link>
        </div>

        <div className="ProjectsColumn">
          <Link to="/projects#project-moss" className="ProjectCard ProjectTwo" aria-label="View Moss in projects">
            <img
              src={images.moss}
              alt="Moss hiking app"
              className="ProjectImage"
            />
            <div className="ProjectOverlay">
              <div className="ProjectOverlayIcon">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </Link>

          <Link to="/projects#project-glowit" className="ProjectCard ProjectThree" aria-label="View GlowIt in projects">
            <img
              src={images.Glowit}
              alt="GlowIt skin care e-commerce"
              className="ProjectImage"
            />
            <div className="ProjectOverlay">
              <div className="ProjectOverlayIcon">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </Link>
        </div>

        <div className="ProjectsColumn">
          <Link to="/projects#project-teamflow" className="ProjectCard ProjectFour" aria-label="View TeamFlow in projects">
            <img
              src={images.mockup}
              alt="TeamFlow employee management system"
              className="ProjectImage"
            />
            <div className="ProjectOverlay">
              <div className="ProjectOverlayIcon ProjectOverlayIconLarge">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </Link>

          <Link to="/projects#project-list" className="ProjectsMoreBtn">
            <span>See all projects</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

