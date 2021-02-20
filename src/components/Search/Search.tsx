import React from 'react'
import styles from './Search.module.scss'

const Search: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault() }
  
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" className={styles.input} />
        <button className={styles.button}></button>
      </form>
    </div>
  )
}

export default Search
