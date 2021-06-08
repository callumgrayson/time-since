import React, { useState, useEffect } from "react"
import Main from "./Main"
import {
  ReactPictureAnnotation,
  defaultShapeStyle,
  DefaultInputSection,
} from "react-picture-annotation"
import "./ALPictureAnnotateDisplay.css"

const annotationStyle = {
  /** text area **/
  padding: 5, // text padding
  fontSize: 12, // text font size
  fontColor: "#212529", // text font color
  fontBackground: "#f8f9fa", // text background color
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif",

  /** stroke style **/
  lineWidth: 2, // stroke width
  shapeBackground: "hsla(210, 16%, 93%, 0.2)", // background color in the middle of the marker
  shapeStrokeStyle: "#f8f9fa", // shape stroke color
  shadowBlur: 10, // stroke shadow blur
  shapeShadowStyle: "hsla(210, 9%, 31%, 0.35)", // shape shadow color

  /** transformer style **/
  transformerBackground: "#5c7cfa",
  transformerSize: 10,
}

const ALPictureAnnotateDisplay = () => {
  const [pageSize, setPageSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const [marks, setMarks] = useState([])
  const [selected, setSelected] = useState({})
  const onResize = () => {
    setPageSize({ width: window.innerWidth, height: window.innerHeight })
  }

  useEffect(() => {
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  const onSelect = (selectedId) => setSelected(selectedId)
  const onChange = (data) => setMarks(data)

  return (
    <Main>
      <div className="anno-container">
        <div className="anno-panel">
          <ReactPictureAnnotation
            image="https://source.unsplash.com/random/500x500"
            onSelect={onSelect}
            onChange={onChange}
            width={500}
            height={500}
            // defaultAnnotationSize={30}
            // annotationStyle={annotationStyle}
          />
        </div>
        <div>
          <div>
            <span>Selected: </span>
            <span>{selected}</span>
          </div>
          <div>
            <div>Marks</div>
            <div>
              {marks.map((mark) => {
                return (
                  <div>
                    <span>Mark:</span>
                    <span>{mark.id}</span>
                    <span>x: </span>
                    <span>{mark.mark.x}</span>
                    <span>y: </span>
                    <span>{mark.mark.y}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
}

export default ALPictureAnnotateDisplay
