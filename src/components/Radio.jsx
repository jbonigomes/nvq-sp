import React from 'react'

import Label from '/src/components/Label'
import Message from '/src/components/Message'

export default ({ options, error, onChange }) => (
  <>
    {options.map((option) => (
      <fieldset key={option} className="flex items-center mt-8 mb-4">
        <input
          id={option}
          type="radio"
          value={option}
          name="radio-group"
          onChange={onChange}
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
          <Label htmlFor={option}>{option}</Label>
        </div>
      </fieldset>
    ))}
    {error && <Message>{error}</Message>}
  </>
)
