import React from 'react'

import Message from '/src/components/Message'

export default ({ children, label, error }) => (
  <>
    <fieldset
      className={[
        'rounded',
        'bordered',
        'border-1',
        'relative',
        error ? 'text-red' : 'text-white has-[:focus]:text-lime',
        error ? 'border-red' : ' border-light-grey has-[:focus]:border-lime',
      ].join(' ')}
    >
      <label
        htmlFor={label}
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
        {label}:
      </label>
      {children}
    </fieldset>
    {error && <Message>{error}</Message>}
  </>
)
