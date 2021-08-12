import React from "react"
import Image from "next/image"
import { useState } from "react"

import styles from "../styles/Hero.module.scss"
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"

interface Props {
  breeds: any
}

export default function Hero(props: Props) {
  const [results, setResults] = useState([])

  return (
    <div className={styles.hero}>
      <div className={styles["hero-wrapper"]}>
        <Image
          className={styles.herologo}
          src="/CatwikiLogoHero.svg"
          width="400"
          height="140"
        />
        <p className={styles["hero-text"]}>
          Get to know more about your <br /> cat breed
        </p>

        <SearchBar callback={setResults} breeds={props} />
        <SearchResults results={results} />
      </div>
    </div>
  )
}
