import React, { useState } from "react"
import Main from "./Main"
import Select from "react-select"

const colourOptions = [
  { value: "red", label: "Red" },
  { value: "blue", label: "Blue" },
  { value: "orange", label: "Orange" },
  { value: 1, label: "1 - First slide" },
  { value: 2, label: "2 - Second slide" },
  { value: 3, label: "3 - Third slide" },
]

const ReactSelect = () => {
  const [selected, setSelected] = useState("")
  const handleChange = (optionObj, actionObj) => {
    // console.log("optionObj, actionObj", optionObj, actionObj)
    setSelected(optionObj.label)
  }
  return (
    <Main>
      <div>ReactSelectBasic</div>
      <div>The selected option is: {selected}</div>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={colourOptions[0]}
        name="color"
        options={colourOptions}
        onChange={handleChange}
      />
    </Main>
  )
}

export default ReactSelect
