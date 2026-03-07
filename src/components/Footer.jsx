// import { Link } from 'react-router-dom'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>EcoGreen</h4>
            <p>Leading provider of waste management and scrap recycling solutions for a sustainable future.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/mission-vision">Mission & Vision</Link></li>
              <li><Link to="/facilities">Facilities</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/hazardous-waste">Hazardous Waste</Link></li>
              <li><Link to="/non-hazardous-waste">Non-Hazardous Waste</Link></li>
              <li><Link to="/get-quote">Get a Quote</Link></li>
              <li><Link to="/certificates">Certificates</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <p><strong>Phone:</strong> <a href="tel:+923432300185" className="phone-link">+92 343 2300185</a></p>
            <p><strong>Email:</strong> <a href="mailto:connect.ecogreen@gmail.com" className="email-link">connect.ecogreen@gmail.com</a></p>
            <p><strong>Address:</strong> ECO-GREEN HQ<br />Waste Management District</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 EcoGreen. All rights reserved</p>
          <Link to="/admin" className="staff-link" style={{ fontSize: '0.7rem', opacity: 0.5, marginLeft: '10px', textDecoration: 'none', color: 'inherit' }}>Staff Login</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
