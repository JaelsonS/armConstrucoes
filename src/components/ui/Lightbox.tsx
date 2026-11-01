import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
  images: string[]
  index: number | null
  alts?: string[]
  onClose: () => void
  onChange: (index: number) => void
}

export function Lightbox({ images, index, alts, onClose, onChange }: Props) {
  const open = index !== null

  const go = useCallback(
    (dir: -1 | 1) => {
      if (index === null) return
      const next = (index + dir + images.length) % images.length
      onChange(next)
    },
    [index, images.length, onChange],
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose, go])

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {open && index !== null ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Galeria de imagens"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-[2px] bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Fechar"
          >
            <X className="h-5 w-5" />
          </button>

          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-[2px] bg-white/10 p-2 text-white hover:bg-white/20 sm:left-6"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-[2px] bg-white/10 p-2 text-white hover:bg-white/20 sm:right-6"
                aria-label="Imagem seguinte"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          ) : null}

          <motion.img
            key={images[index]}
            src={images[index]}
            alt={alts?.[index] ?? `Imagem ${index + 1}`}
            className="max-h-[85vh] max-w-[92vw] object-contain"
            initial={{ opacity: 0, scale:.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs text-white/70">
            {index + 1} / {images.length}
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  )
}
