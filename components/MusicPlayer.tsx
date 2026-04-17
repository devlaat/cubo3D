'use client'

export default function MusicPlayer() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4 flex items-center justify-between shadow-2xl border-t border-pink-500">
      <div className="flex items-center space-x-4">
        <img src="/cover/cover.jpg" alt="Song Cover" className="w-12 h-12 rounded-full shadow-lg" />
        <div>
          <p className="font-bold">🎵 Nuestra Canción</p>
          <p className="text-sm text-gray-400">💕 Para ti</p>
        </div>
      </div>
      <div className="flex space-x-4">
        <button className="px-3 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg transition-all transform hover:scale-105">⏮️ Anterior</button>
        <button className="px-3 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg transition-all transform hover:scale-105">▶️ Reproducir</button>
        <button className="px-3 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg transition-all transform hover:scale-105">⏭️ Siguiente</button>
      </div>
    </div>
  )
}