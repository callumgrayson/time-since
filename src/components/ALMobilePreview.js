import React from "react"
import Main from "./Main"
import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { ReactComponent as MobileOutline } from "./MobileOutline.svg"
import { ReactComponent as MobileEye } from "./Eye.svg"

const useStyles = makeStyles({
  root: {
    backgroundColor: "red",
    color: (props) => props.color,
  },
  mobileBoxSpacer: {
    padding: "40px",
  },
  mobileBG: {
    position: "absolute",
    top: 2,
    left: 0,
    "& path": (props) => ({
      fill: props.outlineFill,
    }),
  },
  mobileBox: {
    position: "relative",
    width: "248px",
    height: "538px",
    // boxSizing: "border-box",
  },
  previewBox: {
    position: "absolute",
    top: "-9px",
    width: "100%",
    // border: "1px solid red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mobileEye: {
    marginRight: "13px",
  },
  textPreview: {
    fontSize: "16px",
    lineHeight: "30px",
    fontWeight: 700,
    marginRight: "8px",
  },
  contentBox: {
    height: "100%",
    width: "100%",
    // border: "1px solid blue",
    position: "relative",
    // backgroundColor: "rgba(255,12,255,0.5)",
    boxSizing: "content-box",
    display: "flex",
  },
  someContent: {
    backgroundColor: "transparent",
    // border: "1px solid purple",
    margin: "25px 2px",
    flex: 1,
    padding: 20,
  },
})

const defaultContent = <div></div>

const ALMobilePreview = (props) => {
  const { content = defaultContent } = props
  const styleProps = {
    outlineFill: "lightgray",
  }

  const classes = useStyles(styleProps)

  return (
    <div className={classes.mobileBoxSpacer}>
      <div className={classes.mobileBox}>
        <MobileOutline className={classes.mobileBG} />
        <div className={classes.previewBox}>
          <MobileEye className={classes.mobileEye} />
          <div className={classes.textPreview}>Preview</div>
        </div>
        <div className={classes.contentBox}>{content}</div>
      </div>
    </div>
  )
}

export default ALMobilePreview
