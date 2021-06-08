import React, { useState, useEffect, useRef } from "react"
import Main from "./Main"

const Stopwatch3 = () => {
  const timeDisplay = useRef(null)

  const siRef = useRef(null) // Holds setInterval ref

  const elapsedRef = useRef(0) // Current elapsed session
  const cumulativeRef = useRef(0) // Sum of previous elapsed sessions

  const start = useRef(null)
  const stop = useRef(null)

  const [isRunning, setIsRunning] = useState(false)

  function step() {
    const newElapsed = start.current ? Date.now() - start.current : 0
    elapsedRef.current = newElapsed
    timeDisplay.current.innerText = cumulativeRef.current
      ? cumulativeRef.current + newElapsed
      : newElapsed
  }

  const handleStartStop = () => {
    // console.log("handleStart called")
    if (siRef.current) {
      // Code to Pause
      stop.current = Date.now()
      cumulativeRef.current = cumulativeRef.current + elapsedRef.current
      elapsedRef.current = 0
      console.log("stopping")
      clearInterval(siRef.current)
      siRef.current = null
      setIsRunning(false)
    } else {
      // Code to Start
      start.current = Date.now()
      console.log("starting")
      siRef.current = setInterval(step, 100)
      setIsRunning(true)
    }
  }

  const handleReset = () => {
    clearInterval(siRef.current)

    start.current = null
    stop.current = null
    siRef.current = null
    elapsedRef.current = 0
    timeDisplay.current.innerText = 0
    cumulativeRef.current = 0
  }
  console.log("render")

  return (
    <Main>
      Stopwatch3
      <div>Time</div>
      <div>
        <span>Time: </span>
        <span ref={timeDisplay}>0</span>
      </div>
      <div>
        <button type="button" onClick={handleStartStop}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </Main>
  )
}

export default Stopwatch3
