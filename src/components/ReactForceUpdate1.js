import React, { useEffect, useRef, useState } from "react"
import Main from "./Main"
const ReactForceUpdate1 = () => {
  const nodeContent = "Node Content"
  const [inc, setInc] = useState(1)
  const nodeRef = useRef()

  const changeOne = (str) => {
    const len = str.length
    // console.log(`len`, len)
    const rand = Math.floor(Math.random() * len)
    // console.log(`rand`, rand)
    const randCode = Math.floor(900 + Math.random() * 200)
    // console.log(`randCode`, randCode)
    const replacementChar = String.fromCharCode(randCode)
    // console.log(`replacementChar`, replacementChar)
    const newStr = `${str.slice(0, rand)}${replacementChar}${str.slice(
      rand + 1
    )}`
    // console.log(`newStr`, newStr)
    return newStr
  }

  const indep = () => {
    let i = 0

    const step = () => {
      const currentText = nodeRef.current.innerText
      if (i < 100) {
        i++
        const newStr = changeOne(currentText)
        nodeRef.current.innerText = newStr
        requestAnimationFrame(step)
      }
    }
    step()
  }

  const handler = () => {
    setInc((v) => v + 1)
    indep()
  }

  // useEffect(() => {
  //   for (let i = 126; i < 1000; i++) {
  //     console.log(`String.fromCharCode(i)`, i, String.fromCharCode(i))
  //   }
  // }, [])

  return (
    <Main>
      ReactForceUpdate
      <div ref={(r) => (nodeRef.current = r)}>{nodeContent}</div>
      <button onClick={handler}>Rerender ({inc})</button>
    </Main>
  )
}

export default ReactForceUpdate1
