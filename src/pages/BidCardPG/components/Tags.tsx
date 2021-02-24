import React from 'react'
import { BidsDataTagsType } from '../../../featurers/commonTypes'
import styles from './Tags.module.scss'

interface IProps {
  tags: BidsDataTagsType[]
}

const Tags: React.FC<IProps> = ({ tags }) => {
  return (
    <div className={styles.wrapper}>
      {tags.map(item => (
        <span key={item.id} className={styles.item}>
          {item.name}
        </span>
      ))}
    </div>
  )
}

export default Tags
