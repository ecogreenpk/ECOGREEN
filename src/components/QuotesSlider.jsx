import { useState, useEffect } from 'react'
import '../styles/QuotesSlider.css'

function QuotesSlider() {
  const quotes = [
    {
      text: "Cleanliness is half of faith.",
      source: "Prophet Muhammad (Hadith)"
    },
    {
      text: "And He has subjected to you whatever is in the heavens and whatever is on the earth; all is from Him.",
      source: "Quran 45:13 - On Creation and Stewardship"
    },
    {
      text: "The best of you are those who are best to their families, and I am the best among you to my family.",
      source: "Prophet Muhammad (Hadith) - On Community Responsibility"
    },
    {
      text: "Indeed, in the creation of the heavens and the earth, and the alternation of the night and the day, there are signs for those of understanding.",
      source: "Quran 3:190 - On Environmental Awareness"
    },
    {
      text: "Whoever commits to business with honesty and fair dealing will be resurrected with the prophets on the Day of Judgment.",
      source: "Prophet Muhammad (Hadith) - On Business Ethics"
    },
    {
      text: "Truly! The best of you (in religion) are those who are best to their wives, and the best of you are those who are the best to their families.",
      source: "Prophet Muhammad (Hadith) - On Responsibility"
    },
    {
      text: "And the sky, how it is raised high and the earth, how it is spread out and the mountains, how they are fixed firmly.",
      source: "Quran 88:17-20 - On Environmental Creation"
    }
  ]

  const [currentQuote, setCurrentQuote] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlay, quotes.length])

  const handlePrev = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length)
    setIsAutoPlay(false)
  }

  const handleNext = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length)
    setIsAutoPlay(false)
  }

  const handleDotClick = (index) => {
    setCurrentQuote(index)
    setIsAutoPlay(false)
  }

  return (
    <section className="quotes-slider">
      <img src="/images/leaf.svg" alt="leaf decor" className="leaf-decor" />
      <div className="slider-content">
        <div className="quote-carousel">
          <button 
            className="carousel-btn prev-btn"
            onClick={handlePrev}
            aria-label="Previous quote"
          >
            ‹
          </button>

          <div className="quote-display">
            <p className="quote-text">{quotes[currentQuote].text}</p>
            <p className="quote-source">{quotes[currentQuote].source}</p>
          </div>

          <button 
            className="carousel-btn next-btn"
            onClick={handleNext}
            aria-label="Next quote"
          >
            ›
          </button>
        </div>

        <div className="carousel-dots">
          {quotes.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentQuote ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>

        <button
          className="autoplay-btn"
          onClick={() => setIsAutoPlay(!isAutoPlay)}
        >
          {isAutoPlay ? 'Pause' : 'Play'}
        </button>
      </div>
    </section>
  )
}

export default QuotesSlider
