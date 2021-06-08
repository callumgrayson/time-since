import React, { useState, useEffect, useRef } from "react"
import Main from "./Main"
import {
  ReactPictureAnnotation,
  // defaultShapeStyle,
  // DefaultInputSection,
} from "react-picture-annotation"
import "./ALPictureAnnotateDisplay.css"
// import manWithBag from "./images/man_with_bag.jpeg"
// import spotDifferencesPortrait from "./images/spot_differences_portrait.png"
import spotDifferences1 from "./images/spot_differences1.png"
import spotDifferences2 from "./images/spot_differences2.png"
import ALPictureAnnotateGame from "./ALPictureAnnotateGame"
import { normalizeMarks } from "./ALPictureAnnotateHelpers"
const sqHeight = 400

const ImageBase = ({ url }) => (
  <div
    style={{
      backgroundImage: `url(${url})`,
      height: sqHeight + 2,
      width: sqHeight + 2,
    }}
    className="image-div base-image-div"
  ></div>
)

const ALPictureAnnotateDisplay = () => {
  const [marksArray, setMarksArray] = useState([])
  const [selectedId, setSelectedId] = useState("")
  const [imageInfo, setImageInfo] = useState(null)
  const [annoInfo, setAnnoInfo] = useState(null)
  const [showAnnotator, setShowAnnotator] = useState(false)
  const [showGame, setShowGame] = useState(false)
  const imageRef = useRef(null)
  const annoRef = useRef(null)

  const debouncedSetMarks = debounce(setMarksArray, 100)
  const onSelect = (selectedId) => setSelectedId(selectedId)
  const onChange = (data) => {
    // setMarks(data)
    debouncedSetMarks(data)
  }
  const handleShowGame = () => {
    if (showGame) {
      setShowGame(false)
      setTimeout(() => {
        setShowGame(true)
      }, 0)
    }
    setShowGame(true)
  }

  useEffect(() => {
    const iRef = imageRef.current
    const imgH = iRef?.offsetHeight
    const imgW = iRef?.offsetWidth
    if (!imageInfo) {
      setImageInfo({ height: 0, width: 0 })
    } else if (imageInfo.height === 0) {
      setImageInfo({ height: imgH, width: imgW })
    }
    if (!showAnnotator) {
      if (imgH && imgH > 0) {
        setShowAnnotator(true)
      }
    }
  }, [imageInfo])

  // Canvas height and width are always 800 if container is a square

  // console.log(`imageInfo`, imageInfo)
  // console.log(`annoRef.current`, annoRef.current)
  const anRef = annoRef.current
  // console.log(`anRef`, anRef)
  // const anHeight = annoRef.current
  const imgDimensions = imageInfo ? imageInfo : { height: 100, width: 100 }

  // console.log(`JSON.stringify(marksArray)`, JSON.stringify(marksArray))
  // console.log(`JSON.stringify(imgDimensions)`, JSON.stringify(imgDimensions))

  const marksNormalized = normalizeMarks({ marksArray, imgDimensions })
  return (
    <Main>
      <img
        src={spotDifferences2}
        alt="rand"
        className="image-no-show"
        ref={(r) => (imageRef.current = r)}
      ></img>
      {showAnnotator ? (
        <>
          <div className="anno-container">
            <div className="anno-row">
              <ImageBase url={spotDifferences1} />
              <div
                className="annotation-div"
                style={{ height: sqHeight + 2, width: sqHeight + 2 }}
              >
                <ReactPictureAnnotation
                  image={spotDifferences2}
                  onSelect={onSelect}
                  onChange={onChange}
                  width={sqHeight}
                  height={sqHeight}
                  annotationStyle={annotationStyle}
                  scrollSpeed={0}
                  // annotationData={marks}
                  ref={annoRef}
                />
              </div>
            </div>
            <div>
              {/* <pre>{JSON.stringify(imageInfo, null, 2)}</pre> */}
              {marksArray.length > 0 ? (
                <div>
                  <button type="button" onClick={handleShowGame}>
                    {showGame ? "Reset Game" : "Show Game"}
                  </button>
                  {/* <pre>{JSON.stringify(marksArray, null, 2)}</pre> */}
                </div>
              ) : null}
            </div>

            {showGame ? (
              <div className="game-box">
                <ALPictureAnnotateGame
                  imgBaseSrc={spotDifferences1}
                  imgDiffSrc={spotDifferences2}
                  imgDimensions={imgDimensions}
                  marksArray={marksArray}
                  marksNormalized={marksNormalized}
                  containerWidth={375}
                  containerHeight={812}
                />
              </div>
            ) : null}
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

const annotationStyle = {
  /** text area **/
  padding: 5, // text padding
  fontSize: 12, // text font size
  fontColor: "#212529", // text font color
  fontBackground: "#f8f9fa", // text background color
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif",

  /** stroke style **/
  lineWidth: 6, // stroke width
  shapeBackground: "hsla(210, 16%, 93%, 0.2)", // background color in the middle of the marker
  // shapeStrokeStyle: "#f8f9fa", // shape stroke color
  shapeStrokeStyle: "#F01313", // shape stroke color
  shadowBlur: 5, // stroke shadow blur
  shapeShadowStyle: "white", // shape shadow color

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

// <div>
//               <div>
//                 <span>Selected: </span>
//                 <span>{selectedId}</span>
//               </div>
//               <div>
//                 <div>Marks</div>
//                 <div>
//                   {marksArray.map((mark) => {
//                     return (
//                       <div key={mark.id}>
//                         <span>Mark:</span>
//                         <span>{mark.id}</span>
//                         <span>x: </span>
//                         <span>{parseInt(mark?.mark?.x)}</span>
//                         <span>y: </span>
//                         <span>{parseInt(mark?.mark?.y)}</span>
//                       </div>
//                     )
//                   })}
//                 </div>
//               </div>
//             </div>
