import React from 'react'
import { Link } from 'react-router-dom'

const lineClassNames = (index, target) => [
  'h-0.5',
  'flex-1',
  index > target ? 'bg-dark-blue' : 'bg-lime',
].join(' ')

const circleClassNames = (index, target) => [
  'w-10',
  'h-10',
  'flex',
  'text-sm',
  'flex-none',
  'rounded-full',
  'items-center',
  'justify-center',
  index > target ? 'pointer-events-none' : '',
  index > target ? 'bg-dark-blue' : 'bg-lime',
  index > target ? 'text-white' : 'text-dark-blue',
].join(' ')

export default ({ step }) => (
  <div className="flex items-center mb-12">
    {/* TODO: Re-instate this when levels are available
    <Link className={circleClassNames(1, step)} to="/welcome/name">1</Link>
    */}
    <Link className={circleClassNames(1, step)} to="/welcome">1</Link>
    <div className={lineClassNames(2, step)} />
    {/* TODO: Re-instate this when levels are available
    <Link className={circleClassNames(2, step)} to="/welcome/level">2</Link>
    */}
    <Link className={circleClassNames(2, step)} to="/welcome/name">2</Link>
    <div className={lineClassNames(3, step)} />
    <Link className={circleClassNames(3, step)} to="/welcome/course">3</Link>
  </div>
)
