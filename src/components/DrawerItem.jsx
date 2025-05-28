import React from 'react'
import { Link } from 'react-router'

export default ({ path, label }) => (
  <li className="border-y border-dark-blue px-4 py-5">
    <Link to={`/${path}/${label}`} className="flex text-white">
      <svg
        width="24"
        height="24"
        fill="none"
        title="check"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="flex-none mr-6"
      >
        <polyline points="9 11 12 14 22 4" />
        <path
          d={[
            'M21 12',
            'v7',
            'a2 2 0 0 1 -2 2',
            'H5', // TODO: Fix this
            'a2 2 0 0 1 -2 -2',
            'V5', // TODO: Fix this
            'a2 2 0 0 1 2 -2',
            'h11',
          ].join(' ')}
        />
      </svg>
      <span className="flex-1">{label}</span>
      <svg
        width="24"
        height="24"
        fill="none"
        strokeWidth="2"
        title="chevron"
        class="flex-none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </Link>
  </li>
)
