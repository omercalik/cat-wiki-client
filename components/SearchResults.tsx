import React from "react"
import Link from "next/link"
import SearchResult from "./SearchResult"
import styles from "../styles/SearchResults.module.scss"

import axios from "axios"

interface Props {
  results: any
}

export default function SearchResults(props: Props) {
  const handleClick = (breed: any) => {
    axios.patch(`http://localhost:3001/cats/${breed._id}`)
  }
  return (
    <div className={styles["result-container"]}>
      {props.results.map((breed: any) => (
        <Link key={breed._id} href={`/${breed._id}`}>
          <div onClick={() => handleClick(breed)} key={breed.bred_id}>
            <SearchResult cat={breed} key={breed.bred_id} />
          </div>
        </Link>
      ))}
    </div>
  )
}
