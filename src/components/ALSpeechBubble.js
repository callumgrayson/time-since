import React from "react"
import Main from "./Main"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  speechBubble: {
    backgroundColor: "#5B3FFF",
    width: "100%",
    borderRadius: ({ topDown }) =>
      topDown ? "6px 20px 20px 20px" : "20px 20px 20px 6px",
    padding: "17px 15px",
  },
})

const defaultContent = <div></div>

const ALMobilePreview = ({ content = defaultContent, topDown = true }) => {
  const classes = useStyles({ topDown })

  return (
    <Main>
      <div className={classes.speechBubble}>
        Speech Bubble
        <div>{content}</div>
      </div>
    </Main>
  )
}

export default ALMobilePreview
