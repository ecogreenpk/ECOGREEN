import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../pages/styles/CommonPages.css'
import { sendQuoteEmail } from '../services/emailService'

function GetQuotePage() {
  const location = useLocation()
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    wasteType: '',
    quantity: '',
    frequency: '',
    location: '',
    requirements: ''
  })

  const [status, setStatus] = useState({ loading: false, success: false, error: null })

  useEffect(() => {
    if (!location.state?.prefilledWasteType) return

    setFormData(prev => ({
      ...prev,
      wasteType: location.state.prefilledWasteType
    }))
  }, [location.state])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: null })

    try {
      await sendQuoteEmail(formData)
      setStatus({ loading: false, success: true, error: null })
      setFormData({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        wasteType: '',
        quantity: '',
        frequency: '',
        location: '',
        requirements: ''
      })
      setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000)
    } catch (err) {
      console.error('EmailJS Error:', err)
      setStatus({ loading: false, success: false, error: 'Failed to send quote request. Please try again later.' })
    }
  }

  return (
    <div className="page-container">
      <div className="page-header quote-header">
        <h1>Get a Quote</h1>
        <p>Customized Waste Management Solutions for Your Business</p>
      </div>

      <div className="container">
        <section className="page-content">
          <div className="quote-container">
            <div className="quote-info">
              <h2>Quick Quote Request</h2>
              <p>
                Fill out this form to receive a customized quote based on your specific waste
                management needs. Our team will contact you within 24 hours.
              </p>

              <div className="info-section">
                <h3>Why Choose Our Service?</h3>
                <ul className="service-benefits">
                  <li>Competitive and transparent pricing</li>
                  <li>Customized solutions for your needs</li>
                  <li>Professional and reliable service</li>
                  <li>Compliance and documentation</li>
                  <li>24/7 customer support</li>
                </ul>
              </div>
            </div>

            <form className="quote-form" onSubmit={handleSubmit}>
              <h3>Company Information</h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="companyName">Company Name *</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    placeholder="Your company name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contactPerson">Contact Person *</label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    required
                    placeholder="Contact person name"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+92 999 9999999"
                  />
                </div>
              </div>

              <h3>Waste Details</h3>

              <div className="form-group">
                <label htmlFor="wasteType">Type of Waste *</label>
                <select
                  id="wasteType"
                  name="wasteType"
                  value={formData.wasteType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select waste type</option>
                  <option value="hazardous">Hazardous Waste</option>
                  <option value="non-hazardous">Non-Hazardous Waste</option>
                  <option value="mixed">Mixed Waste</option>
                  <option value="organic">Organic Waste</option>
                  <option value="scrap">Scrap Materials</option>
                  <option value="upcycled-decor">Upcycled Garden Decor</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="quantity">Approximate Quantity (Tons/Month) *</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                    placeholder="e.g., 50"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="frequency">Service Frequency *</label>
                  <select
                    id="frequency"
                    name="frequency"
                    value={formData.frequency}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select frequency</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="biweekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="location">Location/Address *</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="Your facility location"
                />
              </div>

              <div className="form-group">
                <label htmlFor="requirements">Special Requirements</label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Any specific requirements or preferences..."
                ></textarea>
              </div>

              <button type="submit" className="btn-submit" disabled={status.loading}>
                {status.loading ? 'Submitting...' : 'Request Quote'}
              </button>

              {status.success && (
                <div className="success-message">
                  ✓ Thank you! Your quote request has been received. We&apos;ll contact you shortly.
                </div>
              )}

              {status.error && (
                <div className="error-message" style={{ color: '#ef4444', marginTop: '1rem', textAlign: 'center' }}>
                  ✕ {status.error}
                </div>
              )}
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}

export default GetQuotePage
