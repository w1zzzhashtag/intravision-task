import React from 'react'
import cn from 'classnames'
import styles from './TextAreaField.module.scss'

interface IProps {
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  customClassName?: any
}

const TextAreaField: React.FC<IProps> = ({ name, value, handleChange, customClassName = '' }) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={handleChange}
      className={cn(styles.field, customClassName)} />
  )
}

export default TextAreaField
