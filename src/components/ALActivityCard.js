import React from "react"
import Colors from "./ALStyles"
import { makeStyles } from "@material-ui/core"
import { ReactComponent as ActivityBG } from "./svg/activity_bg.svg"

const useStyles = makeStyles({
  card: {
    width: 150,
    height: 125,
    border: "none",
    backgroundColor: "transparent",
    borderRadius: "15px",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 0,
  },
  topBox: {
    top: 30,
    zIndex: 1,
    position: "absolute",
  },
  bottomBox: {
    position: "absolute",
    zIndex: 1,
    bottom: 18,
    fontFamily: "Manrope",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "19px",
    textAlign: "center",
    color: "#FFFFFF",
    maxWidth: "120px",
  },
})

const ALActivityCard = ({ text, Icon }) => {
  const classes = useStyles()

  // if (!text || !icon) {
  //   return null
  // }

  return (
    <div className={classes.card}>
      <ActivityBG className={classes.bg} />
      <div className={classes.topBox}>
        <Icon height="20px" />
      </div>
      <div className={classes.bottomBox}>
        <div>{text}</div>
      </div>
    </div>
  )
}

export default ALActivityCard
