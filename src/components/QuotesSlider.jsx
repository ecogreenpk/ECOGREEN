import { useState, useEffect, useRef, useCallback } from 'react'
import '../styles/QuotesSlider.css'

const QUOTES = [
  { text: "Cleanliness is half of faith.", source: "Prophet Muhammad (Hadith)" },
  {
    text: "And He has subjected to you whatever is in the heavens and whatever is on the earth; all is from Him.",
    source: "Quran 45:13 — On Creation and Stewardship"
  },
  {
    text: "The best of you are those who are best to their families, and I am the best among you to my family.",
    source: "Prophet Muhammad (Hadith) — On Community Responsibility"
  },
  {
    text: "Indeed, in the creation of the heavens and the earth, and the alternation of the night and the day, there are signs for those of understanding.",
    source: "Quran 3:190 — On Environmental Awareness"
  },
  {
    text: "Whoever commits to business with honesty and fair dealing will be resurrected with the prophets on the Day of Judgment.",
    source: "Prophet Muhammad (Hadith) — On Business Ethics"
  },
  {
    text: "Truly! The best of you are those who are the best to their families.",
    source: "Prophet Muhammad (Hadith) — On Responsibility"
  },
  {
    text: "And the sky, how it is raised high and the earth, how it is spread out and the mountains, how they are fixed firmly.",
    source: "Quran 88:17-20 — On Environmental Creation"
  }
]

function QuotesSlider() {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [direction, setDirection] = useState('next')
  const [animKey, setAnimKey] = useState(0)
  const intervalRef = useRef(null)

  const advance = useCallback((dir) => {
    setDirection(dir)
    setAnimKey(k => k + 1)
    setCurrentQuote(prev =>
      dir === 'next'
        ? (prev + 1) % QUOTES.length
        : (prev - 1 + QUOTES.length) % QUOTES.length
    )
  }, [])

  useEffect(() => {
    if (!isAutoPlay) return
    intervalRef.current = setInterval(() => advance('next'), 6000)
    return () => clearInterval(intervalRef.current)
  }, [isAutoPlay, advance])

  const handlePrev = () => { advance('prev'); setIsAutoPlay(false) }
  const handleNext = () => { advance('next'); setIsAutoPlay(false) }
  const handleDot = (i) => {
    setDirection(i > currentQuote ? 'next' : 'prev')
    setAnimKey(k => k + 1)
    setCurrentQuote(i)
    setIsAutoPlay(false)
  }

  return (
    <section className="quotes-slider">
      <img src="/images/leaf.svg" alt="" className="leaf-decor" aria-hidden="true" />

      <div className="slider-content">
        <div className="quotes-header">
          <span className="quotes-label">Words of Wisdom</span>
        </div>

        <div className="quote-carousel">
          <button
            className="carousel-btn prev-btn"
            onClick={handlePrev}
            aria-label="Previous quote"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="quote-display">
            <div
              key={animKey}
              className={`quote-inner quote-anim-${direction}`}
            >
              <p className="quote-text">&quot;{QUOTES[currentQuote].text}&quot;</p>
              <p className="quote-source">— {QUOTES[currentQuote].source}</p>
            </div>
          </div>

          <button
            className="carousel-btn next-btn"
            onClick={handleNext}
            aria-label="Next quote"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="carousel-dots">
          {QUOTES.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentQuote ? 'active' : ''}`}
              onClick={() => handleDot(index)}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>

        <button
          className="autoplay-btn"
          onClick={() => setIsAutoPlay(a => !a)}
          aria-label={isAutoPlay ? 'Pause autoplay' : 'Resume autoplay'}
        >
          {isAutoPlay ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" /></svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21" /></svg>
          )}
          {isAutoPlay ? 'Pause' : 'Play'}
        </button>
      </div>
    </section>
  )
}

export default QuotesSlider
