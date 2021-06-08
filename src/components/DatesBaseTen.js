import React, { useState } from "react"
import Main from "./Main"
import moment from "moment-timezone"
import InputDateTime from "./InputDateTime"

const base10sMap = [
  { unit: "seconds", value: 10000 },
  { unit: "seconds", value: 100000 },
  { unit: "seconds", value: 1000000 },
  { unit: "seconds", value: 10000000 },
  { unit: "seconds", value: 100000000 },
  { unit: "seconds", value: 1000000000 },

  { unit: "minutes", value: 1000 },
  { unit: "minutes", value: 10000 },
  { unit: "minutes", value: 100000 },
  { unit: "minutes", value: 1000000 },
  { unit: "minutes", value: 10000000 },

  { unit: "hours", value: 100 },
  { unit: "hours", value: 1000 },
  { unit: "hours", value: 10000 },
  { unit: "hours", value: 100000 },
  { unit: "hours", value: 1000000 },

  { unit: "days", value: 1 },
  { unit: "days", value: 10 },
  { unit: "days", value: 100 },
  { unit: "days", value: 1000 },
  { unit: "days", value: 10000 },

  { unit: "weeks", value: 1 },
  { unit: "weeks", value: 10 },
  { unit: "weeks", value: 100 },
  { unit: "weeks", value: 1000 },

  { unit: "months", value: 1 },
  { unit: "months", value: 10 },
  { unit: "months", value: 100 },
  { unit: "months", value: 1000 },
]

// const zoeBirthDateTime = "2021-02-12 05:47+01:00"
const zoeBirthDateTime = "2021-02-12T05:47"
const zoeBirthObject = new Date(zoeBirthDateTime)
const formatFull = "dddd, MMMM Do YYYY, h:mm:ss a"
const formatShort = "YYYY MMM DD"

const getDisplayDates = (inDateString) => {
  const momentBirth = moment(inDateString)
  const baseArray = base10sMap.map((baseObj) => {
    const momentBase = moment(inDateString).add(baseObj.value, baseObj.unit)

    return {
      ...baseObj,
      valueUnix: momentBase.unix(),
      display: momentBase.format(formatFull),
      short: momentBase.format(formatShort),
      future: momentBase.unix() * 1000 - Date.now() > 0,
      age: momentBase.from(momentBirth, true),
    }
  })

  const sortedDates = baseArray.sort((a, b) => a.valueUnix - b.valueUnix)

  return sortedDates
}

// const initialDate = new Date().toISOString().split(":").slice(0, 2).join(":")
const initialDate = zoeBirthDateTime
// console.log("initialDate", initialDate)

const DatesBaseTen = () => {
  const [dateTime, setDateTime] = useState(initialDate)

  const handleDateTimeChange = (inVal) => {
    const val = inVal.target.value
    // console.log("val", val)
    setDateTime(val)
  }
  const resetHandler = () => {
    setDateTime(initialDate)
  }

  const displayDates = getDisplayDates(dateTime)

  return (
    <Main>
      <h1>Dates base ten</h1>
      <div>Zoe's birthdate is:</div>
      <div>{zoeBirthObject.valueOf()}</div>
      <div>{zoeBirthObject.toDateString()}</div>
      <div>{zoeBirthObject.toLocaleString()}</div>
      <br />
      <InputDateTime value={dateTime} changeHandler={handleDateTimeChange} />
      <button type="button" onClick={resetHandler}>
        Reset
      </button>
      <br />
      <div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Versary Type</th>
              <th>Date and Time</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {displayDates.map((baseObj) => (
              <tr
                key={`${baseObj.value}${baseObj.unit}`}
                style={{ color: `${baseObj.future ? "black" : "lightgray"}` }}
              >
                <td>{baseObj.short}</td>
                <td>
                  {baseObj.value.toLocaleString()} {baseObj.unit}
                </td>
                <td>{baseObj.display}</td>
                <td>{baseObj.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Main>
  )
}

export default DatesBaseTen
