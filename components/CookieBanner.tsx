'use client'

import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(false)

  useEffect(() => {
    // Check if PIN is unlocked
    const unlocked = sessionStorage.getItem('pinpad_unlocked')
    if (unlocked === 'true') {
      setIsUnlocked(true)
      // Check if cookie consent was already given
      const consent = localStorage.getItem('cookie_consent')
      if (!consent) {
        setShowBanner(true)
      }
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setShowBanner(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined')
    setShowBanner(false)
  }

  if (!isUnlocked || !showBanner) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center p-4 pointer-events-none">
      <div className="bg-black/90 backdrop-blur-sm border border-muted px-6 py-4 max-w-md pointer-events-auto">
        <p className="font-mono text-xs text-text mb-4 text-center">
          We use cookies to enhance your experience. By continuing, you agree to our use of cookies.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleDecline}
            className="font-mono text-xs text-muted uppercase tracking-wider hover:text-text transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="font-mono text-xs text-accent uppercase tracking-wider hover:text-accent/80 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
