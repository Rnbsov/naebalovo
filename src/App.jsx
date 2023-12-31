// import './App.css'

import { ArrowDownToLine } from 'lucide-react'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useConfetti } from './hooks/useConfetti'

function App() {
  const [arrowSpin, setArrowSpin] = useState(false)

  const handleConfetti = useConfetti()
  const handleMultipleConfetti = useConfetti(true)
  
  const messages = ['Гандон', 'Гандониус', 'Пидр', 'Пидр гнойный', 'homo-sexualis', 'Ну здорова, пидр!', 'Гомосек']

  const icons = ['🍃', '👾', '💚','💜','☄','🧡','✨','🦊','🦩','😭', '🐟']

  const positions = [
    'top-left',
    'bottom-left',
    'top-center',
    'bottom-center',
    'top-right',
    'bottom-right',
  ]

  const handleClick = () => {
    const randomMessage =
      messages[Math.floor(Math.random() * messages.length)]
    const randomPosition =
      positions[Math.floor(Math.random() * positions.length)]
    const randomIcons =
      icons[Math.floor(Math.random() * icons.length)]

    toast(randomMessage, {
      icon: randomIcons,
      position: randomPosition,
      duration: 2000
    })
  }

  return (
    <>
      <div className='wrapper h-screen bg-background'>
        <h1 className='text-4xl font-semibold'>
          Упс... У меня для вас плохие новости кажется вас наебали!
        </h1>

        {/* Accordion */}
        <div onClick={handleConfetti} className='flex items-center justify-center mt-24'>
          <div className='collapse collapse-arrow w-96 bg-lime-300'>
            <input type='radio' name='my-accordion-1' />
            <div className='collapse-title text-xl font-medium'>
              Нажмите сюда если ещё не поняли что произошло
            </div>
            <div className='collapse-content text-6xl'>
              <p>Иди нахуй</p>
            </div>
          </div>
        </div>

        <div onClick={handleConfetti} className='flex items-center justify-center mt-5'>
          <div className='collapse collapse-arrow w-96 bg-lime-300'>
            <input type='radio' name='my-accordion-1' />
            <div className='collapse-title text-xl font-medium'>
              А угадай что?
            </div>
            <div className='collapse-content'>
              <p>Иди нахуй</p>
            </div>
          </div>
        </div>

        <div onClick={handleConfetti} className='flex items-center justify-center mt-5'>
          <div className='collapse collapse-arrow w-96 bg-lime-300'>
            <input type='radio' name='my-accordion-1' />
            <div className='collapse-title text-xl font-medium'>
              <p>👾 Ъуъ 👾</p>
            </div>
            <div className='collapse-content'>
              <p>Да иди ты нахуй!! Заебал гандон...</p>

              <button
                onClick={() => {
                  handleClick()
                  handleConfetti()
                  setArrowSpin(true)
                }}
                className='btn btn-success mt-3'
              >
                ❤ Click me!
              </button>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center flex-col mt-6'>
          <p onClick={handleMultipleConfetti} className='font-normal hover:font-medium sele cursor-pointer select-none'>
            Если ещё остались вопросы
          </p>

          <a
            href='https://t.me/Rnbsov'
            target='_blank'
            rel='noreferrer'
            className='mt-2 animate-bounce'
          >
            <button className='mt-6 w-12 h-12 bg-gradient-to-tr from-cl1 to-cl2 flex justify-center items-center rounded-lg text-white p-1'>
              <div className={arrowSpin ? 'animate-spin' : ''}><ArrowDownToLine /></div>
            </button>
          </a>

          <a
            href='https://t.me/Rnbsov'
            target='_blank'
            rel='noreferrer'
            className='mt-6'
          >
            <img
              src='https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white'
              target='_blank'
            />
          </a>
        </div>
      </div>
      <Toaster />
    </>
  )
}

export default App
