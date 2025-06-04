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

export default ({ id, active }) => (
  <div className="flex bg-dark-blue pb-6">
    <Link to={`/evidences/${id}`} className={linkClass(active === 'details')}>
      <svg
        width="20"
        height="20"
        fill="none"
        strokeWidth="2"
        title="details"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={active === 'details' ? 'stroke-lime' : 'stroke-light-grey'}
      >
        {/* TODO: fix those */}
        <path d="M16 4 h2 a2 2 0 0 1 2 2 v14 a2 2 0 0 1 -2 2 H6 a2 2 0 0 1 -2 -2 V6 a2 2 0 0 1 2 -2 h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
      </svg>
      <div className="text-xs font-bold mt-1">Details</div>
    </Link>
    <Link
      to={`/evidences/${id}/tools`}
      className={linkClass(active === 'tools')}
    >
      <svg
        width="20"
        height="20"
        fill="none"
        strokeWidth="2"
        title="tools"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={active === 'tools' ? 'stroke-lime' : 'stroke-light-grey'}
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
      <div className="text-xs font-bold mt-1">Tools</div>
    </Link>
    <Link
      to={`/evidences/${id}/materials`}
      className={linkClass(active === 'materials')}
    >
      <svg
        width="20"
        height="20"
        fill="none"
        strokeWidth="2"
        title="materials"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={active === 'materials' ? 'stroke-lime' : 'stroke-light-grey'}
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
      <div className="text-xs font-bold mt-1">Materials</div>
    </Link>
    <Link
      to={`/evidences/${id}/writeup`}
      className={linkClass(active === 'writeup')}
    >
      <svg
        width="20"
        height="20"
        fill="none"
        title="writeup"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={active === 'writeup' ? 'stroke-lime' : 'stroke-light-grey'}
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
      <div className="text-xs font-bold mt-1">Writeup</div>
    </Link>
    <Link
      to={`/evidences/${id}/gallery`}
      className={linkClass(active === 'gallery')}
    >
      <svg
        width="20"
        height="20"
        fill="none"
        title="gallery"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={active === 'gallery' ? 'stroke-lime' : 'stroke-light-grey'}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <div className="text-xs font-bold mt-1">Gallery</div>
    </Link>
  </div>
)
