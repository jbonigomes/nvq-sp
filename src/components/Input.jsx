import React from 'react'

import Fieldset from '/src/components/Fieldset'

export default ({ label, onChange, onBlur, value, error }) => (
  <Fieldset error={error} label={label}>
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
        'text-white',
        'appearance-none',
        'focus:outline-none',
      ].join(' ')}
    />
  </Fieldset>
)
