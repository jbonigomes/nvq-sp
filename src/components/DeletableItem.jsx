import React from 'react'
import { Link } from 'react-router'

export default ({ text, onBlur, onChange, onDelete }) => (
  <li className="py-4 flex items-center gap-4">
    <input
      type="text"
      value={text}
      onBlur={onBlur}
      onChange={onChange}
      className={[
        'px-3',
        'py-2',
        'block',
        'flex-1',
        'w-full',
        'rounded',
        'bordered',
        'border-1',
        'text-white',
        'appearance-none',
        'focus:outline-none',
        'border-light-grey',
        '[:focus]:border-lime',
      ].join(' ')}
    />
    <button
      onClick={onDelete}
      className="bg-red p-1.5 w-7 h-7 rounded-full flex justify-center items-center"
    >
      <svg
        width="12"
        height="12"
        fill="none"
        title="delete"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="flex-none text-white"
      >
        <polyline points="3 6 5 6 21 6" />
        {/* TODO: fix this */}
        <path d="M19 6 v14 a2 2 0 0 1 -2 2 H7 a2 2 0 0 1 -2 -2 V6 m3 0 V4 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 v2" />
        <line x1="10" y1="11" x2="10" y2="17" />
        <line x1="14" y1="11" x2="14" y2="17" />
      </svg>
    </button>
  </li>
)
