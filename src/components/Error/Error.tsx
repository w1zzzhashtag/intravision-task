import React from 'react'
import styles from './Error.module.scss'

interface IProps {
  error: Error
}

const Error: React.FC<IProps> = ({ error }) => {
  return (
    <div className={styles.wrapper}>
      <p>{error.name}</p>
      <p>{error.message}</p>
      <p>{error.stack}</p>
    </div>
  )
}

export default Error
