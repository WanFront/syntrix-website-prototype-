import './BusinessProfile.css'

// --- Business Profile (props) ---
export default function BusinessProfile({ label, title, description, highlights, mainImage }) {
  return (
    <section className="AboutHero" id="about">
      <div className="MaxWidthWrapper AboutHeroGrid">
        <div className="AboutHeroLeft">
          <h1 className="AboutHeadline">
            <span className="AboutHeadlineAccent">{label}</span> {title}
          </h1>

          <p className="AboutSubtext">{description}</p>

          <div className="AboutSideCards">
            {/* --- map --- */}
            {highlights.map((item) => (
              <div
                key={item.id}
                className="AboutSideCard"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="AboutMainImage" style={{ backgroundImage: `url(${mainImage})` }}></div>
      </div>
    </section>
  )
}
