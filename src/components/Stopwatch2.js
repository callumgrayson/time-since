import React, { useState, useEffect, useRef } from "react"
import Main from "./Main"

const Stopwatch2 = () => {
  const timeDisplay = useRef(null)
  const siRef = useRef(null)
  const elapsedRef = useRef(0)
  const start = useRef(null)
  const stop = useRef(null)
  const cumulativeTime = useRef(0)

  /**
   * Change to a hook that
   * takes a DOM element
   * takes a start/stop function
   * takes a reset function
   * then calls raf and calculates what to show in the DOM element
   *    - based on time passed since start
   * takes a callback to tell the parent what the time is at stop
   * Hook should be completely stand alone and never cause a render
   */
  function step() {
    const tenth = start.current ? Date.now() - start.current : 0
    elapsedRef.current = tenth
    timeDisplay.current.innerText = elapsedRef.current
  }

  const handleStartStop = () => {
    console.log("handleStart called")
    if (siRef.current) {
      stop.current = Date.now()
      console.log("stopping")
      clearInterval(siRef.current)
      siRef.current = null
    } else {
      start.current = Date.now()
      console.log("starting")
      siRef.current = setInterval(step, 100)
    }
  }

  const handleReset = () => {
    start.current = null
    stop.current = null
    siRef.current = null
    elapsedRef.current = 0
    timeDisplay.current.innerText = 0
  }
  console.log("render")

  return (
    <Main>
      Stopwatch2
      <div>Time</div>
      <div>
        <span>Time: </span>
        <span ref={timeDisplay}>Time here...</span>
      </div>
      <div>
        <button type="button" onClick={handleStartStop}>
          {start.current ? "Stop" : "Start"}
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </Main>
  )
}

export default Stopwatch2
