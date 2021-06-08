import React from "react"
import { makeStyles, withStyles } from "@material-ui/core"
// import { ThemeProvider } from "@material-ui/core/styles"
import Switch from "@material-ui/core/Switch"
import Main from "./Main"
import Colors from "./ALStyles"

const useStyles = makeStyles({
  switchBox: {
    border: "none",
    width: "fit-content",
    borderRadius: 7,
  },
})

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 50,
    height: 23,
    padding: 0,
    display: "flex",
    "&:hover": {
      "& .MuiIconButton-root": {
        borderRadius: 6,
      },
    },
  },
  switchBase: {
    padding: 4,
    "&$checked": {
      transform: "translateX(27px)",
      color: Colors.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: Colors.green,
        borderColor: "#transparent",
      },
    },
  },
  thumb: {
    width: 15,
    height: 15,
    boxShadow: "none",
    borderRadius: 3,
    backgroundColor: Colors.white,
    "&:focus": {
      outline: "none",
    },
  },
  track: {
    border: "none",
    borderRadius: 6,
    opacity: 1,
    backgroundColor: Colors.border,
  },
  checked: {},
}))(Switch)

export const ALSwitch = () => {
  const classes = useStyles()
  return (
    <Main>
      {/* <ThemeProvider> */}
      <div className={classes.switchBox}>
        <AntSwitch disableRipple />
      </div>
      {/* </ThemeProvider> */}
    </Main>
  )
}

export default ALSwitch
