import React from 'react'
import PropertyCard from './PropertyCard'

const Feed = () => {
  return (
    <div className='mt-16'>
      <h1 className="text-2xl text-center font-semibold mb-12">Discover your Perfect Home</h1>
      <section className='flex flex-col items-center justify-center mt-16 w-full bg-gray-50 py-10'>
          <PropertyCard />
      </section>

    </div>
  )
}

export default Feed