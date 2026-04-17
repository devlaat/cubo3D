'use client'

import { useEffect, useState, useRef } from 'react'

export default function IntroScreen({ onYes, onNo }: { onYes: () => void; onNo: () => void }) {
  const [audioReady, setAudioReady] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)

  const handleAudio = async () => {
    try {
      await audioRef.current?.play()
      setAudioReady(true)
    } catch (err) {
      console.log('Audio autoplay failed, waiting for user interaction')
    }
  }

  useEffect(() => {
    handleAudio()
  }, [])

  return (
    <div className="text-center">
      <audio ref={audioRef} src="/music/risa.mp3" />
      <h1 className="text-5xl font-bold mb-8 animate-bounce">💕 ¿Quieres ser mi novia? 💕</h1>
      <p className="text-2xl mb-10">😊 Espero que digas que sí... 😉</p>
      <div className="flex gap-6 justify-center">
        <button
          onClick={onYes}
          className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 hover:from-pink-600 hover:to-rose-600"
        >
          ✨ Sí &lt;3
        </button>
        <button
          onClick={onNo}
          className="px-8 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:scale-95 transform transition-all duration-300"
        >
          😢 No
        </button>
      </div>
    </div>
  )
}