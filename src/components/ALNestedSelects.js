import React, { useEffect, useState } from "react"
import Main from "./Main"
import { makeStyles } from "@material-ui/core/styles"
import ALTickToggle from "./ALTickToggle"
import Colors from "./ALStyles"
import { categoriesMap, SVGTemp } from "./ALCategoriesMap"
import { categoryOptions1 } from "./ALNestedSelectsData"

const buttonMinHeight = "40px"
const level1ButtonWidth = "206px"
const level2ColumnWidth = "485px"
const fontFamily = "Manrope"

const buttonCommon = {
  borderRadius: "6px",
  display: "flex",
  "&:hover": {
    backgroundColor: Colors.baseHover,
  },
  userSelect: "none",
}
const catLabelTextCommon = {
  marginLeft: "10px",
  fontWeight: 400,
  fontFamily: fontFamily,
  fontSize: "16px",
  color: Colors.darkest,
}

const useStyles = makeStyles({
  row: {
    display: "flex",
  },
  level1Column: {
    width: level1ButtonWidth,
  },
  level2Column: {
    width: level2ColumnWidth,
    marginLeft: "30px",
    backgroundColor: Colors.base,
    borderRadius: "12px",
    padding: "0 20px",
    height: "fit-content",
  },
  subcatsBox: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px 20px",
    backgroundColor: Colors.base,
    borderRadius: "12px",
  },
  subCatRowBox: {
    boxSizing: "border-box",
    margin: "0px",
    width: "25%",
    padding: "8px",
  },
  subcatBox: {
    minWidth: 100,
    width: "100%",
    height: 85,
    border: "1px solid",
    borderColor: ({ selected }) => (selected ? Colors.green : Colors.border),
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    padding: "11px 10px",
    boxSizing: "border-box",
    cursor: "pointer",
    margin: 0,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    userSelect: "none",
  },
  subRow: {
    // border: '1px solid red',
    width: "100%",
    height: "26px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "2px 0px",
    color: Colors.darkest,
    fontFamily: fontFamily,
  },
  buttonSelected: {
    ...buttonCommon,
    backgroundColor: Colors.base,
    fontWeight: 700,
  },
  buttonUnselected: {
    ...buttonCommon,
    backgroundColor: "transparent",
  },
  checkCatBox: {
    position: "relative",
    padding: "10px",
  },
  checkCat: {
    display: "none",
    position: "relative",
    padding: "13px",
  },
  checkCatLabel: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    height: buttonMinHeight,
    margin: 0,
    padding: "0 10px",
    cursor: "pointer",
  },
  catLabelText: {},
  catLabelTextSelected: {
    ...catLabelTextCommon,
    fontWeight: 700,
  },
  catLabelTextUnselected: {
    ...catLabelTextCommon,
  },
  toggleBox: {
    position: "absolute",
    top: 8,
    left: 8,
    display: "flex",
    alignItems: "center",
  },
  catClickBox: {
    display: "flex",
  },
  catButton: {
    border: "none",
    backgroundColor: "transparent",
    flex: 1,
    height: buttonMinHeight,
    textAlign: "left",
    cursor: "pointer",
    "&:focus": {
      outline: "none",
    },
  },
  subCatRow: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    padding: "30px 0",
  },
})

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

const ALCategorySub = ({ icon, text, selected }) => {
  const classes = useStyles({ selected })
  const selectedState = selected ? "subOn" : "none"
  return (
    <div className={classes.subcatBox}>
      <div className={classes.toggleBox}>
        <ALTickToggle selectedState={selectedState} />
      </div>

      <div className={classes.subRow}>{icon}</div>
      <div className={classes.subRow}>{text}</div>
    </div>
  )
}

const ALNestedSelects = () => {
  const [selections, setSelections] = useState({})
  const [showCat, setShowCat] = useState({}) // shape - {id: "3", catName: "social_engineering"}

  /**
   *
   * Set the selections state on first render
   *
   */
  useEffect(() => {
    const selObj = buildSelObj(categoryOptions1)
    setSelections(selObj)

    // Auto display first category
    const firstSubCat = Object.entries(selObj)[0]
    setShowCat({
      id: firstSubCat[0],
      catName: firstSubCat[1].category_name,
    })
  }, [])

  /**
   *
   * Category click handler
   *
   * Sets only the category to display
   *
   */
  const handleCategoryClick = (catObj) => {
    setShowCat(catObj)
  }

  /**
   *
   * Category state handler
   *
   * Sets the category state according to subcategory state
   *
   */
  const handleCategoryState = ({ newBool, newSelections }) => {
    const subCatBool = newBool
    const newCategoryObj = newSelections[showCat.id]
    const currentSubcats = newCategoryObj.subcategories
    const currentSubsValues = Object.values(currentSubcats)
    let currentCatState = newCategoryObj.selectedState

    if (subCatBool === true) {
      if (currentCatState === "none") {
        currentCatState = "some"
      } else if (currentCatState === "some") {
        const truesLength = currentSubsValues.filter(
          (subCat) => subCat === true
        ).length
        if (truesLength === currentSubsValues.length) {
          currentCatState = "all"
        }
      }
    } else if (subCatBool === false) {
      if (currentCatState === "all") {
        currentCatState = "some"
      } else if (currentCatState === "some") {
        const trues = currentSubsValues.filter((subCat) => subCat === true)

        const truesLength = trues.length

        if (truesLength < 1) {
          currentCatState = "none"
        }
      }
    }

    newSelections[showCat.id].selectedState = currentCatState

    setSelections(newSelections)
  }

  /**
   *
   * Subcategory setter
   *
   * Sets all subcategories to true or false
   *
   */
  const setSubcategories = (newState, newSelections, catId) => {
    const newSubcatsObj = newSelections[catId].subcategories
    if (newState === "all") {
      Object.keys(newSubcatsObj).forEach((key) => {
        newSubcatsObj[key] = true
      })
    } else {
      Object.keys(newSubcatsObj).forEach((key) => {
        newSubcatsObj[key] = false
      })
    }
  }

  /**
   *
   * Category Check handler
   *
   */
  const handleCheckCat = (e) => {
    const { value } = e.target

    const id = value

    const currentSelectedState = selections[id].selectedState
    const newSelections = { ...selections }

    // The three possible states are 'none', 'all', 'some'
    if (currentSelectedState === "none" || currentSelectedState === "some") {
      newSelections[id].selectedState = "all"
      setSubcategories("all", newSelections, id)
    } else {
      newSelections[id].selectedState = "none"
      setSubcategories("none", newSelections, id)
    }

    setShowCat({
      id: id,
      catName: selections[id].category_name,
    })

    setSelections(newSelections)
  }

  /**
   *
   * Subcategory click handler
   *
   */
  const handleSubCatClick = (entry) => {
    const newSelections = { ...selections }

    const newSubCategories = newSelections[showCat.id].subcategories

    const subCatName = entry[0]
    const subCatBool = entry[1]

    newSubCategories[subCatName] = !subCatBool

    setSelections(newSelections)

    handleCategoryState({
      newBool: !subCatBool,
      newSelections: { ...selections },
    })
  }

  /**
   *
   * Variables
   *
   */
  const categoriesArray = Object.keys(selections).map((key) => ({
    id: key,
    catName: selections[key].category_name,
  }))

  const subCats =
    Object.keys(selections).length && showCat.id
      ? selections[showCat.id].subcategories
      : {}

  const subCatsArray = Object.entries(subCats)

  const classes = useStyles()
  return (
    <Main>
      <div>React Nested Selects</div>

      <div className={classes.row}>
        {/* 

          This is the categories section on the left
          
        */}
        <div className={classes.level1Column}>
          {categoriesArray.map((cat) => {
            const catStateObj = selections[cat.id]
            const { selectedState } = catStateObj

            const catObj = categoriesMap[cat.catName]
              ? categoriesMap[cat.catName]
              : null

            const catText = catObj.text ? catObj.text : ""

            return (
              <div
                key={cat.id}
                className={
                  showCat.id === cat.id
                    ? classes.buttonSelected
                    : classes.buttonUnselected
                }
              >
                <label htmlFor={cat.id} className={classes.checkCatLabel}>
                  <input
                    type="checkbox"
                    name={cat.catName}
                    id={cat.id}
                    onChange={handleCheckCat}
                    className={classes.checkCat}
                    value={cat.id}
                  />
                  <ALTickToggle selectedState={selectedState} />
                </label>
                <button
                  name={cat.catName}
                  type="button"
                  onClick={() => handleCategoryClick(cat)}
                  className={classes.catButton}
                >
                  <div
                    className={
                      showCat.id === cat.id
                        ? classes.catLabelTextSelected
                        : classes.catLabelTextUnselected
                    }
                  >
                    {catText}
                  </div>
                </button>
              </div>
            )
          })}
        </div>

        {/* 

          This is the subcategories section on the right

        */}
        <div className={classes.level2Column}>
          <div className={classes.subCatRow}>
            {subCatsArray.map((entry, idx) => {
              const mapObj = categoriesMap[entry[0]]
                ? categoriesMap[entry[0]]
                : null

              const text = mapObj ? mapObj.text : entry[0]
              const IconComp = mapObj ? mapObj.IconComp : SVGTemp
              return (
                <div
                  key={idx}
                  onClick={() => handleSubCatClick(entry)}
                  className={classes.subCatRowBox}
                >
                  <ALCategorySub
                    icon={<IconComp height={mapObj ? "100%" : "18px"} />}
                    text={text}
                    selected={entry[1]}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Main>
  )
}

export default ALNestedSelects
