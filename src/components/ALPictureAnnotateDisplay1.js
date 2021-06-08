import React, { useState, useEffect } from "react"
import Main from "./Main"
import {
  ReactPictureAnnotation,
  defaultShapeStyle,
  DefaultInputSection,
} from "react-picture-annotation"
import "./ALPictureAnnotateDisplay.css"
import manWithBag from "./images/man_with_bag.jpeg"
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
  // shapeStrokeStyle: "#f8f9fa", // shape stroke color
  shapeStrokeStyle: "red", // shape stroke color
  shadowBlur: 10, // stroke shadow blur
  shapeShadowStyle: "hsla(210, 9%, 31%, 0.35)", // shape shadow color

  /** transformer style **/
  transformerBackground: "#5c7cfa",
  transformerSize: 10,
}

const imageComp = <img src={manWithBag} alt="rand"></img>

const ALPictureAnnotateDisplay = () => {
  const [marks, setMarks] = useState([])
  const [selectedId, setSelectedId] = useState("")
  const [newMark, setNewMark] = useState("")

  const onSelect = (selectedId) => setSelectedId(selectedId)
  const onChange = (data) => {
    const dataMarks = data.map((mark) => mark.id)
    // console.log(`dataMarks`, dataMarks)
    const currentMarks = marks.map((mark) => mark.id)
    // console.log(`currentMarks`, currentMarks)
    const newM = dataMarks.filter((mark) => !currentMarks.includes(mark))[0]
    // console.log(`newM`, newM)
    if (newM) {
      console.log(`============ newM`, newM)
      setNewMark(newM)
    }

    setMarks(data)
  }

  return (
    <Main>
      <div className="anno-container">
        <div className="anno-panel">
          <ReactPictureAnnotation
            // image="https://source.unsplash.com/random/800x600"
            image={manWithBag}
            onSelect={onSelect}
            onChange={onChange}
            width={500}
            height={500}
            annotationStyle={annotationStyle}
            annotationData={marks}
          />
        </div>

        <div>
          <div>New mark: {newMark}</div>
          <div>
            <span>Selected: </span>
            <span>{selectedId}</span>
          </div>
          <div>
            <div>Marks</div>
            <div>
              {marks.map((mark) => {
                return (
                  <div key={mark.id}>
                    <span>Mark:</span>
                    <span>{mark.id}</span>
                    <span>x: </span>
                    <span>{parseInt(mark.mark.x)}</span>
                    <span>y: </span>
                    <span>{parseInt(mark.mark.y)}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div>{imageComp}</div>
    </Main>
  )
}

export default ALPictureAnnotateDisplay
