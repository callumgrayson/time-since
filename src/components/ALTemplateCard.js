import React from "react"
import Colors from "./ALStyles"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  card: {
    width: 228,
    height: 249,
    border: "none",
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    position: "relative",
  },
  bottomBox: {
    width: "100%",
    height: 193,
    border: "none",
    backgroundColor: Colors.border,
    borderRadius: "0 0 12px 12px",
    position: "absolute",
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  topBox: {
    padding: "16px 20px",
    color: Colors.darkx2,
    fontFamily: "Manrope",
    fontWeight: 600,
    fontSize: "16px",
  },
})

const ALTemplateCard = ({ title, Icon }) => {
  const classes = useStyles()

  if (!title || !Icon) {
    return null
  }

  return (
    <div className={classes.card}>
      <div className={classes.topBox}>{title}</div>
      <div className={classes.bottomBox}>
        <Icon />
      </div>
    </div>
  )
}

export default ALTemplateCard
