import React from 'react'

export default ({ children }) => (
  <div className="bg-mid-blue relative mt-64 -mx-8 pb-24 rounded-t-3xl">
    <div className="p-2">
      <div className="w-16 h-1.5 bg-light-blue rounded-full mx-auto" />
    </div>
    <ul className="border-y border-dark-blue">
      {children}
    </ul>
  </div>
)