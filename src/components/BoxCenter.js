import React from 'react'

export default () => (
  <svg className="boxCenter" width="140" height="140">
    <defs>
      <pattern id="wovk" patternUnits="userSpaceOnUse" width="20" height="20">
        <circle
          cx="10"
          cy="10"
          r="4"
          fill="transparent"
          stroke="#343434"
          strokeWidth="2"
        />
      </pattern>
    </defs>
    <path d="M 0 0 L 0 140 L 140 140 L 140 0 Z" fill="url(#wovk)" />
  </svg>
)
