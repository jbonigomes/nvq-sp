import React from 'react'

export default ({ children, className }) => (
  <section className={`my-9 ${className}`}>
    {children}
  </section>
)
