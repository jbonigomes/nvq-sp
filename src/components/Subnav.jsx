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
  <footer className="flex bg-dark-blue">
    <Link to={`/evidences/${id}`} className={linkClass(active === 'details')}>
      <svg
        width="20"
        height="20"
        fill="none"
        title="details"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={active === 'details' ? 'stroke-lime' : 'stroke-light-grey'}
      >
        <polyline points="10 9 9 9 8 9" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <path d="M14 2 H6 a2 2 0 0 0 -2 2 v16 a2 2 0 0 0 2 2 h12 a2 2 0 0 0 2 -2 V8z" />
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={active === 'materials' ? 'stroke-lime' : 'stroke-light-grey'}
      >
        {/* TODO: fix this */}
        <path d="M6 2 L3 6 v14 a2 2 0 0 0 2 2 h14 a2 2 0 0 0 2 -2 V6 l-3 -4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10 a4 4 0 0 1 -8 0" />
      </svg>
      <div className="text-xs font-bold mt-1">Materials</div>
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
  </footer>
)
