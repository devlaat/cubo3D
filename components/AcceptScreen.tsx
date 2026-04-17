'use client'

import { useEffect, useState } from 'react'

export default function AcceptScreen({ onNext }: { onNext: () => void }) {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisibleCount((current) => {
        if (current >= 3) {
          window.clearInterval(interval)
          return current
        }

        return current + 1
      })
    }, 450)

    return () => window.clearInterval(interval)
  }, [])

  const moments = [
    'Celebrar cada si como si fuera un pequeno milagro.',
    'Convertir los dias normales en recuerdos favoritos.',
    'Guardar este instante como el primer capitulo.',
  ]

  return (
    <div className="glass-panel w-full max-w-4xl rounded-[1.75rem] p-4 text-center shadow-[0_30px_100px_rgba(157,23,77,0.2)] sm:rounded-[2.25rem] sm:p-10">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/80 text-3xl shadow-lg shadow-rose-200/50 sm:h-20 sm:w-20 sm:text-4xl">
          💖
        </div>

        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-rose-500">Respuesta confirmada</p>
          <h2 className="text-balance text-[2rem] font-semibold leading-tight sm:text-5xl">
            Sabia que este si iba a iluminarlo todo.
          </h2>
          <p className="text-pretty text-base leading-7 text-slate-700 sm:text-xl sm:leading-8">
            Entonces dejame mostrarte el pequeno regalo que prepare para este momento. Tiene promesas,
            recuerdos imaginados y una cancion para acompanar el inicio de algo bonito.
          </p>
        </div>

        <div className="grid gap-4 text-left md:grid-cols-3">
          {moments.map((moment, index) => (
            <div
              key={moment}
              className={`rounded-[1.75rem] border border-white/70 bg-white/65 p-5 shadow-sm transition duration-500 ${
                index < visibleCount ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-lg">
                {index === 0 ? '🌷' : index === 1 ? '🌙' : '💌'}
              </span>
              <p className="leading-7 text-slate-700">{moment}</p>
            </div>
          ))}
        </div>

        <button
          type="button"
          onPointerUp={onNext}
          className="relative z-30 w-full touch-manipulation rounded-full bg-[linear-gradient(135deg,#be185d,#ec4899,#fb7185)] px-6 py-4 text-base font-semibold text-white shadow-[0_18px_50px_rgba(190,24,93,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(190,24,93,0.42)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-300/60 sm:w-auto sm:px-8 sm:text-lg"
        >
          Abrir mi regalo para ti
        </button>
      </div>
    </div>
  )
}
