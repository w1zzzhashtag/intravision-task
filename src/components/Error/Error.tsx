import React from 'react'

interface IProps {
  error: Error
}

const Error: React.FC<IProps> = ({ error }) => {
  return (
    <div>
      <p>{error.name}</p>
      <p>{error.message}</p>
      <p>{error.stack}</p>
    </div>
  )
}

export default Error
