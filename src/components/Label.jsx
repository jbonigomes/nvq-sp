import React from 'react'

export default ({ children, htmlFor, error }) => (
  <label
    htmlFor={htmlFor}
    className={[
      'px-1',
      '-top-3',
      'left-2',
      'bg-blue',
      'text-sm',
      'absolute',
      'font-semibold',
    ].join(' ')}
  >
    {children}
  </label>
)
