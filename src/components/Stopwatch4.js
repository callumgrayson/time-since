import React, { useState, useEffect, useRef, useCallback } from "react"

const delay = 100

/**
 *
 * This is the first component which would take a start date and a callback
 * and return a value to display in the DOM ref
 * It worked with StopwatchDisplay1
 *
 */
const Stopwatch = ({ dateFrom, callback }) => {
  console.log(`dateFrom`, dateFrom)
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
        width: "200px",
        textAlign: "right",
        border: "1px solid red",
      }}
    >
      0
    </div>
  )
}

export default Stopwatch
