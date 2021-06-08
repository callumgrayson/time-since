import React, { useState, useEffect } from "react"
import { categoryOptions1 } from "./ALNestedSelectsData"
import ALNestedSelects from "./ALNestedSelects"
import Main from "./Main"
/**
 * This component takes 2 level nested checkbox select data for categories and
 *    renders a NestedSelects UI with it.
 */
const ALCategoriesSelect = () => {
  const [categoriesData, setCategoriesData] = useState({})

  useEffect(() => {
    const initData = buildSelObj(categoryOptions1)
    setCategoriesData(initData)
  }, [])

  const handleNestedChange = (checksObj) => {
    // change the data as needed to send to the server
    console.log(
      "handleNestedChange: Object to modify ready to send to backend: checksObj",
      checksObj
    )
  }

  console.log("categoriesData", categoriesData)
  return (
    <Main>
      <div>ALCategoriesSelect</div>
      <ALNestedSelects
        dataObj={categoriesData}
        changeHandler={handleNestedChange}
      />
    </Main>
  )
}

export default ALCategoriesSelect

const buildSelObj = (inObj) => {
  const inCats = Object.keys(inObj)
  let outObj = {}
  for (let key of inCats) {
    const newProp = {}
    newProp["category_name"] = inObj[key]["category_name"]
    newProp["selectedState"] = "none"
    newProp["subcategories"] = {}

    inObj[key]["subcategories"].forEach((subCat) => {
      newProp["subcategories"][subCat] = false
    })

    outObj[key] = newProp
  }

  return outObj
}
