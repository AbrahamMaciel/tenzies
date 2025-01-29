import React from 'react'
import styles from './Die.module.css'

function Die({value}) {
  return (
    <button className={styles.die} type='button'>{value}</button>
  )
}

export default Die