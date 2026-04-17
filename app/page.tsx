'use client'

import { useState } from 'react'
import IntroScreen from '../components/IntroScreen'
import AcceptScreen from '../components/AcceptScreen'
import Cube3D from '../components/Cube3D'
import MusicPlayer from '../components/MusicPlayer'

export default function Page() {
  const [stage, setStage] = useState<'intro' | 'accepted' | 'gift'>('intro')

  const handleYes = () => {
    setStage('accepted')
  }

  const handleNo = () => {
    // Handle the "No" action and implement the shrinking button logic
    // Could use setState for tracking button size, position, etc.
  }

  const handleNext = () => {
    setStage('gift')
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      {stage === 'intro' && <IntroScreen onYes={handleYes} onNo={handleNo} />}
      {stage === 'accepted' && <AcceptScreen onNext={handleNext} />}
      {stage === 'gift' && (
        <div className="relative">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">✨ Tu Regalo Especial ✨</h2>
          </div>
          <Cube3D />
          <MusicPlayer />
        </div>
      )}
    </div>
  )
}