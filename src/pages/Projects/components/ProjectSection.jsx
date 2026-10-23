import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { X, CheckCircle2, CircleDashed, Clock, Users } from 'lucide-react'
import * as images from '../assets/images.js'
import './ProjectSection.css'

const projects = [
  { id: 1, title: 'TeamFlow', category: 'Web applications', filterCategory: 'Web applications', description: 'A team workspace for assigning tasks, tracking progress, and managing projects in one place.', imageColor: '#F5F5F5', image: images.mockup },
  { id: 2, title: 'Moss', category: 'Web applications', filterCategory: 'Web applications', description: 'A trail and hiking app that helps people discover outdoor routes and care for the environment.', imageColor: '#E8F5E9', image: images.moss },
  { id: 3, title: 'GlowIt', category: 'Ecommerces', filterCategory: 'Ecommerces', description: 'Skin care e-commerce platform with personalized recommendations and subscription options.', imageColor: '#FFFDE7', image: images.Glowit },
  { id: 4, title: 'Airofly', category: 'Websites', filterCategory: 'Websites', description: 'A travel booking site for flights, hotels, and activities, built around a clear and friendly booking flow.', imageColor: '#F3E5F5', image: images.Airofly },
  { id: 6, title: 'Bookit', category: 'Web applications', filterCategory: 'Web applications', description: 'A personalized booking platform for hotels and accommodations, with a focus on user experience and convenience.', imageColor: '#E1F5FE', image: images.Bookit },
  { id: 7, title: 'Trippilot', category: 'Web applications', filterCategory: 'Web applications', description: 'A travel planning and booking platform with a focus on user experience and convenience, powered by AI technology.', imageColor: '#EDE7DF', image: images.Trippilot },
  { id: 8, title: 'Boardit', category: 'Web applications', filterCategory: 'Web applications', description: 'An online boarding pass and trip manager that keeps every booking and pass in one place.', imageColor: '#E7F0D8', image: images.Boardit },
  { id: 9, title: 'ChangeE', category: 'Websites', filterCategory: 'Websites', description: 'An Earth Day campaign site that encourages sustainable living through simple, engaging content.', imageColor: '#DDE8F2', image: images.Climate },
  { id: 10, title: 'Airly', category: 'Web applications', filterCategory: 'Web applications', description: 'An air quality dashboard that shows real-time pollution levels in a clear, accessible way.', imageColor: '#F2E5DC', image: images.Airly },
  { id: 11, title: 'Vacay Airlines', category: 'Websites', filterCategory: 'Websites', description: 'An airline website with a fast, simple flight search and booking experience.', imageColor: '#DCEDEB', image: images.Vacay },
  { id: 12, title: 'Simply', category: 'Ecommerces', filterCategory: 'Ecommerces', description: 'A furniture and home decor store with a curated catalog and a smooth checkout.', imageColor: '#F1E8C9', image: images.Simply },
]

// --- prototype details shown in the project popup (keyed by project id) ---
const projectDetails = {
  1: { status: 'Completed', duration: '4 months', team: '3 members', tech: ['React', 'Laravel', 'MySQL'] },
  2: { status: 'Completed', duration: '3 months', team: '2 members', tech: ['Flutter', 'Figma'] },
  3: { status: 'Completed', duration: '2 months', team: '3 members', tech: ['React', 'PHP', 'MySQL'] },
  4: { status: 'Completed', duration: '6 weeks', team: '2 members', tech: ['HTML', 'CSS', 'JavaScript'] },
  6: { status: 'Completed', duration: '3 months', team: '3 members', tech: ['React', 'Laravel', 'MySQL'] },
  7: { status: 'In progress', duration: '5 months', team: '3 members', tech: ['React', 'Python', 'Figma'] },
  8: { status: 'Completed', duration: '2 months', team: '2 members', tech: ['Flutter', 'Figma'] },
  9: { status: 'Completed', duration: '3 weeks', team: '2 members', tech: ['HTML', 'CSS', 'JavaScript'] },
  10: { status: 'Completed', duration: '2 months', team: '3 members', tech: ['React', 'Python'] },
  11: { status: 'Completed', duration: '6 weeks', team: '2 members', tech: ['Figma', 'HTML', 'CSS'] },
  12: { status: 'Completed', duration: '2 months', team: '3 members', tech: ['React', 'PHP', 'MySQL'] },
}

// --- '#project-teamflow' style ids, used by links from the Home page ---
const projectSlug = (title) => 'project-' + title.toLowerCase().replace(/[^a-z0-9]+/g, '')

const categories = ['All Projects', 'Websites', 'Web applications', 'Ecommerces']

// --- Project Meta (props) ---
function ProjectMeta({ details }) {
  const inProgress = details.status === 'In progress'
  const items = [
    { id: 'status', icon: inProgress ? CircleDashed : CheckCircle2, label: 'Status', value: details.status },
    { id: 'duration', icon: Clock, label: 'Duration', value: details.duration },
    { id: 'team', icon: Users, label: 'Team', value: details.team },
  ]

  return (
    <>
      <div className="modal-meta">
        {/* --- map --- */}
        {items.map(({ id, icon: Icon, label, value }) => (
          <div key={id} className="modal-meta-item">
            <span className={`modal-meta-icon${id === 'status' && inProgress ? ' modal-meta-icon-progress' : ''}`}>
              <Icon size={16} />
            </span>
            <span className="modal-meta-label">{label}</span>
            <span className="modal-meta-value">{value}</span>
          </div>
        ))}
      </div>

      <div className="modal-tech">
        <span className="modal-tech-label">Built with</span>
        <ul className="modal-tech-list">
          {/* --- map --- */}
          {details.tech.map((tool) => (
            <li key={tool} className="modal-tech-chip">{tool}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

// --- Project Section ---
export default function ProjectSection() {
  const projectGridRef = useRef(null)
  // --- useState ---
  const [selectedProject, setSelectedProject] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Projects')

  const normalizedSearchTerm = searchTerm.trim().toLowerCase()
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All Projects' || project.filterCategory === selectedCategory
    const matchesSearch = [project.title, project.category, project.filterCategory, project.description].some(
      (value) => value.toLowerCase().includes(normalizedSearchTerm)
    )
    return matchesCategory && matchesSearch
  })
  // --- map ---
  const filteredProjectKey = filteredProjects.map((project) => project.id).join(',')

  const handleOpenProject = (projectId) => {
    setSelectedProject(projectId)
    document.body.style.overflow = 'hidden'
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = 'unset'
  }

  // --- Esc closes the pop-up; leaving the page while it is open never leaves scrolling locked ---
  useEffect(() => {
    if (selectedProject === null) return undefined
    const onKey = (e) => e.key === 'Escape' && handleCloseModal()
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  const getCurrentProject = () => projects.find((p) => p.id === selectedProject)

  // --- arriving from a Home project card: scroll to that card and highlight it ---
  const { hash } = useLocation()
  const [highlightedSlug, setHighlightedSlug] = useState(null)

  useEffect(() => {
    const slug = decodeURIComponent(hash.slice(1))
    if (!slug.startsWith('project-')) return undefined
    const timers = []

    timers.push(window.setTimeout(() => {
      const target = document.getElementById(slug)
      if (!target) return
      // jump straight there: the visitor came from another page
      target.scrollIntoView({ behavior: 'instant', block: slug === 'project-list' ? 'start' : 'center' })
      if (slug !== 'project-list') {
        setHighlightedSlug(slug)
        timers.push(window.setTimeout(() => setHighlightedSlug(null), 2600))
      }
    }, 150))

    return () => timers.forEach((t) => window.clearTimeout(t))
  }, [hash])

  useEffect(() => {
    const grid = projectGridRef.current
    if (!grid || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const cards = Array.from(grid.querySelectorAll('.project-card'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const cardIndex = cards.indexOf(entry.target)
          entry.target.animate(
            [
              { opacity: 0, transform: 'translateY(24px) scale(0.96)' },
              { opacity: 1, transform: 'translateY(-3px) scale(1.02)', offset: 0.78 },
              { opacity: 1, transform: 'translateY(0) scale(1)' },
            ],
            { duration: 620, delay: cardIndex * 55, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)' }
          )
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.15 }
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [filteredProjectKey])

  return (
    <section className="project-section" id="project-list">
      <div className="MaxWidthWrapper">
      <div className="project-header">
        <span className="project-label">Recent work</span>
        <h2 className="project-title">All our projects in one place</h2>
        <p className="project-subtitle">
          Filter by type or search by name, then select a project to see what it does.
        </p>
      </div>

      <div className="project-filter-toolbar">
        <div className="project-category-tabs" role="group" aria-label="Filter projects by category">
          {/* --- map --- */}
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`project-category-button${selectedCategory === category ? ' active' : ''}`}
              aria-pressed={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
              {category === 'All Projects' && <span className="project-category-count"> ({projects.length})</span>}
            </button>
          ))}
        </div>
        <div className="project-search-row">
          <label className="visually-hidden" htmlFor="project-search">Search projects</label>
          <input
            id="project-search"
            className="project-search"
            type="search"
            placeholder="Search projects"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="project-grid" id="project-grid" ref={projectGridRef}>
          {/* --- map --- */}
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={projectSlug(project.title)}
              className={`project-card${highlightedSlug === projectSlug(project.title) ? ' project-card-highlight' : ''}`}
              onClick={() => handleOpenProject(project.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleOpenProject(project.id)
                }
              }}
            >
              <div className="project-image" style={{ background: project.imageColor }} aria-label={`${project.title} project preview`}>
                {project.image && (
                  <img className="project-image-content" src={project.image} alt={`${project.title} preview`} />
                )}
                {project.id === 1 && (
                  <span className="project-badge">
                    <span className="project-badge-dot" aria-hidden="true" />
                    Our most recent work
                  </span>
                )}
                <div className="project-info">
                  <h3 className="project-name">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="project-empty-state" role="status">No projects match your search.</p>
      )}
      </div>

      {selectedProject !== null && (
        <div className="modal-overlay" onClick={handleCloseModal} role="presentation">
          <div className="modal-content" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button className="modal-close" onClick={handleCloseModal} aria-label="Close project details"><X size={20} /></button>

            <div className="modal-image-section">
              <div className="modal-image" style={{ backgroundColor: getCurrentProject()?.imageColor }}>
                {getCurrentProject()?.image && (
                  <img className="modal-image-content" src={getCurrentProject().image} alt={`${getCurrentProject().title} preview`} />
                )}
              </div>
            </div>

            <div className="modal-details">
              <span className="modal-category">{getCurrentProject()?.category}</span>
              <h2 className="modal-title" id="modal-title">{getCurrentProject()?.title}</h2>
              <p className="modal-description">{getCurrentProject()?.description}</p>

              {projectDetails[selectedProject] && <ProjectMeta details={projectDetails[selectedProject]} />}

              <div className="modal-actions">
                <button className="btn btn-primary">View Project</button>
                <button className="btn btn-secondary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
