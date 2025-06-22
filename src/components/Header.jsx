import React from 'react'

import { Link } from 'react-router'

export default ({ backTo, children, onClick, onDelete, onEdit }) => (
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
    {(onDelete || onEdit) && (
      <>
        <button className="mr-2" popoverTarget="more">
          <svg
            width="24"
            height="24"
            fill="none"
            title="more"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        </button>
        <div id="more" popover="auto" className="fixed left-auto top-12 right-3 rounded bg-dark-blue shadow-xl">
          <button className="text-white flex p-3 items-center gap-2" onClick={onEdit}>
            <svg
              width="18"
              height="18"
              fill="none"
              title="edit"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-none"
            >
              {/* TODO: fix this */}
              <path d="M11 4 H4 a2 2 0 0 0 -2 2 v14 a2 2 0 0 0 2 2 h14 a2 2 0 0 0 2-2 v-7" />
              <path d="M18.5 2.5 a2.121 2.121 0 0 1 3 3 L12 15 l-4 1 1 -4 9.5 -9.5z"/>
            </svg>
            Edit evidence name
          </button>
          <button className="text-red flex p-3 items-center gap-2" onClick={onDelete}>
            <svg
              width="18"
              height="18"
              fill="none"
              title="delete"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-none"
            >
              <polyline points="3 6 5 6 21 6" />
              {/* TODO: fix this */}
              <path d="M19 6 v14 a2 2 0 0 1 -2 2 H7 a2 2 0 0 1 -2 -2 V6 m3 0 V4 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
            Delete evidence
          </button>
        </div>
      </>
    )}
  </header>
)
