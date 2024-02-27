import React from 'react'

const CardTemplate = ({className, children}) => {
  return (
    <article className={`shop${className}`}>
        {children}
    </article>
  )
}

export default CardTemplate