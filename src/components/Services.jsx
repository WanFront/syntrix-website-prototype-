import { Check } from 'lucide-react'
import './Services.css'

// --- Services (props) ---
export default function Services({ services, eyebrow, title, titleMuted, images = [] }) {
  return (
    <section className="ServicesSection" id="services">
      <div className="MaxWidthWrapper">
        <div className="ServicesIntro">
          <span className="ServicesEyebrow">{eyebrow}</span>
          <h2 className="ServicesTitle">
            {title} {titleMuted && <span className="ServicesTitleMuted">{titleMuted}</span>}
          </h2>
        </div>

        <div className="ServicesList">
          {/* --- map --- */}
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              number={index + 1}
              image={images[index]}
              imageFirst={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// --- Service Card (props) ---
export function ServiceCard({ service, number, image, imageFirst = true }) {
  const { icon: Icon, title, description, features } = service

  const tag = `Service ${String(number).padStart(2, '0')}`

  const imageBlock = (
    <div className={`ServiceImageWrap ${imageFirst ? 'ServiceImageLeft' : 'ServiceImageRight'}`}>
      <img src={image} alt={title} className="ServiceImage" />
      <div className={`ServiceImageGradient ${imageFirst ? 'ServiceImageGradientTr' : 'ServiceImageGradientTl'}`}></div>
      <span className={`ServiceTag ${imageFirst ? 'ServiceTagLeft' : 'ServiceTagRight'}`}>{tag}</span>
    </div>
  )

  const textBlock = (
    <div className={`ServiceText ${imageFirst ? 'ServiceTextRight' : 'ServiceTextLeft'}`}>
      <div className="ServiceIcon"><Icon size={20} /></div>
      <h3 className="ServiceTitle">{title}</h3>
      <p className="ServiceDescription">{description}</p>
      <ul className="ServiceFeatures">
        {/* --- map --- */}
        {features.map((feature) => (
          <li key={feature}><Check size={16} className="ServiceCheckIcon" /> {feature}</li>
        ))}
      </ul>
    </div>
  )

  return (
    <div className="ServiceCard">
      {imageFirst ? imageBlock : textBlock}
      {imageFirst ? textBlock : imageBlock}
    </div>
  )
}
