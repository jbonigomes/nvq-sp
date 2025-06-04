import React from 'react'
import { Link } from 'react-router'

const linkClass = (active) =>
  [
    'flex',
    'pt-3',
    'flex-1',
    'flex-col',
    'border-t-2',
    'text-white',
    'justify-top',
    'items-center',
    active ? 'border-t-lime' : 'border-t-dark-blue',
  ].join(' ')

export default ({ active }) => (
  <footer className="flex bg-dark-blue">
    <Link to="/" className={linkClass(active === 'home')}>
      <svg
        width="20"
        height="20"
        fill="none"
        title="home"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={active === 'home' ? 'stroke-lime' : 'stroke-light-grey'}
      >
        <path
          d={[
            'M 3 9',
            'l 9 -7 9 7',
            'v 11',
            'a 2 2 0 0 1 -2 2',
            'H 5', // TODO: Fix this
            'a 2 2 0 0 1 -2 -2',
            'v -11',
          ].join(' ')}
        />
        <polyline points="9 20 9 12 15 12 15 20" strokeLinecap="square" />
      </svg>
      <div className="text-xs font-bold mt-1">Home</div>
    </Link>
    <Link to="/modules" className={linkClass(active === 'modules')}>
      <svg
        width="20"
        height="20"
        fill="none"
        title="modules"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={active === 'modules' ? 'stroke-lime' : 'stroke-light-grey'}
      >
        {/* TODO: fix those */}
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
      <div className="text-xs font-bold mt-1">Modules</div>
    </Link>
    <Link to="/evidences" className={linkClass(active === 'evidences')}>
      <svg
        width="20"
        height="20"
        fill="none"
        strokeWidth="2"
        title="evidences"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={active === 'evidences' ? 'stroke-lime' : 'stroke-light-grey'}
      >
        {/* TODO: fix those */}
        <path d="M16 4 h2 a2 2 0 0 1 2 2 v14 a2 2 0 0 1 -2 2 H6 a2 2 0 0 1 -2 -2 V6 a2 2 0 0 1 2 -2 h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      </svg>
      <div className="text-xs font-bold mt-1">Evidences</div>
    </Link>
  </footer>
)
