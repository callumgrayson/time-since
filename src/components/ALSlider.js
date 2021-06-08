import React from "react"
import { Slider, makeStyles, withStyles } from "@material-ui/core"
import Tooltip from "@material-ui/core/Tooltip"
import Colors from "./ALStyles"

const useStylesTooltip = makeStyles(() => ({
  arrow: {
    color: Colors.border,
    "&:before": {
      borderRadius: 3,
    },
  },
  tooltip: {
    width: 53,
    height: 35,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.border,
    fontFamily: "Manrope",
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.darkest,
    marginBottom: 12,
  },
}))

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
})(Slider)

function ValueLabelComponent(props) {
  const { children, open, value } = props

  const classes = useStylesTooltip()

  return (
    <Tooltip
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={value}
      classes={classes}
      arrow
    >
      {children}
    </Tooltip>
  )
}

const ALSlider = ({ defaultValue, changeHandler, value }) => {
  return (
    <ALSliderBase
      aria-label="al slider"
      track={false}
      // getAriaValueText={valuetext}
      aria-labelledby="al-slider"
      step={1}
      valueLabelDisplay="on"
      ValueLabelComponent={ValueLabelComponent}
      onChange={changeHandler}
      value={value}
    />
  )
}

export default ALSlider
