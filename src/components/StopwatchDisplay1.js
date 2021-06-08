import React, { useState, useEffect, useRef } from "react"
import Main from "./Main"
import Stopwatch from "./Stopwatch"

const zoeBirthDateTime = "2021-02-12T05:47"
const callumBirthDateTime = "1981-08-09T04:00"
const lucileBirthDateTime = "1987-03-11T05:00"

const birthMap = {
  zoe: zoeBirthDateTime,
  callum: callumBirthDateTime,
  lucile: lucileBirthDateTime,
}

const personMap = {
  zoe: "Zoe",
  callum: "Callum",
  lucile: "Lucile",
}

const StopwatchDisplay = () => {
  const [person, setPerson] = useState("")
  const [dateFrom, setDateFrom] = useState(null)

  const handleDateChange = (name) => {
    setPerson(personMap[name])
    setDateFrom(new Date(birthMap[name]).valueOf())
  }

  const stopwatchCallback = (now) => {
    const diff = now - dateFrom
    return diff
  }

  console.log("render", dateFrom)

  return (
    <Main>
      StopwatchDisplay1
      <div>Time</div>
      <div>
        <div>Time for {person}</div>
        <div>Time Unix {dateFrom}</div>
        <Stopwatch dateFrom={dateFrom} callback={stopwatchCallback} />
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            handleDateChange("lucile")
          }}
        >
          Lulu
        </button>
        <button
          type="button"
          onClick={() => {
            handleDateChange("zoe")
          }}
        >
          Zoe
        </button>
      </div>
    </Main>
  )
}

export default StopwatchDisplay
