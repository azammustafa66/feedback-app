import React from 'react'
import Sidebar from '../layout/Sidebar'
import Navbar from '../layout/Navbar'

export default function Home() {
  return (
    <main className='flex flex-col items-start justify-center md:p-14 md:gap-y-3 lg:flex-row'>
      <Sidebar />
      <Navbar />
    </main>
  )
}
