'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Home } from 'lucide-react'
import CoverPage from './pages/CoverPage'
import TableOfContents from './pages/TableOfContents'
import AboutUnit from './pages/AboutUnit'
import HouseGuide from './pages/HouseGuide'
import LocalEats from './pages/LocalEats'
import EmergencyInfo from './pages/EmergencyInfo'

const pages = [
  { id: 0, component: CoverPage, title: 'Cover' },
  { id: 1, component: TableOfContents, title: 'Contents' },
  { id: 2, component: AboutUnit, title: 'About the Unit' },
  { id: 3, component: HouseGuide, title: 'House Guide' },
  { id: 4, component: LocalEats, title: 'Where to Eat' },
  { id: 5, component: EmergencyInfo, title: 'Emergency Info' },
]

export default function Book() {
  const [currentPage, setCurrentPage] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setDirection(1)
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1)
      setCurrentPage(currentPage - 1)
    }
  }

  const goToPage = (pageNum: number) => {
    setDirection(pageNum > currentPage ? 1 : -1)
    setCurrentPage(pageNum)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextPage()
      if (e.key === 'ArrowLeft') prevPage()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentPage])

  const CurrentPageComponent = pages[currentPage].component

  const pageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      rotateY: direction > 0 ? -45 : 45,
    }),
  }

  return (
    <div className="relative">
      {/* Book Container */}
      <div className="relative bg-book-cover rounded-lg shadow-book overflow-hidden"
           style={{ 
             width: 'min(90vw, 900px)', 
             height: 'min(85vh, 700px)',
             perspective: '2000px'
           }}>
        
        {/* Book Pages */}
        <div className="relative w-full h-full bg-book-page">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                rotateY: { duration: 0.4 }
              }}
              className="absolute inset-0 w-full h-full"
            >
              <div className="w-full h-full overflow-y-auto page-texture">
                <CurrentPageComponent goToPage={goToPage} />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left spine shadow overlay */}
          {currentPage > 0 && (
            <div className="absolute left-0 top-0 bottom-0 w-8 book-spine-shadow pointer-events-none" />
          )}
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-6 left-0 right-0 flex items-center justify-between px-8">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="p-3 rounded-full bg-book-accent text-white shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-opacity-90 transition-all"
            aria-label="Previous page"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex items-center gap-4">
            {currentPage > 0 && (
              <button
                onClick={() => goToPage(0)}
                className="p-2 rounded-full bg-book-accent text-white shadow-lg hover:bg-opacity-90 transition-all"
                aria-label="Go to cover"
              >
                <Home size={20} />
              </button>
            )}
            <span className="text-book-accent font-sans text-sm font-medium bg-white px-4 py-2 rounded-full shadow">
              {currentPage + 1} / {pages.length}
            </span>
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            className="p-3 rounded-full bg-book-accent text-white shadow-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-opacity-90 transition-all"
            aria-label="Next page"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-6 text-center text-book-accent text-sm font-sans">
        <p>Use arrow keys or buttons to navigate • Click home icon to return to cover</p>
      </div>
    </div>
  )
}

