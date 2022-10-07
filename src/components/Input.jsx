import React from 'react'

import Label from '/src/components/Label'
import Message from '/src/components/Message'

export default ({ label, onChange, onBlur, value, error }) => (
  <fieldset>
    <Label htmlFor={label} error={error}>{label}</Label>
    <input
      id={label}
      type="text"
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      className={[
        'mt-1',
        'px-3',
        'block',
        'py-1.5',
        'w-full',
        'rounded',
        'bordered',
        'border-y-2',
        'bg-dark-blue',
        'text-light-grey',
        'border-dark-blue',
        'focus:outline-none',
        'focus:border-b-light-grey',
        error ? 'border-b-red' : '',
      ].join(' ')}
    />
    {error && <Message>{error}</Message>}
  </fieldset>
)
