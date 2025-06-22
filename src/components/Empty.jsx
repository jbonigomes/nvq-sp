import React from 'react'

import H2 from '/src/components/H2'
import H3 from '/src/components/H3'
import Section from '/src/components/Section'

export default () => (
  <div className="h-full flex flex-col items-center justify-center">
    <H3>No items found</H3>
    <svg width="200" viewBox="0 0 335 568" title="empty">
      <rect
        x="0"
        rx="5"
        ry="5"
        y="446"
        width="164"
        height="118"
        className="fill-light-grey"
      />
      <path
        className="fill-light-grey"
        d={[
          'M333 538',
          'a4 4 0 0 1 -3 -6',
          'a10 10 0 0 0 -18 0',
          'c-3,7 -7 14 -7 21',
          'a29 29 0 0 0 0 10',
          'a115 115 0 0 1 -10 -48',
          'a111 111 0 0 1 0 -12',
          'q0 -5 2 -10',
          'a116 116 0 0 1 23 -49',
          'a31 31 0 0 0 13 -13',
          'a24 24 0 0 0 2 -6',
          'c0 0 -1 0 -2 0 0 0 0 0 0 0',
          'a4 4 0 0 1 -3 -6',
          'c0 0 0 -1 1 -1',
          'a2 2 0 0 0 0 0',
          'c0 0 0 -1 1 -2',
          'a10 10 0 0 0 -3 -3',
          'c-5 -3 -11 0 -15 3 -3 4 -4 10 -3 16',
          'a41 41 0 0 0 6 13',
          'c0 0 -1 0 -1 1',
          'a117 117 0 0 0 -12 19',
          'a49 49 0 0 0 -3 -23',
          'c-3 -7 -8 -12 -13 -18 -6 -7 -17 -4 -18 5',
          'q0 0 0 0 1 0 2 1',
          'a5 5 0 0 1 -2 9',
          'a49 49 0 0 0 1 7',
          'a49 49 0 0 0 28 29',
          'c0 0 1 0 1 1',
          'a120 120 0 0 0 -6 30',
          'a113 113 0 0 0 0 18',
          'a30 30 0 0 0 -10 -17',
          'c-8 -6 -19 -9 -27 -14',
          'a6 6 0 0 0 -8 5',
          'a33 33 0 0 1 4 2',
          'q1 0 2 1',
          'a5 5 0 0 1 -2 9',
          'a49 49 0 0 0 9 14',
          'a49 49 0 0 0 34 17',
          'a120 120 0 0 0 8 23',
          'h29',
          'c0 0 0 -1 0 -1',
          'a33 33 0 0 1 -8 0',
          'c2 -3 4 -5 6 -8',
          'a2 2 0 0 0 0 0',
          'c1 -1 2 -2 3 -4',
          'a48 48 0 0 0 -1 -12z',
          ].join(' ')}
      />
      <path d="M161 8 a1 1 0 0 1 16 1 v50 h-16z" className="fill-white" />
      <rect
        x="17"
        y="63"
        rx="12"
        ry="12"
        width="301"
        fill="none"
        height="218"
        stroke="white"
        strokeWidth="4"
      />
      <path
        fill="white"
        d="M210 76 h-80 a20 20 0 0 1 -20 -20 h120 a20 20 0 0 1 -20 20z"
      />
      <path
        fill="white"
        d="M210 293 h-80 a20 20 0 0 1 -20 -20 h120 a20 20 0 0 1 -20 20z"
      />
      <path
        fill="white"
        d={[
          'M161 292',
          'v110',
          'l-70 145',
          'a1 1 0 0 0 30 0',
          'a1 1 0 0 1 40 0',
          'v8',
          'a1 1 0 0 0 14 0',
          'v-8',
          'a1 1 0 0 1 40 0',
          'a1 1 0 0 0 30 0',
          'l-70 -145',
          'v-110z',
        ].join(' ')}
      />
      <line
        x1="0"
        y1="563"
        x2="335"
        y2="563"
        strokeWidth="2"
        className="stroke-light-grey"
      />
    </svg>
    <Section>
      <H2>Click below to add your first item</H2>
    </Section>
  </div>
)
