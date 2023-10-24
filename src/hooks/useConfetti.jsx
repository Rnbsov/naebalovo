import confetti from 'canvas-confetti'
import { useState } from 'react'

const useConfetti = (multiple = false) => {
  const [activated, setActivated] = useState(false)

  const handleConfetti = () => {
    if (!activated || multiple) {
      confetti({particleCount: 100, spread: 80})
      setActivated(true)
    }
  }

  return handleConfetti
}

export { useConfetti }
