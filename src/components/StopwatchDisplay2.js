import React, { useState, useEffect, useRef } from "react"
import Main from "./Main"
import Stopwatch from "./Stopwatch"
import moment from "moment-timezone"

/**
 * Goes with Stopwatch5
 */

const zoeBirthDateTime = "2021-02-12T05:47+01:00"
const callumBirthDateTime = "1981-08-09T04:00+12:00"
const lucileBirthDateTime = "1987-03-11T05:00+01:00"

const birthMap = {
  zoe: zoeBirthDateTime,
  callum: callumBirthDateTime,
  lucile: lucileBirthDateTime,
}

const birthMomentMap = {
  zoe: moment(zoeBirthDateTime),
  callum: moment(callumBirthDateTime),
  lucile: moment(lucileBirthDateTime),
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
    setDateFrom(birthMomentMap[name])
  }

  const stopwatchCallback = (now) => {
    const nowMoment = moment(now)

    const diffYears = nowMoment.diff(dateFrom, "years")
    const laterYears = moment(dateFrom).add(diffYears, "years")

    const diffMonths = nowMoment.diff(laterYears, "months")
    const laterMonths = moment(laterYears).add(diffMonths, "months")

    const diffWeeks = nowMoment.diff(laterMonths, "weeks")
    const laterWeeks = moment(laterMonths).add(diffWeeks, "weeks")

    const diffDays = nowMoment.diff(laterWeeks, "days")
    const laterDays = moment(laterWeeks).add(diffDays, "days")

    const diffHours = nowMoment.diff(laterDays, "hours")
    const laterHours = moment(laterDays).add(diffHours, "hours")

    const diffMinutes = nowMoment.diff(laterHours, "minutes")
    const laterMinutes = moment(laterHours).add(diffMinutes, "minutes")

    const diffSeconds = nowMoment.diff(laterMinutes, "seconds")

    return `${diffYears} years, ${diffMonths} months, ${diffWeeks} weeks, ${diffDays} days, ${diffHours} hours, ${diffMinutes} minutes, ${diffSeconds} seconds`
  }

  console.log("render", dateFrom)

  return (
    <Main>
      StopwatchDisplay1
      <div>Time</div>
      <div>
        <div>Time for {person}</div>
        <div>Time Unix {Boolean(dateFrom) ? dateFrom.format() : ""}</div>
        <Stopwatch dateFrom={Boolean(dateFrom)} callback={stopwatchCallback} />
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
        <button
          type="button"
          onClick={() => {
            handleDateChange("callum")
          }}
        >
          Callum
        </button>
      </div>
    </Main>
  )
}

export default StopwatchDisplay
