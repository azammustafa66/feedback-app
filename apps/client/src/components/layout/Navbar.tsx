import React from 'react'
import suggestionSVG from '/suggestions.svg'

export default function Navbar() {
  return (
    <nav className='flex h-16 w-full items-center justify-between bg-slate-700 px-6 md:mx-auto md:h-20 md:rounded-lg md:px-8 lg:w-full lg:px-12'>
      {/* Sort by section visible on mobile */}
      <div className='flex items-center space-x-2 md:hidden'>
        <div className='text-sm font-normal text-violet-50'>
          <span>Sort by: </span>
          <span className='font-bold'>Most Upvotes</span>
        </div>
      </div>

      {/* Suggestions section hidden on mobile */}
      <div className='hidden items-center space-x-4 md:flex'>
        <img src={suggestionSVG} alt='Suggestion' className='h-8 w-8 md:h-10 md:w-10' />
        <p className='text-lg font-bold text-white'>0 Suggestions</p>
      </div>

      {/* Add Feedback button */}
      <button className='h-11 w-40 rounded-md bg-fuchsia-600 text-sm font-bold text-white hover:bg-fuchsia-500 md:inline-block'>
        + Add Feedback
      </button>
    </nav>
  )
}
