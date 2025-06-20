import React from 'react'

import Fieldset from '/src/components/Fieldset'

export default ({ error, day, month, year, onDayChange, onMonthChange, onYearChange, onBlur }) => (
  <div className="w-44 font-mono">
    <Fieldset label="Date" error={error}>
      <input
        type="text"
        pattern="\d*"
        maxLength="2"
        placeholder="DD"
        inputMode="numeric"
        value={day}
        onBlur={onBlur}
        onChange={onDayChange}
        className={[
          'px-3',
          'w-11',
          'pt-2.5',
          'pb-1.5',
          'text-white',
          'appearance-none',
          'focus:outline-none',
        ].join(' ')}
      />
      /
      <input
        type="text"
        pattern="\d*"
        maxLength="2"
        placeholder="MM"
        inputMode="numeric"
        value={month}
        onBlur={onBlur}
        onChange={onMonthChange}
        className={[
          'px-3',
          'w-11',
          'pt-2.5',
          'pb-1.5',
          'text-white',
          'appearance-none',
          'focus:outline-none',
        ].join(' ')}
      />
      /
      <input
        type="text"
        pattern="\d*"
        maxLength="4"
        placeholder="YYYY"
        inputMode="numeric"
        value={year}
        onBlur={onBlur}
        onChange={onYearChange}
        className={[
          'px-3',
          'w-16',
          'pt-2.5',
          'pb-1.5',
          'text-white',
          'appearance-none',
          'focus:outline-none',
        ].join(' ')}
      />
    </Fieldset>
  </div>
)
