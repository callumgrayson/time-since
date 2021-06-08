import React from "react"
import { Slider, withStyles } from "@material-ui/core"
import Colors from "./ALStyles"

const ALSliderBase = withStyles({
  root: {
    height: 8,
    backgroundColor: "transparent",
  },
  thumb: {
    height: 16,
    width: 16,
    backgroundColor: Colors.green,
    border: "none",
    marginTop: -3,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "none",
    },
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.border,
  },
  valueLabel: {
    // border: "1px solid red",
    borderRadius: "6px",
    backgroundColor: Colors.border,
    width: 53,
    height: 35,
    // display: "flex",
    // justifyContent: "center",
    marginLeft: -8,
    marginTop: 0,

    "& > span": {
      height: 35,
      width: 35,
      backgroundColor: Colors.border,
      marginTop: 0,
      marginLeft: 10,
      borderRadius: "50% 50% 50% 3px",
      "& > span": {
        // border: "1px solid red",
        fontFamily: "Arial",
        fontWeight: 700,
        fontSize: "18px",
        color: Colors.darkest,
      },
    },
  },
})(Slider)

const ALSlider2 = ({ defaultValue, changeHandler, value }) => {
  return (
    <ALSliderBase
      aria-label="al slider"
      track={false}
      // getAriaValueText={valuetext}
      aria-labelledby="al-slider"
      step={1}
      valueLabelDisplay="on"
      onChange={changeHandler}
      // valueLabelFormat={(x) => `${x}%`}
      value={value}
    />
  )
}

export default ALSlider2
