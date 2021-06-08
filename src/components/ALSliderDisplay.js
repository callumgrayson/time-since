import React, { useState } from "react"
import Main from "./Main"
// import ALSlider from "./ALSlider"
import ALSlider2 from "./ALSlider2"

const ALSliderDisplay = () => {
  const [valueSlider, setValueSlider] = useState(27)
  const changeHandler = (_, newValue) => {
    if (newValue >= 0) {
      setValueSlider(newValue)
    }
  }
  return (
    <Main>
      <div>
        <h1>ALSliderDisplay</h1>

        {/* <ALSlider
          defaultValue={80}
          aria-labelledby="al-slider"
          changeHandler={changeHandler}
          value={valueSlider}
        /> */}
        <ALSlider2
          defaultValue={80}
          aria-labelledby="al-slider"
          changeHandler={changeHandler}
          value={valueSlider}
        />
      </div>
    </Main>
  )
}

export default ALSliderDisplay
