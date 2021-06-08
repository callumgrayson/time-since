import React, { useState } from "react"
import Main from "./Main"
import Select, { components } from "react-select"

const options = [
  { value: 1, label: "1 - First slide" },
  { value: 2, label: "2 - Second slide" },
  { value: 3, label: "3 - Third slide" },
  { value: 4, label: "4 - Fourth slide" },
  { value: 5, label: "5 - Fifth slide" },
  { value: 6, label: "6 - Sixth slide" },
  { value: 7, label: "7 - Seventh slide" },
  { value: 8, label: "8 - Eighth slide" },
  { value: 888, label: "888 - Eight Hundred and Eigthy-Eighth slide" },
]

const valueSnip = (valString) => {
  if (!valString) {
    return ""
  }
  const snipped = valString.split(" ")[0]
  return {
    label: snipped,
  }
}

const Colors = {
  border: "#DFE2E6",
  downChevron: "#111111",
}

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: 80,
    border: `1px solid ${Colors.border}`,
    borderRadius: 3,
  }),
  option: (provided) => ({
    ...provided,
    padding: 3,
    border: "1px solid red",
    "option-strong": {
      color: "green",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "black",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    backgroundColor: `${Colors.border}`,
    color: `${Colors.downChevron}`,
  }),
  menu: (provided) => ({
    ...provided,
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: 150,
    overflow: "auto",
  }),
  valueContainer: (provided) => ({
    ...provided,
  }),
  container: (provided) => ({
    ...provided,
    maxWidth: 300,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
  }),
  indicator: (provided) => ({
    ...provided,

    color: "red",
    border: "1px solid red",
    borderColor: "red",
    backgroundColor: "red",
  }),
}

const Option = (props) => {
  console.log("Option props", props)
  const content = props.children

  return (
    <components.Option {...props}>
      <div className="option-strong">{content}</div>
    </components.Option>
  )
}

const ReactSelectJumpTo = () => {
  const [selected, setSelected] = useState("")
  const handleChange = (optionObj, actionObj) => {
    setSelected(optionObj.label)
  }

  return (
    <Main>
      <div>ReactSelectJumpTo</div>
      <div>The selected option is: {selected}</div>
      <Select
        className="basic-single"
        classNamePrefix="select"
        components={{ Option }}
        name="custom-options"
        options={options}
        onChange={handleChange}
        value={valueSnip(selected)}
        styles={customStyles}
        placeholder=""
      />
    </Main>
  )
}

export default ReactSelectJumpTo
