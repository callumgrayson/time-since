import React, { useState, useEffect, useRef } from "react"
import Main from "./Main"
import Stopwatch from "./Stopwatch"
import moment from "moment-timezone"

const numberStyle = {
  textAlign: "right",
  width: "200px",
  fontFamily: "courier",
}

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

const delay = 100

const stopwatchCallback = ({ now, dateFrom }) => {
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

  const diffAsSeconds = nowMoment.diff(dateFrom, "seconds")
  const diffAsMinutes = nowMoment.diff(dateFrom, "minutes", true)
  const diffAsHours = nowMoment.diff(dateFrom, "hours", true)
  const diffAsDays = nowMoment.diff(dateFrom, "days", true)
  const diffAsWeeks = nowMoment.diff(dateFrom, "weeks", true)
  const diffAsMonths = nowMoment.diff(dateFrom, "months", true)
  const diffAsYears = nowMoment.diff(dateFrom, "years", true)

  return {
    split: `${diffYears} years, ${diffMonths} months, ${diffWeeks} weeks, ${diffDays} days, ${diffHours} hours, ${diffMinutes} minutes, ${diffSeconds} seconds`,
    seconds: diffAsSeconds.toLocaleString(),
    minutes: diffAsMinutes.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
    hours: diffAsHours.toLocaleString(undefined, {
      minimumFractionDigits: 4,
      maximumFractionDigits: 4,
    }),
    days: diffAsDays.toLocaleString(undefined, {
      minimumFractionDigits: 5,
      maximumFractionDigits: 5,
    }),
    weeks: diffAsWeeks.toLocaleString(undefined, {
      minimumFractionDigits: 6,
      maximumFractionDigits: 6,
    }),
    months: diffAsMonths.toLocaleString(undefined, {
      minimumFractionDigits: 7,
      maximumFractionDigits: 7,
    }),
    years: diffAsYears.toLocaleString(undefined, {
      minimumFractionDigits: 8,
      maximumFractionDigits: 8,
    }),
  }
}

const StopwatchDisplay = () => {
  const [person, setPerson] = useState("")
  const [dateFrom, setDateFrom] = useState(null)

  // const timeDisplay = useRef(null)
  const siRef = useRef(null) // Holds setInterval ref
  const splitRef = useRef(null)
  const secondsRef = useRef(null)
  const minutesRef = useRef(null)
  const hoursRef = useRef(null)
  const daysRef = useRef(null)
  const weeksRef = useRef(null)
  const monthsRef = useRef(null)
  const yearsRef = useRef(null)

  const handleDateChange = (name) => {
    setPerson(personMap[name])
    setDateFrom(birthMomentMap[name])
  }

  useEffect(() => {
    if (!dateFrom) return

    function step() {
      const valuesObj = stopwatchCallback({ now: Date.now(), dateFrom })
      splitRef.current.innerText = valuesObj.split
      secondsRef.current.innerText = valuesObj.seconds
      minutesRef.current.innerText = valuesObj.minutes
      hoursRef.current.innerText = valuesObj.hours
      daysRef.current.innerText = valuesObj.days
      weeksRef.current.innerText = valuesObj.weeks
      monthsRef.current.innerText = valuesObj.months
      yearsRef.current.innerText = valuesObj.years
    }

    siRef.current = setInterval(step, delay)

    return () => {
      clearInterval(siRef.current)
    }
  }, [dateFrom])

  // console.log("render", dateFrom)

  return (
    <Main>
      StopwatchDisplay3
      <div>Time</div>
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
      <div>
        <div>Time for {person}</div>
        <div>Time Unix {Boolean(dateFrom) ? dateFrom.format() : ""}</div>
        <br />

        <div>
          <div ref={splitRef}></div>
          <br />
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <div ref={yearsRef} style={numberStyle}></div>
                  </td>
                  <td>Years</td>
                </tr>
                <tr>
                  <td>
                    <div ref={monthsRef} style={numberStyle}></div>
                  </td>
                  <td>Months</td>
                </tr>
                <tr>
                  <td>
                    <div ref={weeksRef} style={numberStyle}></div>
                  </td>
                  <td>Weeks</td>
                </tr>
                <tr>
                  <td>
                    <div ref={daysRef} style={numberStyle}></div>
                  </td>
                  <td>Days</td>
                </tr>
                <tr>
                  <td>
                    <div ref={hoursRef} style={numberStyle}></div>
                  </td>
                  <td>Hours</td>
                </tr>
                <tr>
                  <td>
                    <div ref={minutesRef} style={numberStyle}></div>
                  </td>
                  <td>Minutes</td>
                </tr>
                <tr>
                  <td>
                    <div ref={secondsRef} style={numberStyle}></div>
                  </td>
                  <td>Seconds</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Main>
  )
}

export default StopwatchDisplay

const useCountup = ({ callback }) => {}
