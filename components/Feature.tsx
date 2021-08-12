import React from "react"
var classNames = require("classnames")
import styles from "../styles/Feature.module.scss"

interface Props {
  title: string
  data: number
}

export default function Feature(props: Props) {
  return (
    <>
      <div className={styles["feature-container"]}>
        <p>{props.title}:</p>
        <div className={styles["feature-bars"]}>
          <div
            className={`${styles["feature-bar"]} ${
              props.data >= 1 ? styles.degree : ""
            }`}
          ></div>
          <div
            className={`${styles["feature-bar"]} ${
              props.data >= 2 ? styles.degree : ""
            }`}
          ></div>
          <div
            className={`${styles["feature-bar"]} ${
              props.data >= 3 ? styles.degree : ""
            }`}
          ></div>
          <div
            className={`${styles["feature-bar"]} ${
              props.data >= 4 ? styles.degree : ""
            }`}
          ></div>
          <div
            className={`${styles["feature-bar"]} ${
              props.data >= 5 ? styles.degree : ""
            }`}
          ></div>
        </div>
      </div>
    </>
  )
}
