import React, { useState, useEffect } from "react"

import styles from "../styles/SearchBar.module.scss"

interface Props {
  callback: React.Dispatch<any>
  breeds: any
}

export default function SearchBar(props: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value

    if (value === "") {
      props.callback([])
    } else {
      let x = props.breeds.breeds.filter((breed: any) => {
        return breed.name.toLowerCase().includes(value.toLowerCase())
      })

      props.callback(x)
    }
  }

  return (
    <input
      onChange={handleChange}
      className={styles["search-bar"]}
      type="text"
      placeholder="Enter your breed"
    />
  )
}
