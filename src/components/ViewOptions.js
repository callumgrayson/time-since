import React from "react"
import Main from "./Main"

const ViewOptions = ({ options = [] }) => {
  return (
    <Main>
      {options.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={item.handler}
          style={{ padding: "10px" }}
        >
          {item.id}
        </button>
      ))}
    </Main>
  )
}

export default ViewOptions
