import React from 'react'
import { Link } from 'react-router'

export default ({ path, label }) => (
  <li className="border-b-1 border-light-grey py-4">
    <Link to={path} className="flex text-white">
      <span className="flex-1">{label}</span>
      <svg
        width="24"
        height="24"
        fill="none"
        strokeWidth="2"
        title="chevron"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="flex-none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </Link>
  </li>
)
