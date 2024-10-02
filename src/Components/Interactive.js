import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { LuDownload, LuGamepad2, LuFileCode, LuZap } from "react-icons/lu";

export function InteractiveLandingPage() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setScrollProgress(latest)
    })
  }, [scrollYProgress])

  return (
    <div className="min-h-screen text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#6aa84f] origin-[0%]"
        style={{ scaleX }}
      />
      <header className="fixed top-0 left-0 right-0 bg-opacity-90 z-50">
        <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-[#6aa84f]">Interactive</a>
          <div className="flex items-center space-x-6">
            <a href="#installation" className="hover:text-[#6aa84f] transition-colors">Installation</a>
            <a href="#new-version" className="hover:text-[#6aa84f] transition-colors">New Version</a>
            <a href="#mini-games" className="hover:text-[#6aa84f] transition-colors">Mini-Juegos</a>
            <button className="bg-[#6aa84f] text-white px-4 py-2 rounded-md hover:bg-[#55923b] transition-colors flex items-center">
              <LuDownload className="mr-2" size={18} />
              Descargar App
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <section className="min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Welcome to Interactive</h1>
            <p className="text-xl mb-8">Experience the future of interactive applications</p>
            <button className="bg-[#6aa84f] text-white px-6 py-3 rounded-md text-lg hover:bg-[#55923b] transition-colors flex items-center justify-center mx-auto">
              <LuDownload className="mr-2" size={24} />
              Get Started
            </button>
          </motion.div>
        </section>

        <motion.section
          id="installation"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollProgress > 0.1 ? 1 : 0 }}
          className="min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <LuFileCode size={64} className="mx-auto mb-6 text-[#6aa84f]" />
            <h2 className="text-3xl font-bold mb-4">Easy Installation</h2>
            <p className="text-xl">Get up and running in minutes with our simple setup process</p>
          </div>
        </motion.section>

        <motion.section
          id="new-version"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollProgress > 0.4 ? 1 : 0 }}
          className="min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <LuZap size={64} className="mx-auto mb-6 text-[#6aa84f]" />
            <h2 className="text-3xl font-bold mb-4">New Version Available</h2>
            <p className="text-xl">Discover the latest features and improvements</p>
          </div>
        </motion.section>

        <motion.section
          id="mini-games"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollProgress > 0.7 ? 1 : 0 }}
          className="min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <LuGamepad2 size={64} className="mx-auto mb-6 text-[#6aa84f]" />
            <h2 className="text-3xl font-bold mb-4">Exciting Mini Games</h2>
            <p className="text-xl">Take a break and enjoy our collection of fun mini games</p>
          </div>
        </motion.section>
      </main>

      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Interactive. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
