import './BusinessFeatures.css'

// --- Business Features (props) ---
export default function BusinessFeatures({ eyebrow, title, description, features }) {
  return (
    <section className="SectionBlock AboutCore">
      <div className="MaxWidthWrapper CoreGrid">
        <div className="CoreIntro">
          <span className="SectionEyebrow">{eyebrow}</span>
          <h2 className="SectionTitle">{title}</h2>
          <p className="SectionBody">{description}</p>
        </div>

        <div className="CoreCards">
          {/* --- map --- */}
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

// --- Feature Card (props) ---
function FeatureCard({ title, text, image }) {
  return (
    <div className="CoreCard">
      <div className="CoreImage" style={{ backgroundImage: `url(${image})` }}></div>
      <h3 className="CoreCardTitle">{title}</h3>
      <p className="CoreCardText">{text}</p>
    </div>
  )
}
