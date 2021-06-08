import React from "react"
import { makeStyles } from "@material-ui/core"
import Colors from "./ALStyles"
import { ReactComponent as Tick } from "./svg/tick_11x8.svg"
import { ReactComponent as TickBox } from "./svg/tickBox.svg"

const green = Colors.green
// const gray = Colors.border
const squareDim = 20

const useStyles = makeStyles({
  tickGroup: {
    height: squareDim,
    width: squareDim,
    position: "relative",
    boxSizing: "border-box",
    // top: 8,
    // left: 8,
  },
  tickBox: {
    position: "absolute",
    height: squareDim,
    width: squareDim,
    top: 0,
    left: 0,
    zIndex: 1,
    fill: "transparent",
    backgroundColor: "transparent",
    "& rect": {
      fill: ({ selectedState }) =>
        selectedState === "all" ? green : "transparent",
      stroke: ({ selected }) => (selected ? green : Colors.border),
    },
  },
  tickCenter: {
    height: squareDim,
    width: squareDim,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    backgroundColor: "transparent",
  },
  tick1: {
    height: 8,
    zIndex: 3,
    fill: "transparent",
    "& path": {
      fill: "#FFFFFF",
    },
  },
  tick2: {
    height: 8,
    zIndex: 3,
    fill: "transparent",
    "& path": {
      fill: green,
    },
  },
  partialDot: {
    height: 8,
    width: 8,
    backgroundColor: green,
    borderRadius: "3px",
  },
})

const ALTickToggle = ({ selectedState }) => {
  const classes = useStyles({
    selectedState,
    selected:
      selectedState === "all" ||
      selectedState === "some" ||
      selectedState === "subOn",
  })
  // console.log("selectedState", selectedState)
  return (
    <div className={classes.tickGroup}>
      <div className={classes.tickCenter}>
        {selectedState === "all" ? <Tick className={classes.tick1} /> : null}
        {selectedState === "some" ? (
          <div className={classes.partialDot}></div>
        ) : null}
        {selectedState === "subOn" ? <Tick className={classes.tick2} /> : null}
      </div>
      <TickBox className={classes.tickBox} />
    </div>
  )
}

export default ALTickToggle
