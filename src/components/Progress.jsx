import React from 'react'

export default ({ numerator, denominator, progress = 0 }) => (
  <div className="w-32 mx-auto flex items-center justify-center">
    <svg viewBox="0 0 100 100" transform="rotate(-90)">
      <circle
        r="45"
        cx="50"
        cy="50"
        fill="none"
        strokeWidth="10"
        className="stroke-dark-blue"
      />

      <circle
        r="45"
        cx="50"
        cy="50"
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        className="stroke-lime"
        strokeDasharray={2 * Math.PI * 45}
        strokeDashoffset={(2 * Math.PI * 45) * ((100 - progress) / 100)}
      />
    </svg>
    {numerator && denominator ? (
      <span className="absolute">
        <span className="text-3xl text-white">{numerator}</span>
        <span className="text-3xl text-light-grey font-light px-0.5">/</span>
        <span className="text-2xl text-white">{denominator}</span>
      </span>
    ) : (
      <span className="absolute text-white text-3xl">
        {Math.round(progress)}%
      </span>
    )}
  </div>
)
