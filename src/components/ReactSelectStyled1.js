import React from "react"
import Main from "./Main"
import Select from "react-select"

const colourOptions = [
  { value: 1, label: "1 - First slide" },
  { value: 2, label: "2 - Second slide" },
  { value: 3, label: "3 - Third slide" },
]

const handleChange = (optionObj, actionObj) => {
  console.log("optionObj, actionObj", optionObj, actionObj)
}

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: 80,
    border: "1px solid #DFE2E6",
    borderRadius: 3,
  }),
  option: (provided, state) => ({
    ...provided,
    border: "1px dashed red",
    padding: 3,
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
  }),
  menu: (provided) => ({
    ...provided,
  }),
  menuList: (provided) => ({
    ...provided,
    maxHeight: 150,
    border: "1px solid cyan",
    overflow: "auto",
  }),
  valueContainer: (provided) => ({
    ...provided,
    border: "1px solid blue",
  }),
  container: (provided) => ({
    ...provided,
    maxWidth: 300,
    border: "1px solid violet",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = "opacity 300ms"

    return { ...provided, opacity, transition, border: "1px solid gold" }
  },
}

const ReactSelect = () => {
  return (
    <Main>
      <div>ReactSelectStyled1</div>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={colourOptions[0]}
        // isDisabled={isDisabled}
        // isLoading={isLoading}
        // isClearable={isClearable}
        // isRtl={isRtl}
        // isSearchable={isSearchable}
        name="color"
        options={colourOptions}
        onChange={handleChange}
        styles={customStyles}
      />
    </Main>
  )
}

export default ReactSelect
