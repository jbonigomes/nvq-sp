import React from 'react'

import { Link } from 'react-router'

export default ({ backTo, children, onClick }) => (
  <header
    className={[
      'pb-2',
      'px-2',
      'flex',
      'text',
      'gap-2',
      'text-lg',
      'shadow-md',
      'text-white',
      'bg-dark-blue',
    ].join(' ')}
  >
    {backTo && (
      <Link to={backTo}>
        <svg
          width="28"
          height="28"
          fill="none"
          strokeWidth="2"
          title="chevron"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </Link>
    )}
    <span className="flex-1">{children}</span>
    {onClick && (
      <button className="mr-2" onClick={onClick}>
        <svg
          width="24"
          height="24"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* TODO: fix this path */}
          <path d="M21 15 v4 a2 2 0 0 1 -2 2 H5 a2 2 0 0 1 -2 -2 v -4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </button>
    )}
  </header>
)
