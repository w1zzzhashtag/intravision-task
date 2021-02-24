import React from 'react'
import { MONTHS } from '../../../featurers/commonVariables'
import { BidsCardDataTypeLifetimeItems } from './../../../featurers/bidsCard/bidsCardTypes'
import styles from './Comment.module.scss'

interface IProps {
  data: BidsCardDataTypeLifetimeItems
}

const Comment: React.FC<IProps> = ({ data }) => {
  const parseDate = (d: string) => {
    const date = new Date(Date.parse(d))

    let dd = date.getDate()
    let mm = date.getMonth()
    let h = date.getHours()
    let m = date.getMinutes()

    return `прокомментировал ${dd} ${MONTHS[mm]}, ${h}:${m}`
  }

  if (!data.comment) return null

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}></div>
      <div className={styles.content}>
        <p className={styles.name}>
          {data.userName}
        </p>
        <p className={styles.date}>
          {parseDate(data.createdAt)}
        </p>
        <p className={styles.comment}>
          {data.comment}
        </p>
      </div>
    </div>
  )
}

export default Comment
