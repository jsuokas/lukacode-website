import React from 'react'

import styles from './hero.module.css'

export default ({ data }) => (
  <div className={styles.hero}>
    <img src={data.heroimage.file.url} alt={data.image.file.filename} className={styles.heroImage} />
  </div>
)
