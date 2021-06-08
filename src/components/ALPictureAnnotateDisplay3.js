import React, { useState, useEffect, useRef } from "react"
import Main from "./Main"
import {
  ReactPictureAnnotation,
  defaultShapeStyle,
  DefaultInputSection,
} from "react-picture-annotation"
import "./ALPictureAnnotateDisplay.css"
import manWithBag from "./images/man_with_bag.jpeg"
import spotDifferences1 from "./images/spot_differences1.png"
import spotDifferences2 from "./images/spot_differences2.png"

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

// const markShape = {
//   id: "XSpAXR",
//   mark: {
//     height: 126.4,
//     type: "RECT",
//     width: 128,
//     x: 366.4,
//     y: 128,
//   },
// }

const sqHeight = 400
// const sqH = `${sqHeight}px`

const OneMarkDiv = ({ oneMark, scale2, handleClick, selectedIds }) => (
  <div
    style={{
      position: "absolute",
      top: oneMark.mark.y * scale2,
      left: oneMark.mark.x * scale2,
      width: oneMark.mark.width * scale2,
      height: oneMark.mark.height * scale2,
      border: `2px solid ${
        selectedIds.includes(oneMark.id) ? "blue" : "transparent"
      }`,
    }}
    onClick={(e) => handleClick(e, oneMark.id)}
  ></div>
)

const ImageReflector = ({ imgSrc, marks, scale }) => {
  const [selectedIds, setSelectedIds] = useState([])
  console.log(`marks`, marks)

  const handleCorrectClick = (e, id) => {
    e.stopPropagation()
    setSelectedIds([...selectedIds, id])
  }
  const handleIncorrectClick = (e) => {
    console.log(`handleIncorrectClick e`, e)
    const nE = e.nativeEvent
    console.log(`nE`, nE)
    const { offsetX, offsetY } = nE
    console.log(`offsetX, offsetY`, offsetX, offsetY)
    // setSelectedIds([...selectedIds, id])
  }

  // const oneMark1 = {
  //   id: "ETiayM",
  //   mark: { x: 360, y: 30, width: 132, height: 116, type: "RECT" },
  // }
  // console.log(`marks[0]`, marks[0])

  return (
    <div
      style={{
        backgroundImage: `url(${imgSrc})`,
        height: 250 * scale,
        width: 250,
      }}
      className="reflect-div"
    >
      <div className="reflect-interact-layer" onClick={handleIncorrectClick}>
        {marks.map((oneM) => (
          <OneMarkDiv
            oneMark={oneM}
            scale2={(0.5 * scale * 250) / 400}
            handleClick={handleCorrectClick}
            selectedIds={selectedIds}
          />
        ))}
      </div>
    </div>
  )
}

const ALPictureAnnotateDisplay = () => {
  const [refresh, setRefresh] = useState(0)
  const [marks, setMarks] = useState([])
  const [selectedId, setSelectedId] = useState("")
  const [scale, setScale] = useState(0)

  const ref = useRef()
  const imageRef = useRef(null)

  const debouncedSetMarks = debounce(setMarks, 100)
  const onSelect = (selectedId) => setSelectedId(selectedId)
  const onChange = (data) => {
    // setMarks(data)
    debouncedSetMarks(data)
  }

  useEffect(() => {
    console.log(`imageRef.current`, imageRef.current)
    const iRef = imageRef.current
    const imgH = iRef?.offsetHeight
    const imgW = iRef?.offsetWidth

    console.log(`imgH`, imgH)
    console.log(`imgW`, imgW)
    if (imgH && imgW) {
      const newScale = parseInt((imgW / imgH) * 100) / 100
      console.log(`newScale`, newScale)
      setScale(newScale)
    }
    console.log(`scale`, scale)
    if (refresh < 2) {
      setRefresh(refresh + 1)
    }
  }, [refresh])

  console.log(`scale`, scale)

  // console.log(`selectedId`, selectedId)
  // console.log(`marks`, marks)
  // console.log(`ref.current`, ref.current)
  return (
    <Main>
      <img
        src={spotDifferences2}
        alt="rand"
        className="image-no-show"
        ref={(r) => (imageRef.current = r)}
      ></img>
      {true ? (
        <>
          <div className="anno-container">
            <div className="anno-row">
              {/* <img
              src={spotDifferences1}
              alt="rand"
              className="image-show"
              height={sqHeight}
              width={sqHeight * scale}
              // ref={(r) => (imageRef.current = r)}
            ></img> */}
              <div
                style={{
                  backgroundImage: `url(${spotDifferences1})`,
                  height: sqHeight,
                  width: sqHeight * scale,
                }}
                className="reflect-div"
              ></div>
              <ReactPictureAnnotation
                image={spotDifferences2}
                onSelect={onSelect}
                onChange={onChange}
                width={sqHeight}
                height={sqHeight}
                annotationStyle={annotationStyle}
                scrollSpeed={0}
                // annotationData={marks}
                // ref={(r) => (ref.current = r)}
              />
            </div>

            <div>
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
                        <span>{parseInt(mark?.mark?.x)}</span>
                        <span>y: </span>
                        <span>{parseInt(mark?.mark?.y)}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            <div style={{ height: "600px", width: "250px" }} className="phone">
              <div
                style={{
                  backgroundImage: `url(${spotDifferences1})`,
                  height: `${250 / scale}px`,
                  width: "250px",
                }}
                className="phone-image-1"
              ></div>
              <div className="phone-reflector-box">
                <ImageReflector
                  imgSrc={spotDifferences2}
                  marks={marks}
                  scale={scale}
                />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </Main>
  )
}

export default ALPictureAnnotateDisplay

function debounce(func, waitIn) {
  const wait = waitIn || 500
  let timeout
  return function (...args) {
    const context = this
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      timeout = null
      func.apply(context, args)
    }, wait)
  }
}
