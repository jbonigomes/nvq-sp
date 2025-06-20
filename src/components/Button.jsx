import React from 'react'
import { Link } from 'react-router'

const classNames = (secondary, warning, small) =>
  [
    'block',
    'w-full',
    'border-2',
    'text-center',
    'border-solid',
    'rounded-full',
    small ? 'p-2' : 'p-3',
    small ? 'text-sm' : '',
    secondary ? 'bg-none' : 'bg-lime',
    secondary ? 'text-lime' : 'text-blue',
    warning && !secondary ? 'bg-red' : '',
    warning && secondary ? 'text-red' : '',
  ].join(' ')

export default ({ children, href, small, secondary, warning, onClick, type }) => (
  <>
    {href ? (
      <Link to={href} className={classNames(secondary, warning, small)}>
        {children}
      </Link>
    ) : (
      <button
        onClick={onClick}
        type={type || 'button'}
        className={classNames(secondary, warning, small)}
      >
        {children}
      </button>
    )}
  </>
)
