import { Search, PenTool, Code2, LifeBuoy, ArrowRight } from 'lucide-react'
import './HowWeWork.css'

const steps = [
  {
    id: 'discover',
    icon: Search,
    title: 'Discover',
    text: 'A free call to learn how your team works today and what slows it down.',
    deliverable: 'Project brief & quote',
  },
  {
    id: 'design',
    icon: PenTool,
    title: 'Design',
    text: 'We map the workflow and design the screens, so you can review everything before we build.',
    deliverable: 'Clickable prototype',
  },
  {
    id: 'build',
    icon: Code2,
    title: 'Build',
    text: 'We develop and test in short steps, with regular demos so there are no surprises.',
    deliverable: 'Tested, working system',
  },
  {
    id: 'support',
    icon: LifeBuoy,
    title: 'Support',
    text: 'After launch we train your team and stay on for updates, fixes, and improvements.',
    deliverable: 'Ongoing maintenance',
  },
]

// --- How We Work ---
export default function HowWeWork() {
  return (
    <section className="SectionBlock HowWeWork">
      <div className="MaxWidthWrapper">
        <div className="HowIntro">
          <span className="SectionEyebrow">How we work</span>
          <h2 className="SectionTitle">From first call to long-term support</h2>
          <p className="SectionBody">
            A simple, four-step process. You always know what is happening, what comes next, and what you will get.
          </p>
        </div>

        <ol className="HowSteps">
          {/* --- map --- */}
          {steps.map(({ id, icon: Icon, title, text, deliverable }, index) => (
            <li key={id} className="HowStep">
              <span className="HowStepIcon"><Icon size={20} /></span>
              <span className="HowStepNumber">Step {String(index + 1).padStart(2, '0')}</span>
              <h3 className="HowStepTitle">{title}</h3>
              <p className="HowStepText">{text}</p>
              <p className="HowStepDeliverable">
                <span className="HowStepDeliverableLabel">You get</span>
                {deliverable}
              </p>
            </li>
          ))}
        </ol>

        <div className="HowCta">
          <a href="#contact" className="HowCtaLink">
            <span>Start with a free discovery call</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
