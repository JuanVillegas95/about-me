import { useEffect, useState } from "react"

import "./index.scss"
import React from "react"
import { AnimatedLetters } from "../AnimatedLetters"
import { technologies, categories } from "../../utils/constants.ts"

export const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate")
  const [selectedTech, setSelectedTech] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 5200)
  }, [])

  return (
    <>
      <div className="home-page" style={{ paddingBottom: "5%" }}>
        <div className="text-zone">
          <h1 style={{ marginBottom: 0 }}>
            <AnimatedLetters
              letterClass={letterClass}
              text={[
                "S",
                "k",
                "i",
                "l",
                "l",
                "s",
                " ",
                "a",
                "n",
                "d",
                "",
                "t",
                "o",
                "o",
                "l",
                "s",
              ]}
              idx={15}
            />
          </h1>
          <div className="categories">
            {categories.map((category, index) => (
              <span
                key={index}
                className={`${
                  selectedTech &&
                  technologies[selectedTech].categories.includes(category)
                    ? "highlighted"
                    : ""
                }`}
              >
                <h3> {category}</h3>
              </span>
            ))}
          </div>
        </div>
        <div className="visual-zone">
          <div className="skills-cont">
            {Object.entries(technologies).map(
              ([key, { icon, name }], index) => (
                <span
                  className="skill"
                  onMouseEnter={() => setSelectedTech(key)}
                  onMouseLeave={() => setSelectedTech(null)}
                >
                  <img src={icon} alt={name} />
                </span>
              )
            )}
          </div>
        </div>
      </div>
      {/* <Loader type="pacman" /> */}
    </>
  )
}
