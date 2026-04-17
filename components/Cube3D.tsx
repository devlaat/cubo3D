'use client'

export default function Cube3D() {
  return (
    <div className="flex items-center justify-center mt-8">
      <div className="cube-wrapper">
        <div className="cube-container">
          <div className="face front bg-blue-500">💙</div>
          <div className="face back bg-red-500">❤️</div>
          <div className="face left bg-green-500">💚</div>
          <div className="face right bg-yellow-500">💛</div>
          <div className="face top bg-pink-500">💖</div>
          <div className="face bottom bg-purple-500">💜</div>
        </div>
      </div>
    </div>
  )
}