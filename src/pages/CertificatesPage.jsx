import '../pages/styles/CommonPages.css'

function CertificatesPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Certificates & Documents</h1>
        <p>Our Credentials and Regulatory Compliance</p>
      </div>

      <div className="container">
        <section className="page-content">
          <div className="content-section">
            <h2>Industry Certifications</h2>
            <div className="certificates-grid">
              <div className="cert-card">
                <span className="material-symbols-outlined cert-icon-google">verified</span>
                <h3>Government License</h3>
                <p>Official Hazardous Waste Handler License</p>
              </div>
              <div className="cert-card">
                <span className="material-symbols-outlined cert-icon-google">local_shipping</span>
                <h3>Transport Permit</h3>
                <p>Valid hazardous waste transport permits</p>
              </div>
              <div className="cert-card">
                <span className="material-symbols-outlined cert-icon-google">factory</span>
                <h3>Facility Approval</h3>
                <p>Environmental approval for all operations</p>
              </div>
              <div className="cert-card">
                <span className="material-symbols-outlined cert-icon-google">eco</span>
                <h3>Environmental Management</h3>
                <p>Standard environmental management practices and compliance</p>
              </div>
              <div className="cert-card">
                <span className="material-symbols-outlined cert-icon-google">health_and_safety</span>
                <h3>Health & Safety</h3>
                <p>Occupational health and safety management protocols</p>
              </div>
              <div className="cert-card">
                <span className="material-symbols-outlined cert-icon-google">description</span>
                <h3>Compliance Document</h3>
                <p>Complete regulatory compliance documentation</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Key Documents</h2>
            <ul className="documents-list">
              <li>
                <div className="doc-item-header">
                  <span className="material-symbols-outlined doc-icon">business</span>
                  <span className="doc-title">Company Profile</span>
                </div>
                <p>Comprehensive overview of our services and capabilities</p>
              </li>
              <li>
                <div className="doc-item-header">
                  <span className="material-symbols-outlined doc-icon">assessment</span>
                  <span className="doc-title">Environmental Impact Assessment</span>
                </div>
                <p>Complete EIA for all operational activities</p>
              </li>
              <li>
                <div className="doc-item-header">
                  <span className="material-symbols-outlined doc-icon">health_and_safety</span>
                  <span className="doc-title">Health & Safety Manual</span>
                </div>
                <p>Comprehensive occupational health and safety procedures</p>
              </li>
              <li>
                <div className="doc-item-header">
                  <span className="material-symbols-outlined doc-icon">restore_from_trash</span>
                  <span className="doc-title">Waste Management Plan</span>
                </div>
                <p>Detailed waste handling and processing protocols</p>
              </li>
              <li>
                <div className="doc-item-header">
                  <span className="material-symbols-outlined doc-icon">emergency</span>
                  <span className="doc-title">Emergency Response Plan</span>
                </div>
                <p>Procedures for emergency situations and incidents</p>
              </li>
              <li>
                <div className="doc-item-header">
                  <span className="material-symbols-outlined doc-icon">verified_user</span>
                  <span className="doc-title">Annual Compliance Report</span>
                </div>
                <p>Year-round regulatory compliance documentation</p>
              </li>
            </ul>
          </div>

          <div className="content-section info-box">
            <h3>📧 Documentation Requests</h3>
            <p>All certifications and documents are available for review. Contact us to request specific documentation or arrange facility verification visits.</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CertificatesPage
