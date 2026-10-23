import './MissionVision.css'

// --- Mission Vision (props) ---
export default function MissionVision({ mission, vision, missionIcon, visionIcon, image }) {
  const items = [
    { id: 'mission', label: 'Our mission', icon: missionIcon, iconClass: 'MVIconMission', ...mission },
    { id: 'vision', label: 'Our vision', icon: visionIcon, iconClass: 'MVIconVision', ...vision },
  ]

  return (
    <section className="SectionBlock AboutMV">
      <div className="MaxWidthWrapper">
        <div className="MVIntro">
          <span className="SectionEyebrow">What drives us</span>
          <h2 className="SectionTitle">Our purpose and the future we envision</h2>
        </div>

        <div className="MVGrid">
          <div className="MVText">
            {/* --- map --- */}
            {items.map((item) => (
              <div key={item.id} className="MVItem">
                <div className="MVItemTop">
                  <div className={`MVIcon ${item.iconClass}`} style={{ backgroundImage: `url(${item.icon})` }}></div>
                  <span className="SectionEyebrow">{item.label}</span>
                </div>
                <h3 className="MVItemTitle">{item.title}</h3>
                <p className="SectionBody">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="MVImage" style={{ backgroundImage: `url(${image})` }}></div>
        </div>
      </div>
    </section>
  )
}
