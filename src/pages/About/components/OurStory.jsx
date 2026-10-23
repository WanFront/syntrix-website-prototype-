import { Target } from 'lucide-react'
import './OurStory.css'

// --- Our Story (props) ---
export default function OurStory({ stats }) {
  return (
    <section className="SectionBlock AboutStory">
      <div className="MaxWidthWrapper">
        <div className="StoryIntro">
          <div>
            <span className="SectionEyebrow">Our story</span>
            <h2 className="SectionTitle">The story behind Syntrix</h2>
          </div>
          <p className="SectionBody">
            We chose the name Syntrix because it stands for synchronization and interconnected systems. That is
            what we build: digital solutions where your people, records, and processes work together instead of
            living in separate spreadsheets and inboxes.
          </p>
        </div>

        <div className="StoryGrid">
          <div className="StoryImage"></div>

          <div className="StoryCard">
            <div className="StoryCardTop">
              <Target size={20} className="StoryCardIcon" />
              <span className="SectionEyebrow">Why choose us</span>
            </div>

            <h3 className="StoryCardTitle">Technology that works for you</h3>
            <p className="SectionBody">
              We provide reliable and practical digital solutions tailored to your business needs. From website
              and system development to ongoing maintenance, we focus on quality, functionality, and long-term
              support.
            </p>
          </div>

          <div className="StoryStats">
            {/* --- map --- */}
            {stats.map((stat) => (
              <div key={stat.id} className="StoryStat">
                <span className="StoryStatValue">{stat.value}</span>
                <span className="StoryStatLabel">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
