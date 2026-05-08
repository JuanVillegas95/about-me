import React, { useEffect, useRef, useState } from "react"
import "./index.scss"
import homeMonke from "../../assets/images/layout-monke1.png"
import bananaJ from "../../assets/images/babana5.png"
import { AnimatedLetters } from "../AnimatedLetters"
import { Logo } from "./Logo"

const hiText = ["H", "i", "!"]
const nameIntroText = ["I", "’", "m", "\u00A0"]
const nameText = [
  "u",
  "a",
  "n",
  "\u00A0",
  "V",
  "i",
  "l",
  "l",
  "e",
  "g",
  "a",
  "s",
]
const roleText = [
  "F",
  "u",
  "l",
  "l",
  "-",
  "s",
  "t",
  "a",
  "c",
  "k",
  " ",
  "D",
  "e",
  "v",
]

export const Home = () => {
  const [isMonkeAnimate, setIsMonkeAnimate] = useState(false)
  const [letterClass, setLetterClass] = useState("text-animate")
  const timeoutRef = useRef(null)

  const handleIsMonkeAnimate = () => {
    setIsMonkeAnimate(true)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setIsMonkeAnimate(false)
    }, 4000)
  }

  const handleMonkeKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      handleIsMonkeAnimate()
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 5200)
  }, [])

  return (
    <section className="home-page hero-section">
      <div className="text-zone">
        <h1 className="intro-heading">
          <AnimatedLetters text={hiText} letterClass={letterClass} idx={12} />
        </h1>

        <h1 className="name-heading">
          <AnimatedLetters
            text={nameIntroText}
            letterClass={letterClass}
            idx={15}
          />
          <span
            className="monke-wrapper"
            role="button"
            tabIndex={0}
            onClick={handleIsMonkeAnimate}
            onKeyDown={handleMonkeKeyDown}
            aria-label="Animate monkey"
          >
            <span className="click-label">Click Me!</span>
            <img
              className={`monke-art ${isMonkeAnimate ? "animate" : ""}`}
              src={homeMonke}
              alt=""
            />
            <img
              src={bananaJ}
              alt="J"
              className={`banana-art ${isMonkeAnimate ? "animate" : ""}`}
            />
          </span>
          <AnimatedLetters text={nameText} letterClass={letterClass} idx={20} />
        </h1>
        <h1 className="role-heading">
          <AnimatedLetters text={roleText} letterClass={letterClass} idx={34} />
        </h1>
      </div>
      <div className="visual-zone">
        <Logo />
      </div>
    </section>
  )
}
