import React from 'react'

export default () => (
  <div className="flex justify-center mb-3">
    <svg width="80" viewBox="0 0 130 130" fill="none">
      <defs>
        <linearGradient
            y1="9"
            x2="75"
            y2="120"
            x1="33.5"
            id="gradient"
            gradientUnits="userSpaceOnUse"
          >
          <stop stopColor="#88CC88" />
          <stop offset="1" stopColor="#66EE66" />
        </linearGradient>
      </defs>

      <filter id="filter" x="0" y="0" width="130" height="130" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="5" />
        <feGaussianBlur stdDeviation="2.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.75 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="shadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="shadow" result="shape" />
      </filter>

      <g filter="url(#filter)">
        <path
          fill="url(#gradient)"
          d="M65 0C98.1371 0 125 26.8629 125 60C125 93.1371 98.1371 120 65 120C31.8629 120 5 93.1371 5 60C5 26.8629 31.8629 0 65 0ZM42 63.1748H61.0215L48.8613 109.146L89 55.9707H69.9785L82.1387 10L42 63.1748Z"
          />
      </g>
    </svg>
  </div>
)
