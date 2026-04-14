import React, { useEffect, useRef, useState } from 'react'
import './CustomCursor.css'

/**
 * CustomCursor — replaces the default OS cursor with a branded dot + ring.
 * Only renders on non-touch devices.
 */
export default function CustomCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const [hovering,  setHovering]  = useState(false)
  const [clicking,  setClicking]  = useState(false)
  const [isTouch,   setIsTouch]   = useState(false)

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window) {
      setIsTouch(true)
      return
    }

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e
      if (dotRef.current)  { dotRef.current.style.left  = `${x}px`; dotRef.current.style.top  = `${y}px` }
      if (ringRef.current) { ringRef.current.style.left = `${x}px`; ringRef.current.style.top = `${y}px` }
    }

    const handleEnter = () => setHovering(true)
    const handleLeave = () => setHovering(false)
    const handleDown  = () => setClicking(true)
    const handleUp    = () => setClicking(false)

    // Attach hover state to all interactive elements
    const interactives = document.querySelectorAll('a, button, [role="button"], input, textarea, .project-card')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousedown', handleDown)
    window.addEventListener('mouseup',   handleUp)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousedown', handleDown)
      window.removeEventListener('mouseup',   handleUp)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [])

  if (isTouch) return null

  return (
    <>
      <div ref={dotRef}  className={`cursor-dot  ${clicking  ? 'clicking'  : ''}`} />
      <div ref={ringRef} className={`cursor-ring ${hovering  ? 'hovering'  : ''}`} />
    </>
  )
}
