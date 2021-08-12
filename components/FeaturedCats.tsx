import React, { useEffect, useState } from "react"

import Image from "next/image"
import Link from "next/link"

import { BsArrowRight } from "react-icons/bs"
import styles from "../styles/FeaturedCats.module.scss"

interface Props {
  cats: any
}

export default function FeaturedCats(props: Props) {
  useEffect(() => {
    console.log(props.cats)
  }, [])
  return (
    <div className={styles["featured-container"]}>
      <div className={styles["featured-wrapper"]}>
        <p>Most Searched Breeds</p>
        <div className={styles.divider}></div>
        <div className={styles["inner-flex"]}>
          <h2>
            66+ Breeds For You <br /> to discover
          </h2>
          <Link href="/topcats">
            <div
              style={{
                display: "flex",
                cursor: "pointer",
              }}
            >
              <p>See more</p>

              <BsArrowRight className={styles["arrow-icon"]} />
            </div>
          </Link>
        </div>

        <div className={styles["featured-cats"]}>
          {props.cats.map((cat: any) => (
            <Link key={cat.bred_id} href={`/${cat._id}`}>
              <div style={{ cursor: "pointer" }}>
                <Image
                  className={styles["featured-image"]}
                  src={cat.imageUrl}
                  width={220}
                  height={200}
                />

                <p>{cat.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
