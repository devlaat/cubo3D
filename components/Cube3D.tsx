'use client'

import Image from 'next/image'

const faces = [
  { src: '/img/image1.jpg', alt: 'Recuerdo 1', label: 'Tu sonrisa' },
  { src: '/img/image2.jpg', alt: 'Recuerdo 2', label: 'Nuestra vibra' },
  { src: '/img/image3.jpg', alt: 'Recuerdo 3', label: 'Momentos lindos' },
  { src: '/img/image4.jpg', alt: 'Recuerdo 4', label: 'Tu mirada' },
  { src: '/img/image5.jpg', alt: 'Recuerdo 5', label: 'Mas recuerdos' },
  { src: '/img/image6.jpg', alt: 'Recuerdo 6', label: 'Contigo' },
]

export default function Cube3D() {
  return (
    <div className="mx-auto flex items-center justify-center py-6">
      <div className="cube-wrapper">
        <div className="cube-container">
          {faces.map((face, index) => (
            <div key={face.src} className={`face face-${index + 1}`}>
              <Image
                src={face.src}
                alt={face.alt}
                fill
                sizes="(max-width: 640px) 160px, 220px"
                className="rounded-[inherit] object-cover"
              />
              <div className="absolute inset-0 rounded-[inherit] bg-[linear-gradient(180deg,transparent_28%,rgba(15,23,42,0.12)_55%,rgba(15,23,42,0.65)_100%)]" />
              <span className="absolute inset-x-3 bottom-3 rounded-full bg-white/18 px-3 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur sm:text-xs">
                {face.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
