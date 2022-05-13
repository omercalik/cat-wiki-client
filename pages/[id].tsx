import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import Image from "next/image"
import styles from "../styles/CatDetails.module.scss"
import Feature from "../components/Feature"
import Footer from "../components/Footer"
import Link from "next/link"
export default function CatDetail() {
  const router = useRouter()
  const { id } = router.query
  const [cat, setCat] = useState({} as any)
  const [images, setImages] = useState([] as any)

  const fetchCat = async (catId: string) => {
    const cat = await axios.get(
      `https://catwikiapi.herokuapp.com/cats/${catId}`
    )
    setCat(cat.data)

    fetchImages(cat.data.bred_id.toString())
    console.log(cat)
  }

  const fetchImages = async (catId: string) => {
    const img = await axios.get(
      `https://catwikiapi.herokuapp.com/cats/images/${catId}`
    )
    setImages(img.data)
  }
  useEffect(() => {
    if (id) {
      fetchCat(id.toString())
    }
  }, [id])

  if (Object.keys(cat).length === 0) {
    return <div className={styles.loading}></div>
  }

  return (
    <div className={styles["detail-container"]}>
      <Link href="/">
        <Image
          className={styles.logo}
          src="/CatwikiLogo.svg"
          width="120"
          height="44"
        />
      </Link>

      <div className={styles["info-container"]}>
        <div>
          <Image
            className={styles["detail-image"]}
            src={cat.imageUrl}
            width={470}
            height={470}
          />
        </div>

        <div className={styles["detail-info"]}>
          <h2>{cat.name}</h2>
          <p>{cat.description}</p>

          <div className={styles.features}>
            <p>
              Temperament: <span>{cat.temperament}</span>
            </p>
            <p>
              Origin: <span>{cat.origin}</span>
            </p>
            <p>
              Life Span: <span>{cat.life_span} years</span>
            </p>
            <Feature title="Adaptability" data={cat.adaptability} />
            <Feature title="Affection Level" data={cat.affection_level} />
            <Feature title="Child Friendly" data={cat.child_friendly} />
            <Feature title="Grooming" data={cat.grooming} />
            <Feature title="Intelligence" data={cat.intelligence} />
            <Feature title="Health issues" data={cat.health_issues} />
            <Feature title="Social needs" data={cat.social_needs} />
            <Feature title="Stranger friendly" data={cat.stranger_friendly} />
          </div>
        </div>
      </div>
      <div className={styles["photo-container"]}>
        <p>Other Photos</p>
        <div className={styles["photo-wrapper"]}>
          {images &&
            images.map((img: { url: string }, index: number) => (
              <Image
                key={index}
                className={styles["extra-image"]}
                src={img.url}
                width={300}
                height={300}
              />
            ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
