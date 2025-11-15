import { BookOpen } from 'lucide-react'

export default function CoverPage({ goToPage }: { goToPage: (page: number) => void }) {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-book-cover via-book-accent to-book-cover text-white p-12">
      <div className="text-center space-y-8">
        <BookOpen size={80} className="mx-auto opacity-90" strokeWidth={1.5} />
        
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-wide">
            Welcome
          </h1>
          <p className="text-2xl md:text-3xl font-serif italic opacity-90">
            Guest Guide
          </p>
        </div>

        <div className="w-32 h-1 bg-white mx-auto opacity-50" />

        <div className="space-y-2 text-lg opacity-80">
          <p className="font-sans">Your home away from home</p>
          <p className="font-sans text-sm">Everything you need to know</p>
        </div>

        <button
          onClick={() => goToPage(1)}
          className="mt-12 px-8 py-3 bg-white text-book-cover font-sans font-medium rounded-full hover:bg-opacity-90 transition-all shadow-lg"
        >
          Open Guide
        </button>
      </div>

      <div className="absolute bottom-12 text-sm opacity-60 font-sans">
        <p>Created with care for our guests</p>
      </div>
    </div>
  )
}

