import React from "react"
import "./index.scss"
import { NavLink } from "react-router-dom"
import monke from "../../assets/images/monke.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faUser } from "@fortawesome/free-solid-svg-icons"
import layoutMonke2 from "../../assets/images/layout-monke2.png"

export const Sidebar = () => {
  return (
    <div className="nav-bar">
      <img className="hanged-monke" src={layoutMonke2} alt="bananaOpen" />
      <NavLink
        className={({ isActive }) => `logo ${isActive ? "active" : ""}`}
        to="/"
      >
        <img src={monke} className="monke" alt="Monke" />
      </NavLink>
      <nav>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FontAwesomeIcon
            icon={faUser}
            color="#4d4d4e"
            className="user-link"
          />
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FontAwesomeIcon
            icon={faCode}
            color="#4d4d4e"
            className="user-link"
          />
        </NavLink>
      </nav>
    </div>
  )
}
