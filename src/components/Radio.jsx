import React from 'react'

import Label from '/src/components/Label'
import Message from '/src/components/Message'

export default ({ options, name, value, error, onChange }) => (
  <>
    {error && <Message>{error}</Message>}
    {options.map((option) => (
      <fieldset key={option} className="flex items-center mt-8 mb-4">
        <input
          id={option}
          name={name}
          type="radio"
          value={option}
          onChange={onChange}
          checked={option === value}
          className={[
            'mx-2',
            'w-3.5',
            'h-3.5',
            'outline',
            'rounded-full',
            'appearance-none',
            'outline-offset-4',
            'outline-dark-blue',
            'checked:bg-lime',
            'checked:outline-lime',
          ].join(' ')}
        />
        <div className="pl-3.5">
          <label htmlFor={option} className="text-sm font-light text-light-grey">
            {option}
          </label>
        </div>
      </fieldset>
    ))}
  </>
)
