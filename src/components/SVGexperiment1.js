import React from "react"
import Main from "./Main"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  viewBox: {
    border: "1px solid green",
  },
})

const SVGexperiment1 = () => {
  const classes = useStyles()

  const points = createPoints()

  return (
    <Main>
      <div>SVG Experiments 1</div>
      <div>
        <svg viewBox="0 0 100 100" className={classes.viewBox}>
          <g stroke="black" fill="none" strokeWidth="0.4px">
            <path d={points} />
          </g>
        </svg>
      </div>
    </Main>
  )
}

export default SVGexperiment1

const createPoints = () => {
  const width = 100
  const height = 100
  const parts = 100
  const partX = width / parts
  const percent100 = height

  const n = 100
  const a = 103
  const b = ((a - percent100) / percent100) * n
  const yEq = (x) => (a * x) / (x + b)

  let pairsArray = []

  for (let i = 0; i < parts + 1; i++) {
    let x = i * partX
    let ybasic = yEq(x)
    let yScaled = (ybasic * n) / height

    let y = height - yScaled

    if (i === 0) {
      pairsArray.push(`M${x},${y}`)
    } else {
      pairsArray.push(`L${x},${y}`)
    }
  }
  return pairsArray.join(" ")
}
