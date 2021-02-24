import React from 'react'
import { MONTHS } from '../../../featurers/commonVariables'
import { parseDate } from '../../../featurers/users/commonFeaturers'
import { BidsCardDataTypeLifetimeItems } from './../../../featurers/bidsCard/bidsCardTypes'
import styles from './Comment.module.scss'

interface IProps {
  data: BidsCardDataTypeLifetimeItems
}

const Comment: React.FC<IProps> = ({ data }) => {
  if (!data.comment) return null

  return (
    <div className={styles.wrapper}>
      <div className={styles.avatar}></div>
      <div className={styles.content}>
        <p className={styles.name}>
          {data.userName}
        </p>
        <p className={styles.date}>
          прокомментировал {parseDate(data.createdAt, 'dd month, time')}
        </p>
        <p className={styles.comment}>
          {data.comment}
        </p>
      </div>
    </div>
  )
}

export default Comment
