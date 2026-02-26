'use client'

import { useState, useEffect } from 'react'

const CORRECT_PIN = '8888'

export default function Pinpad() {
  const [pin, setPin] = useState('')
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    // Check if already unlocked (stored in sessionStorage)
    const unlocked = sessionStorage.getItem('pinpad_unlocked')
    if (unlocked === 'true') {
      setIsUnlocked(true)
    }
  }, [])

  const handleNumberClick = (num: string) => {
    if (pin.length < 4) {
      const newPin = pin + num
      setPin(newPin)
      setError(false)
      
      if (newPin.length === 4) {
        if (newPin === CORRECT_PIN) {
          setIsUnlocked(true)
          sessionStorage.setItem('pinpad_unlocked', 'true')
        } else {
          setError(true)
          setTimeout(() => {
            setPin('')
            setError(false)
          }, 1000)
        }
      }
    }
  }

  const handleDelete = () => {
    setPin(pin.slice(0, -1))
    setError(false)
  }

  const handleClear = () => {
    setPin('')
    setError(false)
  }

  if (isUnlocked) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
      <div className="w-full max-w-md px-8">
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl font-black italic bg-gradient-to-b from-white to-accent bg-clip-text text-transparent mb-2">
            FTC<span className="text-xs">©</span>
          </h1>
          <p className="font-mono text-sm text-muted uppercase tracking-wider">
            Enter PIN to continue
          </p>
        </div>

        {/* PIN Display */}
        <div className="flex justify-center gap-3 mb-8">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`w-4 h-4 rounded-full border-2 transition-all ${
                index < pin.length
                  ? 'bg-accent border-accent'
                  : error
                  ? 'border-red-500'
                  : 'border-muted'
              }`}
            />
          ))}
        </div>

        {error && (
          <p className="text-center text-red-500 font-mono text-sm mb-4 uppercase">
            Incorrect PIN
          </p>
        )}

        {/* Keypad */}
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className="aspect-square bg-bg border-2 border-muted text-text font-mono text-2xl font-bold uppercase transition-all hover:border-accent hover:text-accent active:scale-95"
            >
              {num}
            </button>
          ))}
          <button
            onClick={handleClear}
            className="aspect-square bg-bg border-2 border-muted text-text font-mono text-sm uppercase transition-all hover:border-accent hover:text-accent active:scale-95"
          >
            CLR
          </button>
          <button
            onClick={() => handleNumberClick('0')}
            className="aspect-square bg-bg border-2 border-muted text-text font-mono text-2xl font-bold uppercase transition-all hover:border-accent hover:text-accent active:scale-95"
          >
            0
          </button>
          <button
            onClick={handleDelete}
            className="aspect-square bg-bg border-2 border-muted text-text font-mono text-sm uppercase transition-all hover:border-accent hover:text-accent active:scale-95"
          >
            DEL
          </button>
        </div>
      </div>
    </div>
  )
}
