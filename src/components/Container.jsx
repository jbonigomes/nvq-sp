import React from 'react'

export default ({ children, className = '' }) => (
  <div className={`px-4 ${className}`}>{children}</div>
)
