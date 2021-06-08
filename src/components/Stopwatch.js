import React, { useState, useEffect, useRef, useCallback } from "react"

const delay = 100

const Stopwatch = ({ dateFrom, callback, children }) => {
  console.log(`children`, children)
  const timeDisplay = useRef(null)

  const siRef = useRef(null) // Holds setInterval ref

  useEffect(() => {
    if (!dateFrom) return

    function step() {
      const value = callback(Date.now())
      timeDisplay.current.innerText = value
    }

    siRef.current = setInterval(step, delay)

    return () => {
      clearInterval(siRef.current)
    }
  }, [dateFrom, callback])

  return (
    <div
      ref={timeDisplay}
      style={{
        fontFamily: "courier",
        border: "1px solid red",
      }}
    >
      0
    </div>
  )
}

export default Stopwatch
