import { useEffect, useState } from "react"

// import Loader from 'react-loaders'
import "./index.scss"
import React from "react"
import { AnimatedLetters } from "../AnimatedLetters"
import me from "../../assets/images/photos/me.png"
import pulga from "../../assets/images/photos/pulga.png"
import roki from "../../assets/images/photos/roki.png"
import holland from "../../assets/images/photos/holland.png"
import korea from "../../assets/images/photos/korea.png"

export const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate")

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 5200)
  }, [])

  return (
    <>
      <section className="home-page about-page">
        <div className="text-zone">
          <h1 style={{ marginBottom: 0 }}>
            <AnimatedLetters
              letterClass={letterClass}
              text={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            Hey, I'm Juan Villegas — a 24-year-old software engineer from
            Mexico, currently building things at Oracle. I studied Computer
            Science and never really stopped studying since; picking up new
            stuff on a near-daily basis is just how I'm wired.
          </p>
          <p>
            Most of my work lives in full-stack territory, but honestly, I'll
            dive into pretty much anything that grabs my attention. Code is the
            main thing, but human languages are a close second — I speak Spanish
            and English, and I'm slowly making friends with Japanese and French.
          </p>
          <p>
            When I'm away from the keyboard, I'm probably training Muay Thai,
            doing calisthenics, or planning the next trip. South Korea, Japan,
            France, and the Netherlands have been favorites so far — and the
            Netherlands might turn into more than a stamp in my passport: I'm
            aiming to start a master's there in 2027 (the fact that my
            girlfriend is Dutch may or may not have something to do with that).
          </p>
          <p>
            Always curious, always learning.
          </p>
        </div>
        <div className="visual-zone">
          <div className="about-cont">
            <img
              src={korea}
              className="imgs card"
              loading="eager"
              alt="Juan in Korea"
              style={{
                "--rotate": "-8deg",
                "--translateX": "clamp(40px, 10vw, 180px)",
                "--translateY": "clamp(0px, 3vw, 50px)",
              }}
            />
            <img
              src={holland}
              className="imgs card"
              loading="eager"
              alt="Juan in Holland"
              style={{
                "--rotate": "8deg",
                "--translateX": "clamp(0px, 5vw, 80px)",
                "--translateY": "clamp(120px, 16vw, 220px)",
              }}
            />
            <img
              src={me}
              className="imgs contour"
              loading="eager"
              alt="Juan"
              style={{
                "--rotate": "8deg",
                "--translateX": "clamp(50px, 8vw, 120px)",
                "--translateY": "clamp(-80px, -4vw, -40px)",
              }}
            />
            <img
              src={pulga}
              className="imgs contour"
              loading="eager"
              alt="Pulga"
              style={{
                "--translateX": "clamp(140px, 20vw, 280px)",
                "--translateY": "clamp(240px, 34vw, 440px)",
              }}
            />
            <img
              src={roki}
              className="imgs contour"
              loading="eager"
              alt="Roki"
              style={{
                "--rotate": "-5deg",
                "--translateX": "clamp(20px, 6vw, 90px)",
                "--translateY": "clamp(260px, 31vw, 380px)",
              }}
            />
          </div>
        </div>
      </section>
      {/* <Loader type="pacman" /> */}
    </>
  )
}

export default About
