import React from 'react'

import Label from '/src/components/Label'
import Message from '/src/components/Message'

export default ({ label, onChange, onBlur, value, error }) => (
  <>
    <fieldset
      className={[
        'rounded',
        'bordered',
        'border-2',
        'relative',
        'border-light-grey',
        'has-[:focus]:text-lime',
        'has-[:focus]:border-lime',
        error ? 'border-red' : '',
        error ? 'text-red' : 'text-light-grey',
      ].join(' ')}
    >
      <Label htmlFor={label} error={error}>
        {label}:
      </Label>
      <input
        id={label}
        type="text"
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        className={[
          'mt-1',
          'px-3',
          'py-2',
          'block',
          'w-full',
          'text-light-grey',
          'appearance-none',
          'focus:outline-none',
        ].join(' ')}
      />
    </fieldset>
    {error && <Message>{error}</Message>}
  </>
)
