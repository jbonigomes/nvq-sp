import React from 'react'

export default ({ children, withFab }) => (
  <main
    className={[
      'px-4',
      'flex-1',
      'bg-blue',
      'overflow-y-auto',
      withFab ? 'relative pb-26' : '',
    ].join(' ')}
  >
    {children}
  </main>
)
