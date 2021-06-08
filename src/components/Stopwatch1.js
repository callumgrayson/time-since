import React, { useState, useEffect, useRef } from "react"
import Main from "./Main"
const Stopwatch1 = () => {
  const [elapsedTime, setElapsedTime] = useState(0)
  const [delay, setDelay] = useState(null)
  const start = useRef(null)
  const stop = useRef(null)
  const [secs, setSecs] = useState([])

  useInterval(() => {
    setElapsedTime(elapsedTime + 1000)
    if (start.current) setSecs([...secs, Date.now() - start.current])
  }, delay)

  const handlePause = () => {
    const stopTime = Date.now()
    if (delay === null) {
      setDelay(1000)
      start.current = stopTime
    } else {
      setDelay(null)
      stop.current = stopTime
    }
  }
  const handleReset = () => {
    setElapsedTime(0)
    start.current = null
    stop.current = null
  }
  console.log("render")

  const diff =
    start.current && stop.current ? stop.current - start.current : null
  return (
    <Main>
      Stopwatch1
      <div>Time</div>
      <div>{elapsedTime / 1000}</div>
      <div>Start {start.current}</div>
      <div>Stop {stop.current}</div>
      <div>
        <span>Difference</span>
        <span>{diff}</span>
      </div>
      <div>
        <button type="button" onClick={handlePause}>
          {delay ? "Stop" : "Start"}
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </Main>
  )
}

export default Stopwatch1

function useInterval(callback, delay) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
