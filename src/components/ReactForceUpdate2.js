import React, { useEffect, useRef, useState } from "react"
import Main from "./Main"
const ReactForceUpdate2 = () => {
  const nodeRef = useRef()
  // const [intervalRef, setIntervalRef] = useState(null)
  const timesRef = useRef({})
  const [timesDisplay, setTimesDisplay] = useState(null)
  const [statusRAF, setStatusRAF] = useState("")
  const [statusST, setStatusST] = useState("")
  const [statusSI, setStatusSI] = useState("")
  const [stats, setStats] = useState({})
  const startStop = useRef({ start: null, stop: null })

  /**
   * RAF experiment
   */
  const runRAF = () => {
    setStatusRAF("running")
    let i = 0
    const start = Date.now()
    startStop.current.start = start
    const step = () => {
      if (i < 1000) {
        const now = Date.now()
        timesRef.current[i] = {
          elapsed: now - start,
          diffLast: i > 0 ? now - start - timesRef.current[i - 1].elapsed : 0,
        }

        i++
        requestAnimationFrame(step)
      } else {
        const stop = Date.now()
        startStop.current.stop = stop
        setTimesDisplay(timesRef.current)
        setStatusRAF("stopped")
      }
    }
    step()
    // console.log(`timesRef`, timesRef)
  }

  /**
   * SetTimeout experiment
   */
  const runST = () => {
    setStatusST("running")
    let i = 0
    const start = Date.now()
    startStop.current.start = start

    const step = () => {
      if (i < 1000) {
        const now = Date.now()
        timesRef.current[i] = {
          elapsed: now - start,
          diffLast: i > 0 ? now - start - timesRef.current[i - 1].elapsed : 0,
        }

        i++
        setTimeout(step, 16)
      } else {
        const stop = Date.now()
        startStop.current.stop = stop
        setTimesDisplay(timesRef.current)
        setStatusST("stopped")
        // handleStats(timesRef.current)
      }
    }
    step()
  }

  /**
   * SetTimeout experiment
   */
  const runSI = () => {
    setStatusSI("running")
    let i = 0
    const start = Date.now()
    startStop.current.start = start

    const step = () => {
      if (i < 1000) {
        const now = Date.now()
        timesRef.current[i] = {
          elapsed: now - start,
          diffLast: i > 0 ? now - start - timesRef.current[i - 1].elapsed : 0,
        }

        i++
      } else {
        clearInterval(currentInt)
        const stop = Date.now()
        startStop.current.stop = stop
        setTimesDisplay(timesRef.current)
        setStatusSI("stopped")
      }
    }
    let currentInt = setInterval(step, 16)
  }

  const calculateStats = () => {
    if (timesRef.current) {
      const timesObj = timesRef.current
      let sumElapsed = 0
      let sumDiffLast = 0
      Object.entries(timesObj).forEach((ent) => {
        // console.log(`ent`, ent)
        sumElapsed = sumElapsed + ent[1].elapsed
        sumDiffLast = sumDiffLast + ent[1].diffLast
      })
      const finalElapsed = timesObj[999].elapsed
      const avgDiffLast = sumDiffLast / 1000
      const startStopElapsed = startStop.current.stop - startStop.current.start
      setStats({
        finalElapsed: finalElapsed,
        sumDiffLast: sumDiffLast,
        avgDiffLast: avgDiffLast,
        startStopElapsed: startStopElapsed,
        start: startStop.current.start,
        stop: startStop.current.stop,
      })
    }
  }

  const handlerRAF = () => {
    timesRef.current = {}
    runRAF()
  }
  const handlerST = () => {
    timesRef.current = {}
    runST()
  }
  const handlerSI = () => {
    timesRef.current = {}
    runSI()
  }

  return (
    <Main>
      ReactForceUpdate 2
      <div>
        <button onClick={handlerRAF}>Run RAF</button>
        <div>{statusRAF === "running" ? "running RAF" : "idle"}</div>
      </div>
      <div>
        <button onClick={handlerST}>Run SetTimeout</button>
        <div>{statusST === "running" ? "running SetTimeout" : "idle"}</div>
      </div>
      <div>
        <button onClick={handlerSI}>Run SetInterval</button>
        <div>{statusSI === "running" ? "running SetInterval" : "idle"}</div>
      </div>
      <div>
        <button onClick={calculateStats}>Calculate Stats</button>
        <pre>{JSON.stringify(stats, null, 2)}</pre>
      </div>
      <pre>{JSON.stringify(timesDisplay, null, 2)}</pre>
    </Main>
  )
}

export default ReactForceUpdate2
