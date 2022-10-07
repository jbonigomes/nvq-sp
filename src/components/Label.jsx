import React from 'react'

export default ({ children, htmlFor, error }) => (
  <label
    htmlFor={htmlFor}
    className={[
      'text-sm',
      'font-light',
      error ? 'text-red' : 'text-light-grey',
    ].join(' ')}
  >
    {children}
  </label>
)
