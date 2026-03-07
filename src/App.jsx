import { useEffect, lazy, Suspense } from 'react'
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PageTransition from './components/PageTransition'
// import Header from './components/Header'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import WhatsAppButton from './components/WhatsAppButton'

// Lazy loaded Pages for better performance/scalability
const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const MissionVisionPage = lazy(() => import('./pages/MissionVisionPage'))
const HazardousWastePage = lazy(() => import('./pages/HazardousWastePage'))
const NonHazardousWastePage = lazy(() => import('./pages/NonHazardousWastePage'))
const FacilitiesPage = lazy(() => import('./pages/FacilitiesPage'))
const CertificatesPage = lazy(() => import('./pages/CertificatesPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const CEOPage = lazy(() => import('./pages/CEOPage'))
const FeedbackPage = lazy(() => import('./pages/FeedbackPage'))
const GetQuotePage = lazy(() => import('./pages/GetQuotePage'))
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'))
const UpcycledDecor = lazy(() => import('./pages/UpcycledDecor'))

import './App.css'

function AppContent() {
  const location = useLocation()

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'))
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    )

    const attachObservers = () => {
      const elements = document.querySelectorAll('.reveal:not(.in-view):not([data-observed])')
      elements.forEach(el => {
        el.setAttribute('data-observed', 'true')
        observer.observe(el)
      })
    }

    attachObservers()

    const mutationObserver = new MutationObserver((mutations) => {
      let shouldCheck = false
      for (let m of mutations) {
        if (m.addedNodes.length > 0) {
          shouldCheck = true
          break
        }
      }
      if (shouldCheck) attachObservers()
    })

    const appContainer = document.querySelector('.app')
    if (appContainer) {
      mutationObserver.observe(appContainer, { childList: true, subtree: true })
    }

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  return (
    <div className="app">
      <div className="background-logo" aria-hidden="true">
        <img src="/images/logonew.png" alt="" className="background-logo-image" />
      </div>
      <Header />
      <Suspense fallback={<div className="loading-fallback"><div className="loader"></div></div>}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
            <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
            <Route path="/mission-vision" element={<PageTransition><MissionVisionPage /></PageTransition>} />
            <Route path="/hazardous-waste" element={<PageTransition><HazardousWastePage /></PageTransition>} />
            <Route path="/non-hazardous-waste" element={<PageTransition><NonHazardousWastePage /></PageTransition>} />
            <Route path="/facilities" element={<PageTransition><FacilitiesPage /></PageTransition>} />
            <Route path="/certificates" element={<PageTransition><CertificatesPage /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><BlogPage /></PageTransition>} />
            <Route path="/ceo" element={<PageTransition><CEOPage /></PageTransition>} />
            <Route path="/feedback" element={<PageTransition><FeedbackPage /></PageTransition>} />
            <Route path="/get-quote" element={<PageTransition><GetQuotePage /></PageTransition>} />
            <Route path="/admin" element={<PageTransition><AdminDashboard /></PageTransition>} />
            <Route path="/upcycled-decor" element={<PageTransition><UpcycledDecor /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
      <Chatbot />
      <WhatsAppButton />
    </div>
  )
}

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AppContent />
    </Router>
  )
}

export default App
