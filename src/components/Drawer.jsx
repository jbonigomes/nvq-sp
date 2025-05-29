import React from 'react'

export default ({ children }) => (
  <div className="bg-mid-blue relative mt-64 -mx-8 pb-24 px-5 rounded-t-3xl">
    <div className="p-2">
      <div className="w-16 h-1.5 bg-light-blue rounded-full mx-auto" />
    </div>
    <ul className="border-t-1 border-light-blue">{children}</ul>
  </div>
)
