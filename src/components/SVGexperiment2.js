import React, { useState } from "react"
import Main from "./Main"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  viewBox: {
    border: "1px solid black",
  },
  sliderBox: {
    display: "flex",
    width: "100%",
    // border: "1px solid gold",
  },
  rangeBox: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  },
  topInput: {
    width: "40px",
  },
  rangeInput: {
    flex: 1,
    minWidth: "300px",
  },
})

const SVGexperiment1 = () => {
  const [top, setTop] = useState(200)
  const [rangeValue, setRangeValue] = useState(113)
  const handleTopChange = (e) => {
    const { value } = e.target
    setTop(value)
  }
  const handleRangeChange = (e) => {
    const { value } = e.target
    setRangeValue(value)
  }
  const classes = useStyles()

  const points = createPoints({ aValue: rangeValue })

  return (
    <Main>
      <div>SVG Experiments 2</div>
      <div className={classes.rangeBox}>
        <div>{rangeValue}</div>
        <div className={classes.sliderBox}>
          <div>100</div>
          <input
            type="range"
            name="aRange"
            id="aRange"
            min="100.1"
            max={`${top}`}
            value={rangeValue}
            onChange={handleRangeChange}
            step="0.1"
            className={classes.rangeInput}
          />
          <div>
            <input
              type="number"
              name="topRange"
              id="topRange"
              onChange={handleTopChange}
              value={top}
              className={classes.topInput}
            />
          </div>
        </div>
      </div>
      <div>
        <svg viewBox="0 0 100 100" className={classes.viewBox}>
          <g stroke="#dfdfdf" fill="none" strokeWidth="0.1px">
            <path
              d={
                "M10,0 L10,100 M20,0 L20,100 M30,0 L30,100 M40,0 L40,100 M50,0 L50,100 M60,0 L60,100 M70,0 L70,100 M80,0 L80,100 M90,0 L90,100"
              }
            />
            <path
              d={
                "M0,10 L100,10 M0,20 L100,20 M0,30 L100,30 M0,40 L100,40 M0,50 L100,50 M0,60 L100,60 M0,70 L100,70 M0,80 L100,80 M0,90 L100,90"
              }
            />
          </g>
          <g stroke="black" fill="none" strokeWidth="0.4px">
            <path d={points} />
          </g>
        </svg>
      </div>
    </Main>
  )
}

export default SVGexperiment1

const createPoints = ({ aValue }) => {
  const width = 100
  const height = 100
  const parts = 400
  const partX = width / parts
  const percent100 = height

  const n = 100
  const a = aValue
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
