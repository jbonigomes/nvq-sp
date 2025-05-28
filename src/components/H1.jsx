import React from 'react'

export default ({ children, className = '' }) => (
  <h1 className={`text-white text-4xl font-light ${className}`}>{children}</h1>
)
