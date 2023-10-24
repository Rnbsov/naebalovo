import confetti from 'canvas-confetti'
import { useState } from 'react'

const useConfetti = () => {
  const [activated, setActivated] = useState(false)

  const handleConfetti = () => {
    if (!activated) {
      confetti({particleCount: 100, spread: 80})
      setActivated(true)
    }
  }

  return handleConfetti
}

export { useConfetti }
