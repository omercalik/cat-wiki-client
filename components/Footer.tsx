import React from "react"
import styles from "../styles/Footer.module.scss"

import Image from "next/image"

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Image
        className={styles.footerLogo}
        src="/CatwikiLogoHero.svg"
        width="140"
        height="45"
      />
      <p>
        © created by <span>Ömer Berkan Çalık</span> 2021
      </p>
    </div>
  )
}
