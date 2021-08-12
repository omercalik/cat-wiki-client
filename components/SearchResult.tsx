import React from "react"
import styles from "../styles/SearchResult.module.scss"

interface Props {
  cat: any
}

export default function SearchResult(props: Props) {
  return (
    <div className={styles.container}>
      <p>{props.cat.name}</p>
    </div>
  )
}
