import React, { useState, useRef, useEffect } from "react"

const refUpdater = (sRef, status) => {
  console.log("refUpdater", status)
  console.log("sRef.current", sRef.current)
  // console.log("sRef.current.innerHtml", sRef.current.innerHtml)
  if (status === "start") {
    sRef.current = <div>Hi back</div>
  }
}

const SecondsRef = React.forwardRef((props, ref) => (
  <div ref={ref}>Hello there</div>
))

const CronJobs = () => {
  const secondsRef = useRef()
  const [isActive, setIsActive] = useState(false)
  const delay = 1000

  const handleClick = () => {
    setTimeout(() => {
      setIsActive(!isActive)
    }, delay)
  }

  useEffect(() => {
    if (isActive) {
      refUpdater(secondsRef, "start")
    } else {
      refUpdater(secondsRef, "stop")
    }
    return () => {
      refUpdater(secondsRef, "stop")
    }
  }, [isActive])

  return (
    <div>
      <h1>Cron Jobs</h1>
      <button type="button" onClick={handleClick}>
        Start
      </button>
      <div
        style={{
          backgroundColor: isActive ? "green" : "red",
        }}
      >
        {isActive ? "Is Active" : "Is not Active"}
      </div>
      {/* <div ref={secondsRef}>secondsRef</div> */}
      <SecondsRef ref={secondsRef} />
    </div>
  )
}

export default CronJobs
