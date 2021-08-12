import React from "react"
import styles from "../styles/TopCats.module.scss"
import Link from "next/link"
import Image from "next/image"
import { GetStaticProps } from "next"
import axios from "axios"
import Footer from "../components/Footer"

export default function topcats({ cats }: any) {
  console.log(cats)
  return (
    <div className={styles["topcats-container"]}>
      <Link href="/">
        <Image
          className={styles.logo}
          src="/CatwikiLogo.svg"
          width="120"
          height="44"
        />
      </Link>

      <h2>Top 10 most searched breeds</h2>
      {cats &&
        cats.map((cat: any, index: number) => (
          <div key={cat._id} className={styles["topcat-wrapper"]}>
            <div className={styles.image}>
              <Image
                className={styles["cat-image"]}
                src={cat.imageUrl}
                width={200}
                height={200}
              />
            </div>
            <div className={styles.description}>
              <h3>
                {index + 1}. {cat.name}
              </h3>
              <p>{cat.description}</p>
            </div>
          </div>
        ))}

      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get("http://localhost:3001/cats")
  const cats = res.data.slice(0, 10)

  return {
    props: { cats },
  }
}
