import React from 'react'
import cn from 'classnames'
import styles from './TableHeaderRow.module.scss'
import { Route } from 'react-router-dom'

const TableHeaderRow: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <span className={cn(styles.item, styles.item__id)}>ID</span>
      <span className={cn(styles.item, styles.item__name)}>Название</span>
      <Route path="/bids" exact render={() => <>
        <span className={cn(styles.item, styles.item__status)}>Статус</span>
        <span className={cn(styles.item, styles.item__executor)}>Исполнитель</span>
      </>} />
    </div>
  )
}

export default TableHeaderRow
