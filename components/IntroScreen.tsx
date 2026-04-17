'use client'

import { useState } from 'react'

const buttonOffsets = [
  '',
  'sm:translate-x-10 sm:-translate-y-2',
  'sm:-translate-x-8 sm:translate-y-3',
  'sm:translate-x-12 sm:translate-y-6',
  'sm:-translate-x-12 sm:-translate-y-4',
]

const playfulMessages = [
  'Prometo hacer esta historia muy bonita.',
  'Ese boton se puso nervioso.',
  'Creo que el universo ya eligio su respuesta.',
  'Miralo bien... quiere que digas que si.',
  'Te juro que vale la pena intentarlo juntos.',
]

const noLabels = ['No', 'Segura?', 'Piensalo', 'Ay no', 'Mejor si']

export default function IntroScreen({ onYes }: { onYes: () => void }) {
  const [teaseLevel, setTeaseLevel] = useState(0)

  const advanceNoButton = () => {
    setTeaseLevel((current) => (current + 1) % buttonOffsets.length)
  }

  return (
    <div className="glass-panel w-full max-w-5xl overflow-hidden rounded-[1.75rem] p-4 shadow-[0_30px_100px_rgba(126,34,79,0.25)] sm:rounded-[2rem] sm:p-8 lg:p-10">
      <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 text-center lg:text-left">
          <p className="inline-flex rounded-full border border-white/60 bg-white/65 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-rose-500 shadow-sm sm:px-4 sm:text-sm">
            Para alguien muy especial
          </p>

          <div className="space-y-4">
            <h1 className="text-balance text-[2rem] font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Quiero vivir una historia bonita contigo.
            </h1>
            <p className="mx-auto max-w-2xl text-pretty text-base leading-7 text-slate-700 sm:text-xl sm:leading-8 lg:mx-0">
              No prepare una pagina cualquiera. Prepare un pequeno rincon para decirte que me encantas,
              que me haces ilusion y que me gustaria preguntarte algo importante.
            </p>
          </div>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:justify-start">
            <button
              type="button"
              onPointerUp={onYes}
              className="relative z-30 w-full touch-manipulation rounded-full bg-[linear-gradient(135deg,#e11d48,#fb7185,#f59e0b)] px-6 py-4 text-base font-semibold text-white shadow-[0_18px_45px_rgba(225,29,72,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(225,29,72,0.42)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-300/60 sm:w-auto sm:px-8 sm:text-lg"
            >
              Si, quiero descubrirlo contigo
            </button>

            <button
              type="button"
              onMouseEnter={advanceNoButton}
              onClick={advanceNoButton}
              className={`relative z-30 w-full touch-manipulation rounded-full border border-rose-200 bg-white/80 px-6 py-4 text-sm font-medium text-rose-500 shadow-sm transition duration-300 hover:border-rose-300 hover:bg-white sm:w-auto sm:px-7 sm:text-base ${buttonOffsets[teaseLevel]} focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rose-200`}
            >
              {noLabels[teaseLevel]}
            </button>
          </div>

          <p className="min-h-7 text-xs font-medium uppercase tracking-[0.14em] text-rose-500 sm:text-sm sm:tracking-[0.16em]">
            {playfulMessages[teaseLevel]}
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-rose-300/25 blur-3xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/55 p-4 shadow-[0_20px_70px_rgba(190,24,93,0.12)] backdrop-blur sm:rounded-[2rem] sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-3 text-xs text-slate-500 sm:mb-6 sm:text-sm">
              <span>Estado de mi corazon</span>
              <span className="font-semibold text-rose-500">100% sincero</span>
            </div>

            <div className="space-y-4">
              {[
                ['Ilusion', 'Muy alta'],
                ['Ganas de cuidarte', 'Infinitas'],
                ['Nervios lindos', 'Muchisimos'],
              ].map(([title, value], index) => (
                <div key={title} className="rounded-3xl bg-white/70 p-4 shadow-sm">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="text-sm font-medium text-slate-700 sm:text-base">{title}</span>
                    <span className="text-xs text-slate-500 sm:text-sm">{value}</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-rose-100">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,#fb7185,#f97316,#f59e0b)]"
                      style={{ width: `${78 + index * 8}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(255,241,242,0.8))] p-4 sm:rounded-[1.75rem] sm:p-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-rose-400 sm:text-sm sm:tracking-[0.22em]">La gran pregunta</p>
              <p className="mt-3 text-xl font-semibold leading-snug text-slate-900 sm:text-2xl">
                Te gustaria ser mi novia y escribir algo bonito conmigo?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
