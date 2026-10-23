import { CheckCircle2 } from 'lucide-react'
import './BusinessOverview.css'

// --- Business Overview (props) ---
export default function BusinessOverview({ businessName, problem, highlights }) {
  return (
    <section className="SectionBlock OverviewSection" id="overview">
      <div className="MaxWidthWrapper OverviewGrid">
        <div className="OverviewIntro">
          <span className="SectionEyebrow">{businessName}</span>
          <h2 className="SectionTitle">{problem}</h2>
        </div>

        <ul className="OverviewList">
          {/* --- map --- */}
          {highlights.map((item) => (
            <li key={item.id} className="OverviewItem">
              <CheckCircle2 size={20} className="OverviewIcon" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
