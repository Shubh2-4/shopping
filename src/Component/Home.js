import React from 'react'
import Slider from './Slider/Slider'
import Cardgallery from './Cards/Cardgallery'
import Features from './Features/Features'

export default function Home() {
  return (
    <div>
      <Slider />
      <Features />
      <Cardgallery />
    </div>
  )
}
