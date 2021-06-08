import React, { useState } from "react"
import "./ALPictureAnnotateGame.css"

/**
 *
 * Creates a div for one mark
 *
 */
const OneMarkDiv = ({ oneMark, scaleX, scaleY, handleClick, selectedIds }) => {
  const show = selectedIds.includes(oneMark.id)
  return (
    <div
      style={{
        position: "absolute",
        top: oneMark.mark.y * scaleY,
        left: oneMark.mark.x * scaleX,
        width: oneMark.mark.width * scaleX,
        height: oneMark.mark.height * scaleY,
        border: show ? `6px solid #F01313` : "none",
        boxSizing: "border-box",
        borderRadius: "50%",
      }}
      onClick={(e) => handleClick(e, oneMark.id)}
    ></div>
  )
}

/**
 *
 * Displays the image on which the user will make selections
 *
 */
const ImageReflector = ({ displayWidth, imgDiffSrc, marks, scaleOfHeight }) => {
  const [selectedIds, setSelectedIds] = useState([])

  const handleCorrectClick = (e, id) => {
    e.stopPropagation()
    setSelectedIds([...selectedIds, id])
  }

  return (
    <div
      style={{
        height: displayWidth,
        width: displayWidth,
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${imgDiffSrc})`,
          height: displayWidth * scaleOfHeight,
          width: displayWidth,
        }}
        className="reflect-div"
      >
        <div className="reflect-interact-layer">
          {marks.map((mark) => (
            <OneMarkDiv
              key={mark.id}
              oneMark={mark}
              scaleX={displayWidth}
              scaleY={displayWidth * scaleOfHeight}
              handleClick={handleCorrectClick}
              selectedIds={selectedIds}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/**
 *
 * props:
 * imgBaseSrc - url for the base image
 * imgDiffSrc - url for the difference image
 * imgDimensions - object with the height and width of images
 * marksArray - array of normalized (100x100) marks
 *
 */
const ALPictureAnnotateGame = ({
  imgBaseSrc,
  imgDiffSrc,
  imgDimensions,
  containerWidth,
  containerHeight,
  marksNormalized,
}) => {
  const scaleOfHeight = imgDimensions.height / imgDimensions.width

  return (
    <div
      style={{ height: `${containerHeight}px`, width: `${containerWidth}px` }}
      className="phone"
    >
      <div className="phone-reflector-box">
        <ImageReflector
          imgDiffSrc={imgDiffSrc}
          marks={marksNormalized}
          scaleOfHeight={scaleOfHeight}
          displayWidth={containerWidth}
        />
      </div>
      <div
        style={{
          backgroundImage: `url(${imgBaseSrc})`,
          height: `${containerWidth / scaleOfHeight}px`,
          width: `${containerWidth}px`,
        }}
        className="phone-image-1"
      />
    </div>
  )
}

export default ALPictureAnnotateGame

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
