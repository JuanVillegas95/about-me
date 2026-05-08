import React, { useEffect, useRef, useState } from "react"
import "./index.scss"
import monkeIcon from "../../assets/images/monke.png"
import homeMonke from "../../assets/images/layout-monke1.png"
import bananaJ from "../../assets/images/babana5.png"
import korea from "../../assets/images/photos/korea.png"
import holland from "../../assets/images/photos/holland.png"
import me from "../../assets/images/photos/me.png"
import pulga from "../../assets/images/photos/pulga.png"
import roki from "../../assets/images/photos/roki.png"
import { Logo } from "../Home/Logo"
import { AnimatedLetters } from "../AnimatedLetters"

const facts = [
  {
    label: "Now",
    text: "24-year-old software engineer from Mexico, building things at Oracle.",
  },
  {
    label: "Code",
    text: "Full-stack by default, curious enough to wander into anything interesting.",
  },
  {
    label: "Languages",
    text: "Spanish and English, with Japanese and French slowly joining the party.",
  },
  {
    label: "Away",
    text: "Muay Thai, calisthenics, travel, and a Netherlands master's goal for 2027.",
  },
]

export const ProfilePage = () => {
  const [isMonkeAnimate, setIsMonkeAnimate] = useState(false)
  const [letterClass, setLetterClass] = useState("text-animate")
  const timeoutRef = useRef(null)
  const letterTimeoutRef = useRef(null)

  const handleIsMonkeAnimate = () => {
    setIsMonkeAnimate(true)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setIsMonkeAnimate(false)
    }, 3600)
  }

  const handleMonkeKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      handleIsMonkeAnimate()
    }
  }

  useEffect(() => {
    letterTimeoutRef.current = setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 2800)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      if (letterTimeoutRef.current) {
        clearTimeout(letterTimeoutRef.current)
      }
    }
  }, [])

  return (
    <main className={`profile-page ${isMonkeAnimate ? "egg-active" : ""}`}>
      <section className="profile-stage" aria-labelledby="profile-title">
        <div className="identity-panel">
          <img className="profile-mark" src={monkeIcon} alt="" />

          <div className="profile-heading-block">
            <p className="eyebrow">Software engineer / Mexico / Oracle</p>
            <h1 id="profile-title">
              <AnimatedLetters
                letterClass={letterClass}
                text={["H", "i", "!"]}
                idx={1}
              />
            </h1>
            <h1 className="profile-name">
              <AnimatedLetters
                letterClass={letterClass}
                text={["I", "'", "m", "\u00A0"]}
                idx={5}
              />
              <span
                className="inline-monke"
                role="button"
                tabIndex={0}
                onClick={handleIsMonkeAnimate}
                onKeyDown={handleMonkeKeyDown}
                aria-label="Activate banana easter egg"
              >
                <span className="click-label">Click Me!</span>
                <img
                  className={`monke-art ${isMonkeAnimate ? "animate" : ""}`}
                  src={homeMonke}
                  alt=""
                />
                <img
                  className={`banana-art ${isMonkeAnimate ? "animate" : ""}`}
                  src={bananaJ}
                  alt="J"
                />
              </span>
              <AnimatedLetters
                letterClass={letterClass}
                text={["u", "a", "n", "\u00A0", "V", "i", "l", "l", "e", "g", "a", "s"]}
                idx={9}
              />
            </h1>
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                text={["F", "u", "l", "l", "-", "s", "t", "a", "c", "k", "\u00A0", "D", "e", "v"]}
                idx={22}
              />
            </h1>
          </div>

          <article className="bio-card">
            <p className="bio-lead">
              I studied Computer Science and never really stopped studying
              since. Picking up new stuff on a near-daily basis is just how
              I&apos;m wired.
            </p>

            <dl className="facts-grid">
              {facts.map(({ label, text }) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{text}</dd>
                </div>
              ))}
            </dl>

            <p className="bio-closer">Always curious, always learning.</p>
          </article>
        </div>

        <aside className="visual-panel" aria-label="Personal collage">
          <div className="mascot-anchor">
            <Logo />
          </div>

          <div className="photo-collage">
            <img src={korea} className="photo-card korea" alt="Mountain view from a South Korea trip" />
            <img src={holland} className="photo-card holland" alt="Canal view from a Netherlands trip" />
            <img src={me} className="person-cutout" alt="Juan taking a mirror selfie" />
            <img src={roki} className="dog-cutout roki" alt="Roki the dog" />
            <img src={pulga} className="dog-cutout pulga" alt="Pulga the dog resting" />
          </div>

        </aside>
      </section>
    </main>
  )
}
