import './index.scss'

import React, { useState } from 'react'

export const AnimatedLetters = ({ letterClass, text, idx }) => {
  const [animatedLetters, setAnimatedLetters] = useState(new Set())

  const startHoverAnimation = (letterIndex) => {
    if (letterClass !== 'text-animate-hover') {
      return
    }

    setAnimatedLetters((currentLetters) => {
      const nextLetters = new Set(currentLetters)
      nextLetters.add(letterIndex)
      return nextLetters
    })
  }

  const stopHoverAnimation = (letterIndex) => {
    if (letterClass !== 'text-animate-hover') {
      return
    }

    setAnimatedLetters((currentLetters) => {
      const nextLetters = new Set(currentLetters)
      nextLetters.delete(letterIndex)
      return nextLetters
    })
  }

  return (
    <span>
      {text.map((char, i) => {
        const letterIndex = idx + i

        return (
          <span
            key={`${char || 'space'}-${letterIndex}`}
            className={`${letterClass}${
              animatedLetters.has(letterIndex) ? ' is-hovering' : ''
            } _${letterIndex}`}
            onMouseEnter={() => startHoverAnimation(letterIndex)}
            onAnimationEnd={() => stopHoverAnimation(letterIndex)}
          >
            {char}
          </span>
        )
      })}
    </span>
  )
}
