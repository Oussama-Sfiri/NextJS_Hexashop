"use client"; // car on va utiliser react hooks (useContext, useState, createContext)

import { useContext } from "react"
import styles from "./DarkModeToggle.module.css"
import { ThemeContext } from "@/Context/ThemeContext"

function DarkModeToggle() {
    const {mode, toggle} = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle}>
        <div className={styles.icon}>🌕</div>
        <div className={styles.icon}>🌑</div>
        <div 
            className={styles.switcher}
            style={mode === "light" ? {left: "2px"} : {right: "2px"}}
        />
    </div>
  )
}

export default DarkModeToggle