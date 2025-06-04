import React from 'react'

import Message from '/src/components/Message'

export default ({ label, onChange, onBlur, value, error }) => (
  <>
    <fieldset
      className={[
        'rounded',
        'bordered',
        'border-2',
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
