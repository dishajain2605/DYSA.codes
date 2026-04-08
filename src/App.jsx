import { useState, useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import CustomCursor from './components/CustomCursor'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: false,
      touchMultiplier: 2,
    })

    let rafId;

    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <CustomCursor />
      {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && (
        <div style={{ background: 'var(--bg-primary)' }}>
          <Navbar />
          <main>
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
