import '../pages/styles/CommonPages.css'

function CEOPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>CEO&apos;s Message</h1>
        <p>Leadership Perspective on Our Mission and Vision</p>
      </div>

      <div className="container">
        <section className="page-content">
          <div className="ceo-section">
            <div className="ceo-content">
              <h2>Welcome to EcoGreen</h2>
              <p>
                At EcoGreen, we believe that responsible waste management is not just a business
                necessity, but an environmental and social imperative. As your trusted partner in
                sustainable waste solutions, we are committed to transforming the way industries
                approach waste.
              </p>

              <h3>Our Commitment</h3>
              <p>
                Over the years, we have evolved from a simple waste disposal company into a
                comprehensive environmental solutions provider. Our journey has been driven by a
                single vision: to create a cleaner, greener future while helping our clients succeed.
              </p>

              <h3>Innovation & Excellence</h3>
              <p>
                We invest continuously in advanced technologies, infrastructure, and human capital
                to deliver the best waste management solutions. Our state-of-the-art facilities,
                combined with our expert team, ensure that every waste stream is handled with the
                highest standards of safety, compliance, and environmental responsibility.
              </p>

              <h3>Sustainability at Heart</h3>
              <p>
                Sustainability is not a buzzword for us—it&apos;s embedded in everything we do. From
                our operations to our partnerships, we are committed to minimizing environmental
                impact and maximizing resource recovery. We believe that waste is a resource waiting
                to be transformed.
              </p>

              <h3>Future Vision</h3>
              <p>
                As we look toward the future, we see immense opportunities to drive positive change
                through circular economy principles and innovative waste management solutions. We are
                committed to being at the forefront of this transformation.
              </p>

              <p className="closing-message">
                Thank you for choosing EcoGreen as your waste management partner. Together, we&apos;re
                building a sustainable future for generations to come.
              </p>

              <div className="ceo-signature">
                <p><strong>Best Regards,</strong></p>
                <p className="signature-name">EcoGreen Founder & CEO</p>
              </div>
            </div>

            <div className="ceo-stats">
              <div className="stat">
                <div className="stat-number">20+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Clients Served</div>
              </div>
              <div className="stat">
                <div className="stat-number">60+</div>
                <div className="stat-label">Employees</div>
              </div>
              <div className="stat">
                <div className="stat-number">20K+</div>
                <div className="stat-label">Tons Processed Yearly</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CEOPage
