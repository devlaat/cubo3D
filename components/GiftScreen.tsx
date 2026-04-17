'use client'

import { useState } from 'react'
import Cube3D from '@/components/Cube3D'
import MusicPlayer from '@/components/MusicPlayer'

type Memory = {
  title: string
  description: string
  accent: string
  emoji: string
}

export default function GiftScreen({
  autoplayBlocked,
  currentTime,
  duration,
  isPlaying,
  memories,
  onSeek,
  onTogglePlayback,
  promises,
}: {
  autoplayBlocked: boolean
  currentTime: number
  duration: number
  isPlaying: boolean
  memories: Memory[]
  onSeek: (nextTime: number) => void
  onTogglePlayback: () => Promise<void>
  promises: string[]
}) {
  const [selectedMemory, setSelectedMemory] = useState(0)
  const [openLetter, setOpenLetter] = useState(false)

  return (
    <div className="w-full max-w-6xl space-y-4 sm:space-y-6">
      <div className="glass-panel rounded-[1.8rem] p-4 shadow-[0_30px_120px_rgba(126,34,79,0.22)] sm:rounded-[2.25rem] sm:p-8 lg:p-10">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-rose-500 sm:text-sm sm:tracking-[0.26em]">Tu regalo especial</p>
            <h2 className="text-balance text-[2rem] font-semibold leading-tight sm:text-5xl">
              Si este comienzo tiene forma, para mi se parece a esto.
            </h2>
            <p className="max-w-2xl text-pretty text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              Un lugar donde podamos hablar bonito, reirnos fuerte, abrazarnos mucho y construir algo
              sincero. Nada perfecto, pero si muy nuestro.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {promises.map((promise) => (
                <div
                  key={promise}
                  className="rounded-[1.5rem] border border-white/70 bg-white/70 px-4 py-4 text-sm leading-6 text-slate-700 shadow-sm sm:leading-7"
                >
                  <span className="mr-2 text-rose-400">❤</span>
                  {promise}
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-[linear-gradient(145deg,rgba(255,255,255,0.8),rgba(255,241,242,0.68))] p-4 shadow-[0_16px_70px_rgba(244,114,182,0.18)] sm:rounded-[2rem] sm:p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.65),_transparent_50%)]" />
            <div className="relative">
              <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[11px] uppercase tracking-[0.2em] text-rose-400 sm:text-sm sm:tracking-[0.26em]">Un simbolo</p>
                <span className="w-fit rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-500">
                  Tus imagenes en cada cara
                </span>
              </div>
              <Cube3D />
              <p className="text-center text-sm leading-7 text-slate-600">
                Cada giro ahora muestra una de tus fotos de la carpeta `public/img`.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="glass-panel rounded-[1.75rem] p-4 sm:rounded-[2.1rem] sm:p-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-rose-500 sm:text-sm sm:tracking-[0.24em]">Carta abierta</p>
              <h3 className="mt-2 text-[1.7rem] font-semibold sm:text-3xl">Una nota escrita con el corazon calmado</h3>
            </div>
            <button
              type="button"
              onPointerUp={() => setOpenLetter((current) => !current)}
              className="relative z-30 w-full touch-manipulation rounded-full border border-rose-200 bg-white/80 px-5 py-3 text-sm font-semibold text-rose-500 transition hover:border-rose-300 hover:bg-white sm:w-auto"
            >
              {openLetter ? 'Cerrar carta' : 'Abrir carta'}
            </button>
          </div>

          <div
            className={`overflow-hidden rounded-[1.75rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(255,245,247,0.85))] transition-all duration-500 ${
              openLetter ? 'max-h-[640px] p-4 opacity-100 sm:max-h-[520px] sm:p-6' : 'max-h-36 p-4 opacity-90 sm:max-h-32 sm:p-6'
            }`}
          >
            <p className="text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
              Me gustas por lo que eres, por como se siente hablar contigo y por la paz tan bonita que dejas.
              Si hoy te pregunto algo tan especial es porque no quiero improvisarte: quiero elegirte con intencion,
              con ternura y con muchas ganas de construir algo real.
            </p>

            {openLetter && (
              <div className="mt-5 space-y-4 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
                <p>
                  Quiero ser alguien que te sume, que te cuide, que te admire y que te recuerde seguido lo valiosa
                  que eres. Alguien con quien puedas reirte sin filtro y sentirte tranquila.
                </p>
                <p>
                  Este regalo no intenta ser perfecto. Solo quiere decirte con honestidad que me haces muy feliz y
                  que me encantaria seguir llenando de detalles esta historia contigo.
                </p>
                <p className="font-semibold text-rose-500">Con todo mi carino, para ti.</p>
              </div>
            )}
          </div>
        </div>

        <div className="glass-panel rounded-[1.75rem] p-4 sm:rounded-[2.1rem] sm:p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-rose-500 sm:text-sm sm:tracking-[0.24em]">Recuerdos imaginados</p>
          <h3 className="mt-2 text-[1.7rem] font-semibold sm:text-3xl">Pequenas escenas que quisiera vivir contigo</h3>

          <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
            {memories.map((memory, index) => (
              <button
                key={memory.title}
                type="button"
                onPointerUp={() => setSelectedMemory(index)}
                className={`relative z-30 touch-manipulation rounded-full px-3 py-2 text-sm font-semibold transition sm:px-4 ${
                  selectedMemory === index
                    ? 'bg-rose-500 text-white shadow-lg shadow-rose-200/60'
                    : 'bg-white/75 text-slate-600 hover:bg-white'
                }`}
              >
                {memory.title}
              </button>
            ))}
          </div>

          <div
            className={`mt-6 rounded-[1.8rem] bg-gradient-to-br ${memories[selectedMemory].accent} p-[1px] shadow-[0_18px_60px_rgba(244,114,182,0.18)]`}
          >
            <div className="rounded-[1.75rem] bg-white/82 p-4 backdrop-blur sm:p-6">
              <div className="mb-4 text-3xl sm:text-4xl">{memories[selectedMemory].emoji}</div>
              <h4 className="text-xl font-semibold sm:text-2xl">{memories[selectedMemory].title}</h4>
              <p className="mt-3 text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">{memories[selectedMemory].description}</p>
            </div>
          </div>
        </div>
      </div>

      <MusicPlayer
        autoplayBlocked={autoplayBlocked}
        currentTime={currentTime}
        duration={duration}
        isPlaying={isPlaying}
        onSeek={onSeek}
        onTogglePlayback={onTogglePlayback}
      />
    </div>
  )
}
