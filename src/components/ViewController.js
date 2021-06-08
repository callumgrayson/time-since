import React, { useState } from "react"
import ViewOptions from "./ViewOptions"
import BackButton from "./BackButton"
import DatesBaseTen from "./DatesBaseTen"
import SVGExperiments from "./SVGExperiments"
import TimesFromDate from "./TimesFromDate"
import StopwatchDisplay3 from "./StopwatchDisplay3"

const optionsMap = {
  // ReactSelect,
  DatesBaseTen,
  // Ideas,
  // CronJobs,
  // ALMobilePreview,
  // ALSpeechBubble,
  // ALCategoriesSelect,
  // ALNestedSelects,
  SVGExperiments,
  // ALSwitch,
  // ALSliderDisplay,
  // ALTemplateCardDisplay,
  // ReactForceUpdate1,
  TimesFromDate,
  // ALActivityCardDisplay,
  // ALPictureAnnotateDisplay,
  // Stopwatch1,
  // Stopwatch2,
  // Stopwatch3,
  // ReactForceUpdate2,
  // StopwatchDisplay1,
  // StopwatchDisplay2,
  StopwatchDisplay3,
  // DateToNow,
}
const ViewController = () => {
  const [viewId, setViewId] = useState("StopwatchDisplay3")
  const DisplayPage = optionsMap[viewId]

  const handleViewOption = (id) => {
    if (!id) {
      setViewId("")
    } else {
      setViewId(id)
    }
  }

  const optionsArray = Object.keys(optionsMap).map((item) => ({
    id: item,
    handler: () => handleViewOption(item),
  }))

  if (viewId !== "") {
    return (
      <div>
        <BackButton handler={() => handleViewOption("")} />
        <DisplayPage />
      </div>
    )
  }

  return <ViewOptions options={optionsArray} />
}

export default ViewController
