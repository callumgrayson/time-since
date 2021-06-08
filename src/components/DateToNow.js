import React, { useState } from "react"
import Main from "./Main"
import moment from "moment-timezone"

const callumBirthDateTime = "1981-08-09T04:00"

const birthMomentMap = {
  callum: moment(callumBirthDateTime),
}

const DateToNow = () => {
  const [dateFrom, setDateFrom] = useState(birthMomentMap["callum"])

  const calcAge = (now) => {
    const nowMoment = moment(now)

    const diffYears = nowMoment.diff(dateFrom, "years")
    console.log(`diffYears`, diffYears)
    const laterYears = moment(dateFrom).add(diffYears, "years")
    console.log(`laterYears`, laterYears.format())

    const diffMonths = nowMoment.diff(laterYears, "months")
    console.log(`diffMonths`, diffMonths)
    const laterMonths = moment(laterYears).add(diffMonths, "months")
    console.log(`laterMonths`, laterMonths.format())

    const diffWeeks = nowMoment.diff(laterMonths, "weeks")
    console.log(`diffWeeks`, diffWeeks)
    const laterWeeks = moment(laterMonths).add(diffWeeks, "weeks")
    console.log(`laterWeeks`, laterWeeks.format())

    const diffDays = nowMoment.diff(laterWeeks, "days")
    console.log(`diffDays`, diffDays)
    const laterDays = moment(laterWeeks).add(diffDays, "days")
    console.log(`laterDays`, laterDays.format())

    const diffHours = nowMoment.diff(laterDays, "hours")
    console.log(`diffHours`, diffHours)
    const laterHours = moment(laterDays).add(diffHours, "hours")
    console.log(`laterHours`, laterHours.format())

    const diffMinutes = nowMoment.diff(laterHours, "minutes")
    console.log(`diffMinutes`, diffMinutes)
    const laterMinutes = moment(laterHours).add(diffMinutes, "minutes")
    console.log(`laterMinutes`, laterMinutes.format())

    const diffSeconds = nowMoment.diff(laterMinutes, "seconds")
    console.log(`diffSeconds`, diffSeconds)
    const laterSeconds = moment(laterMinutes).add(diffSeconds, "seconds")
    console.log(`laterSeconds`, laterSeconds.format())

    return `${diffYears} years, ${diffMonths} months, ${diffWeeks} weeks, ${diffDays} days, ${diffHours} hours, ${diffMinutes} minutes, ${diffSeconds} seconds`
  }
  return (
    <Main>
      <div>Date To Now</div>
      <div>Callum Birth Date {dateFrom.format()}</div>
      <div>Age: </div>
      <div>{calcAge(Date.now())}</div>
    </Main>
  )
}

export default DateToNow
