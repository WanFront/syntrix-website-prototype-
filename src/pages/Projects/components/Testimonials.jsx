import { Star } from 'lucide-react'
import './Testimonials.css'

// --- SAMPLE reviews for the prototype: replace with real client feedback before launch ---
// quote: what the client said | name: client's name | title: role and project
// initials: 2 letters for the avatar circle | gradient: avatar color (keep or change)
const testimonials = [
  {
    quote: 'Before TeamFlow we tracked tasks in three different group chats. Now everyone sees who is doing what, and our weekly meetings are half as long.',
    name: 'Maria Santos',
    title: 'Operations Manager, TeamFlow',
    initials: 'MS',
    gradient: 'linear-gradient(135deg, #38bdf8, #0284c7)',
  },
  {
    quote: 'The team turned our rough idea into an app our hikers actually enjoy using. They listened, explained every step, and delivered on time.',
    name: 'Paolo Reyes',
    title: 'Founder, Moss',
    initials: 'PR',
    gradient: 'linear-gradient(135deg, #c084fc, #7c3aed)',
  },
  {
    quote: 'Our online orders became so much easier to manage. Customers love the product recommendations, and we spend less time fixing order mistakes.',
    name: 'Andrea Lim',
    title: 'Owner, GlowIt',
    initials: 'AL',
    gradient: 'linear-gradient(135deg, #2dd4bf, #0f766e)',
  },
  {
    quote: 'The booking flow is clean and simple. Even our older customers can book a trip without calling us for help.',
    name: 'Miguel Cruz',
    title: 'Marketing Lead, Airofly',
    initials: 'MC',
    gradient: 'linear-gradient(135deg, #fb7185, #be123c)',
  },
  {
    quote: 'Syntrix felt like part of our team. Every update was clear, and they kept improving the system even after launch.',
    name: 'Kristine Garcia',
    title: 'General Manager, Bookit',
    initials: 'KG',
    gradient: 'linear-gradient(135deg, #facc15, #ca8a04)',
  },
  {
    quote: 'Our store finally looks as good as our furniture. Browsing is fast, checkout is smooth, and sales went up after the launch.',
    name: 'Joshua Tan',
    title: 'Co-founder, Simply',
    initials: 'JT',
    gradient: 'linear-gradient(135deg, #bae6fd, #7dd3fc)',
  },
]

// --- Testimonial Group (props) ---
function TestimonialGroup({ hidden = false }) {
  return (
    <div className="TestimonialGroup" aria-hidden={hidden || undefined}>
      {/* --- map --- */}
      {testimonials.map((item) => (
        <article key={item.title} className="TestimonialCard">
          <div>
            <div className="TestimonialStars" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} fill="currentColor" stroke="none" />
              ))}
            </div>
            <p className="TestimonialQuote">"{item.quote}"</p>
          </div>
          <div className="TestimonialClientInfo">
            <span className="TestimonialAvatar" style={{ background: item.gradient }} aria-hidden="true">
              {item.initials}
            </span>
            <div>
              <div className="TestimonialClientName">{item.name}</div>
              <div className="TestimonialClientTitle">{item.title}</div>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

// --- Testimonials ---
export default function Testimonials() {
  return (
    <section className="TestimonialsSection">
      <div className="TestimonialsHeader">
        <p className="TestimonialsTag">Client feedback</p>
        <h2>What our clients say</h2>
      </div>

      <div className="TestimonialsMarqueeWrapper">
        <div className="TestimonialsMarqueeTrack">
          <TestimonialGroup />
          <TestimonialGroup hidden />
        </div>
      </div>
    </section>
  )
}
