import React from 'react'

export default ({ children, className = '' }) => (
  <section className={`my-8 ${className}`}>{children}</section>
)
