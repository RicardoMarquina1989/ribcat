import React from 'react'

export function YtenderLogo({ currentIndex }) {
  return (
    <div className="ytender-logo ytender-logo--header">
      <img src={`/images/logo/${currentIndex < 1 ? 'white' : 'titan'}.png`} id="ytender-logo" />
    </div>
  )
}
