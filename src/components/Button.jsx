import React from 'react'
import { Link } from 'react-router-dom'

const classNames = (secondary, small) => [
  'block',
  'w-full',
  'border-2',
  'text-center',
  'border-lime',
  'border-solid',
  'rounded-full',
  small ? 'p-2' : 'p-3',
  small ? 'text-sm' : '',
  secondary ? 'bg-blue' : 'bg-lime',
  secondary ? 'text-lime' : 'text-blue',
].join(' ')

export default ({ children, href, small, secondary, onClick, type }) => (
  <>
    {href ? (
      <Link to={href} className={classNames(secondary, small)}>
        {children}
      </Link>
    ) : (
      <button
        onClick={onClick}
        type={type || 'button'}
        className={classNames(secondary, small)}
      >
        {children}
      </button>
    )}
  </>
)
