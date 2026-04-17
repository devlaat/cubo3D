'use client'

export default function AcceptScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-4 animate-pulse">🎉 ¡Sabía que dirías que sí! 💖</h1>
      <p className="text-2xl mb-8">😍 Eres lo mejor que me ha pasado 😍</p>
      <button
        onClick={onNext}
        className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 hover:from-green-600 hover:to-emerald-600"
      >
        🎁 Abre el regalo ✨
      </button>
    </div>
  )
}