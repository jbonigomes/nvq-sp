import React from 'react'

import Fieldset from '/src/components/Fieldset'

export default ({ label, onChange, onBlur, value, error }) => (
  <Fieldset error={error} label={label}>
    <textarea
      id={label}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      style={{ fieldSizing: 'normal' }}
      className={[
        'mt-1',
        'px-3',
        'py-2',
        'h-90',
        'block',
        'w-full',
        'text-white',
        'appearance-none',
        'focus:outline-none',
      ].join(' ')}
    />
  </Fieldset>
)
