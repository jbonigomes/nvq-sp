import React from 'react'

export default ({ children }) => (
  <p
    className={[
      'w-40',
      'mt-8',
      'mb-10',
      'mx-auto',
      'text-lg',
      'text-center',
      'text-light-grey',
      'font-extralight',
    ].join(' ')}
  >
    {children}
  </p>
)
