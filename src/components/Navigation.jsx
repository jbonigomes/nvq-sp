import React from 'react'
import { Link } from 'react-router'

const linkClass = (active) => [
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
  <div className="fixed bottom-0 left-0 right-0 flex bg-dark-blue pb-6">
    <Link to="/" className={linkClass(active === 'home')}>
      <svg
        width="20"
        height="20"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={active === 'home' ? 'stroke-lime' : 'stroke-white'}
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
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
      <div className="text-xs font-bold mt-1">Home</div>
    </Link>
    <Link to="/modules" className={linkClass(active === 'modules')}>
      <svg
        width="20"
        height="20"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={active === 'modules' ? 'stroke-lime' : 'stroke-white'}
      >
        <path
          d={[
            'M 11 4',
            'H 4', // TODO: fix this
            'a 2 2 0 0 0 -2 2',
            'v 14',
            'a 2 2 0 0 0 2 2',
            'h 14',
            'a 2 2 0 0 0 2 -2',
            'v -7',
          ].join(' ')}
        />
        <path
          d={[
            'M 18.5 2.5', // TODO: Fix fraction
            'a 2.121 2.121 0 0 1 3 3', // TODO: Fix fraction
            'L 12 15',
            'l -4 1 1 -4 9.5 -9.5', // TODO: Fix fraction
          ].join(' ')}
        />
      </svg>
      <div className="text-xs font-bold mt-1">Modules</div>
    </Link>
    <Link to="/evidences" className={linkClass(active === 'evidences')}>
      <svg
        width="20"
        height="20"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={active === 'evidences' ? 'stroke-lime' : 'stroke-white'}
      >
        <path
          d={[
            'M 14.7 6.3', // TODO: Fix fraction
            'a 1 1 0 0 0 0 1.4', // TODO: Fix fraction
            'l 1.6 1.6', // TODO: Fix fraction
            'a 1 1 0 0 0 1.4 0', // TODO: Fix fraction
            'l 3.77 -3.77', // TODO: Fix fraction
            'a 6 6 0 0 1 -7.94 7.94', // TODO: Fix fraction
            'l -6.91 6.91', // TODO: Fix fraction
            'a 2.12 2.12 0 0 1 -3 -3',
            'l 6.91 -6.91', // TODO: Fix fraction
            'a 6 6 0 0 1 7.94 -7.94', // TODO: Fix fraction
            'l -3.76 3.76', // TODO: Fix fraction
          ].join(' ')}
        />
      </svg>
      <div className="text-xs font-bold mt-1">Evidences</div>
    </Link>
  </div>
)
