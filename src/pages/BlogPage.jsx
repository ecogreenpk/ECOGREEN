import { useState } from 'react'
import '../pages/styles/CommonPages.css'

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Future of Waste Management",
    date: "February 20, 2026",
    category: "Sustainability",
    icon: "eco",
    excerpt: "Exploring innovative technologies shaping the future of waste management...",
    details: "Smart sorting, AI-driven analytics, and automation are reshaping how industries manage waste streams. Modern facilities reduce landfill dependency while increasing recovery rates.",
    highlights: ["AI-enabled sorting accuracy", "Closed-loop recycling systems", "Lower carbon footprint"]
  },
  {
    id: 2,
    title: "Circular Economy: Creating Value from Waste",
    date: "February 15, 2026",
    category: "Environment",
    icon: "public",
    excerpt: "How circular economy principles transform waste into valuable resources...",
    details: "Circular models keep materials in use longer through reuse, remanufacturing, and advanced recycling. Businesses cut costs while improving sustainability performance.",
    highlights: ["Material recovery optimization", "Reusable packaging models", "Resource efficiency gains"]
  },
  {
    id: 3,
    title: "Hazardous Waste: Safety First",
    date: "February 10, 2026",
    category: "Safety",
    icon: "health_and_safety",
    excerpt: "Best practices for safe hazardous waste handling and disposal...",
    details: "Strict handling protocols, secure transportation, and certified treatment facilities are essential to protect people and the environment from hazardous exposure.",
    highlights: ["Licensed transport and disposal", "Compliance documentation", "Risk mitigation plans"]
  },
  {
    id: 4,
    title: "Corporate Sustainability Goals",
    date: "February 5, 2026",
    category: "Corporate",
    icon: "business",
    excerpt: "How businesses can achieve their sustainability and waste reduction targets...",
    details: "Measurable KPIs, transparent reporting, and sustainable vendor partnerships help organizations meet ESG goals and drive long-term value.",
    highlights: ["ESG-aligned reporting", "Waste reduction KPIs", "Supplier sustainability audits"]
  },
  {
    id: 5,
    title: "Recycling Innovation in 2026",
    date: "January 30, 2026",
    category: "Technology",
    icon: "precision_manufacturing",
    excerpt: "Latest innovations in recycling technology and waste processing...",
    details: "Advanced shredding, optical sorting, and chemical recycling are boosting recovery rates and expanding the range of recyclable materials.",
    highlights: ["Optical sorting advances", "Chemical recycling", "Higher recovery yields"]
  },
  {
    id: 6,
    title: "Our Environmental Impact",
    date: "January 25, 2026",
    category: "Impact",
    icon: "bar_chart",
    excerpt: "Annual report on EcoGreen's environmental impact and achievements...",
    details: "Our impact reporting covers waste diversion, emissions reduction, and resource recovery totals, helping partners track sustainability outcomes.",
    highlights: ["Landfill diversion metrics", "Emission savings", "Resource recovery totals"]
  }
]

function BlogPage() {
  const [expandedId, setExpandedId] = useState(null)
  const toggleExpanded = (id) => setExpandedId(prev => (prev === id ? null : id))

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>EcoGreen Blog</h1>
        <p>Latest Updates, Insights, and News from Our Company</p>
      </div>

      <div className="container">
        <section className="page-content">
          <div className="blog-grid">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-image">
                  <span className="material-symbols-outlined blog-icon">{post.icon}</span>
                </div>
                <div className="blog-category">{post.category}</div>
                <h3>{post.title}</h3>
                <div className="blog-meta">{post.date}</div>
                <p>{post.excerpt}</p>
                {expandedId === post.id && (
                  <div className="blog-details">
                    <p>{post.details}</p>
                    <ul className="blog-details-list">
                      {post.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <button className="btn-read-more" onClick={() => toggleExpanded(post.id)}>
                  {expandedId === post.id ? "Show Less ←" : "Read More →"}
                </button>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default BlogPage
