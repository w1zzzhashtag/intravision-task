import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'

import { BidsDataType } from '../../../featurers/commonTypes'

import styles from './TableListRow.module.scss'

interface IProps {
  data: BidsDataType
}

const TableListRow: React.FC<IProps> = ({ data }) => {
  return (
    <Link
      to={`/bids/${data.id}`}
      className={styles.wrapper}>

      <span className={cn(styles.item, styles.item__id)}>
        {data.id}
      </span>

      <span className={cn(styles.item, styles.item__name)}>
        {data.name.length > 130 ? data.name.substr(0, 130) + '...' : data.name}
      </span>


      <span className={cn(styles.item, styles.item__status)}>
        <span
          className={styles.item__status__text}
          style={{ backgroundColor: data.statusRgb }}
        >
          {data.statusName}
        </span>
      </span>

      <span className={cn(styles.item, styles.item__executor)}>
        {data.executorName}
      </span>
    </Link>
  )
}

export default TableListRow
