import { Link } from 'react-router-dom'
import logo from './assets/logo.svg'
import './Footer.css'

// --- Footer (props) ---
export default function Footer({ businessName, tagline, contact, navLinks, services }) {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="MaxWidthWrapper">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <Link to="/" className="footer-logo">
              <img src={logo} alt="" className="footer-logo-icon" />
              {businessName}.
            </Link>
            <p className="footer-desc">{tagline}</p>
          </div>
          <div className="footer-section">
            <h4>Pages</h4>
            <ul>
              {/* --- map --- */}
              {navLinks.map((link) => (
                <li key={link.id}><Link to={link.to}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              {/* --- map --- */}
              {services.map((service) => (
                <li key={service.id}>{service.title}</li>
              ))}
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <p>Address: {contact.address}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {year} {businessName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
