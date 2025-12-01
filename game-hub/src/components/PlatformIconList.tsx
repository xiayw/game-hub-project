import React from 'react'
import type { Platform } from '../hooks/useGames'
interface Props{
    platforms: Platform[]
}
const PlatformIconList = ({platforms}: Props) => {
  return (
    <div>PlatformIconList</div>
  )
}

export default PlatformIconList