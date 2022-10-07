import React from 'react'

import H2 from '/src/components/H2'
import Button from '/src/components/Button'

export default ({ text, action, onClick }) => (
  <div
    className={[
      'flex',
      'fixed',
      'top-0',
      'left-0',
      'right-0',
      'bottom-0',
      'bg-black/70',
      'items-center',
      'justify-center',
      'backdrop-blur-sm',
    ].join(' ')}
  >
    <div className="w-72 py-5 px-8 bg-blue rounded-lg">
      <h1
        className={[
          'mb-7',
          'pb-1.5',
          'text-2xl',
          'relative',
          'font-bold',
          'text-white',
          'text-center',
          'before:w-10',
          'before:h-0.5',
          'before:left-0',
          'before:m-auto',
          'before:bg-lime',
          'before:right-0',
          'before:bottom-0',
          'before:absolute',
          'before:content-[""]',
        ].join(' ')}
      >
        Are you sure?
      </h1>
      <H2>{text}</H2>
      <div className="flex gap-x-5">
        <Button onClick={onClick(false)} small secondary>CANCEL</Button>
        <Button onClick={onClick(true)} small>{action}</Button>
      </div>
    </div>
  </div>
)
