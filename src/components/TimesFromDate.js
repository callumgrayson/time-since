import React, { useState } from "react"
import Main from "./Main"
import moment from "moment-timezone"
import InputDateTime from "./InputDateTime"

const formatFull = "dddd, MMMM Do YYYY, h:mm:ss a"
// const formatShort = "YYYY MMM DD"

const zoeBirthDateTime = "2021-02-12T05:47"
const callumBirthDateTime = "1981-08-09T04:00"
const lucileBirthDateTime = "1987-03-11T05:00"
const zoeBirthObject = new Date(zoeBirthDateTime)
const unixBirth = zoeBirthObject.valueOf()
const initialDate = zoeBirthDateTime

const birthMap = {
  zoe: zoeBirthDateTime,
  callum: callumBirthDateTime,
  lucile: lucileBirthDateTime,
}

const TimesFromDate = () => {
  const [dateTime, setDateTime] = useState(initialDate)

  const handleDateTimeChange = (inVal) => {
    const val = inVal.target.value
    // console.log("val", val)
    setDateTime(val)
  }
  const resetHandler = (e) => {
    const { value } = e.target
    const newDate = birthMap[value]
    setDateTime(newDate)
  }

  const zoeBirthObject = new Date(dateTime)
  const momentBirth = moment(zoeBirthObject)
  const now = Date.now()
  const unixDate = zoeBirthObject.valueOf()
  const differenceMs = now - unixDate
  const differenceS = differenceMs / 1000
  const differenceMins = differenceMs / 1000 / 60
  const differenceSHours = differenceMs / 1000 / 60 / 60
  const differenceSDays = differenceMs / 1000 / 60 / 60 / 24
  const differenceSWeeks = differenceMs / 1000 / 60 / 60 / 24 / 7
  const diffMonths = moment().diff(momentBirth, "months", true)
  const diffYears = moment().diff(momentBirth, "years", true)

  const differencesArray = [
    { unit: "Milliseconds", value: differenceMs },
    { unit: "Seconds", value: differenceS },
    { unit: "Minutes", value: differenceMins },
    { unit: "Hours", value: differenceSHours },
    { unit: "Days", value: differenceSDays },
    { unit: "Weeks", value: differenceSWeeks },
    { unit: "Months", value: diffMonths },
    { unit: "Years", value: diffYears },
  ]

  const formatTimes = (str) =>
    str.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

  return (
    <Main>
      Times From Date
      <InputDateTime value={dateTime} changeHandler={handleDateTimeChange} />
      <button type="button" onClick={resetHandler} value="zoe">
        Zoé
      </button>
      <button type="button" onClick={resetHandler} value="callum">
        Callum
      </button>
      <button type="button" onClick={resetHandler} value="lucile">
        Lucile
      </button>
      <div>{momentBirth.format(formatFull)}</div>
      <div>{unixBirth}</div>
      <div>{now}</div>
      <table>
        <thead>
          <tr>
            <th>Unit</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {differencesArray.map((obj) => (
            <tr>
              <td>{obj.unit}</td>
              <td style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "Courier" }}>
                  {formatTimes(obj.value)}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Main>
  )
}

export default TimesFromDate
