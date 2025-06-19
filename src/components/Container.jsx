import React from 'react'

export default ({ children }) => (
  <div
    className="flex flex-col overflow-hidden"
    style={{ height: `calc(${window.innerHeight * 0.01}px * 100)` }}
  >
    {children}
  </div>
)
