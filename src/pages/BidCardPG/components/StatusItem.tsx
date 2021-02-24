import React from 'react'
import cn from 'classnames'
import styles from './StatusItem.module.scss'
import { BidsStatusDataType } from '../../../featurers/bidsStatus/bidsStatusTypes'


interface IProps {
  status: BidsStatusDataType
  handleClick: () => void
  isNested?: boolean
}

const StatusItem: React.FC<IProps> = ({ status, handleClick, isNested }) => {
  return (
    <div
      className={cn(styles.wrapper, {
        [styles.nested]: isNested
      })}
      onClick={handleClick}
    >
      <span
        className={styles.color}
        style={{ backgroundColor: status.rgb as string }}
      ></span>
      <p className={styles.text}>{status.name}</p>
    </div>
  )
}

export default StatusItem
