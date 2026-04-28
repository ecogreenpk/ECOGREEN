import { useState } from 'react'
import '../pages/styles/CommonPages.css'
import { supabase } from '../services/supabaseClient'

function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'feedback',
    message: ''
  })

  const [status, setStatus] = useState({ loading: false, success: false, error: null })

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
      const { error } = await supabase
        .from('feedbacks')
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          category: formData.category,
          message: formData.message,
          created_at: new Date().toISOString()
        }])

      if (error) throw error

      setStatus({ loading: false, success: true, error: null })
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: 'feedback',
        message: ''
      })
      setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000)
    } catch (err) {
      console.error('Supabase Error:', err)
      setStatus({ loading: false, success: false, error: 'Failed to submit feedback. Please try again later.' })
    }
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Feedback Form</h1>
        <p>We value your feedback and suggestions</p>
      </div>

      <div className="container">
        <section className="page-content">
          <div className="feedback-container">
            <div className="feedback-info">
              <h2>Your Feedback Matters</h2>
              <p>
                We&apos;re committed to continuous improvement. Your feedback helps us understand your
                needs better and serve you more effectively.
              </p>

              <div className="feedback-channels">
                <h3>Other Ways to Reach Us</h3>
                <div className="channel-item">
                  <span className="channel-icon">📧</span>
                  <div>
                    <strong>Email</strong>
                    <p><a href="mailto:connect.ecogreen@gmail.com" className="contact-email">connect.ecogreen@gmail.com</a></p>
                  </div>
                </div>
                <div className="channel-item">
                  <span className="channel-icon">📞</span>
                  <div>
                    <strong>Phone</strong>
                    <p><a href="tel:+923432300185" className="contact-phone">+92 343 2300185</a></p>
                  </div>
                </div>
                <div className="channel-item">
                  <span className="channel-icon">📍</span>
                  <div>
                    <strong>Location</strong>
                    <p>EcoGreen Headquarters</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="feedback-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
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
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 9999 999999"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="category">Category *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="feedback">General Feedback</option>
                  <option value="complaint">Complaint</option>
                  <option value="suggestion">Suggestion</option>
                  <option value="inquiry">Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="7"
                  placeholder="Please share your feedback, suggestions, or concerns..."
                ></textarea>
              </div>

              <button type="submit" className="btn-submit" disabled={status.loading}>
                {status.loading ? 'Submitting...' : 'Submit Feedback'}
              </button>

              {status.success && (
                <div className="success-message">
                  ✓ Thank you! Your feedback has been sent to our team.
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

export default FeedbackPage
