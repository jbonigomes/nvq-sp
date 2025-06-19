import React from 'react'

export default ({ onClick, isCamera }) => (
  <button className="aspect-square rounded-full p-4 bg-lime shadow-lg absolute bottom-0 right-0 mr-5 mb-7">
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
      {isCamera ? (
        <>
          {/* TODO: fix this */}
          <path d="M23 19 a2 2 0 0 1 -2 2 H3 a2 2 0 0 1 -2 -2 V8 a2 2 0 0 1 2 -2 h4 l2 -3 h 6 l2 3 h4 a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </>
      ) : (
        <>
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </>
      )}
    </svg>
  </button>
)
