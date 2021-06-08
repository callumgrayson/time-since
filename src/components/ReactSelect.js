import React from "react"
import Main from "./Main"
import ReactSelectBasic from "./ReactSelectBasic"
import ReactSelectValued from "./ReactSelectValued"
import ReactSelectStyled1 from "./ReactSelectStyled1"
import ReactSelectJumpTo from "./ReactSelectJumpTo"

const ReactSelect = () => {
  return (
    <Main>
      <div>ReactSelect Component</div>
      <ReactSelectBasic />
      <ReactSelectValued />
      <ReactSelectStyled1 />
      <ReactSelectJumpTo />
    </Main>
  )
}

export default ReactSelect
