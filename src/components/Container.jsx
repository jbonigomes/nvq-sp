import React from 'react'

export default ({ children, className = '' }) => (
  <div className={`px-8 ${className}`}>{children}</div>
)
