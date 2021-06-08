import React from "react"

const BackButton = ({ handler }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "30px",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={handler}>{`<`}</button>
    </div>
  )
}

export default BackButton
