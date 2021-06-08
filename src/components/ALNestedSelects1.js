import React, { useEffect, useState } from "react"
import Main from "./Main"
import { makeStyles } from "@material-ui/core/styles"
import ALTickToggle from "./ALTickToggle"
import Colors from "./ALStyles"
import { categoriesMap, SVGTemp } from "./ALCategoriesMap"

const buttonCommon = {
  borderRadius: "3px",
  display: "flex",
  "&:hover": {
    backgroundColor: "#F7F9FFbb",
  },
  userSelect: "none",
}

const buttonMinHeight = "40px"

const useStyles = makeStyles({
  row: {
    display: "flex",
  },
  column: {
    flex: 1,
    border: "1px solid gray",
  },
  subcatsBox: {
    width: 485,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px 20px",
    backgroundColor: "#F7F9FF",
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
    borderColor: ({ selected }) => (selected ? "#5FCD68" : "#E0E6F6"),
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
    margin: "2px 0px",
    color: "#110A45",
  },
  buttonSelected: {
    ...buttonCommon,
    backgroundColor: "#F7F9FF",
  },
  buttonUnselected: {
    ...buttonCommon,
    backgroundColor: "transparent",
  },
  categoriesColumn: {
    display: "flex",
    flexDirection: "column",
    width: "206px",
  },
  checkCatBox: {
    position: "relative",
    padding: "10px",
    // border: '1px solid red',
  },
  checkCat: {
    display: "none",
    position: "relative",
    padding: "13px",
    // border: '1px solid purple',
  },
  checkCatLabel: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    height: buttonMinHeight,
    margin: 0,
    padding: "0 10px",
    cursor: "pointer",
    // border: '1px solid gold',
  },
  catLabelText: {
    marginLeft: "10px",
    // border: '1px solid blue',
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
    // border: "1px solid red",
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
  },
})

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

const ALNestedSelects = ({ dataObj = {}, changeHandler }) => {
  const [selections, setSelections] = useState(() => dataObj)
  const [showCat, setShowCat] = useState({}) // shape - {id: "3", catName: "social_engineering"}

  /**
   *
   * Set the selections state on first render
   *
   */
  useEffect(() => {
    // Auto display first category
    if (Object.entries(dataObj).length) {
      const firstCat = Object.entries(dataObj) ? Object.entries(dataObj)[0] : []

      setShowCat({
        id: firstCat[0],
        catName: firstCat[1].category_name,
      })
    }
  }, [dataObj])

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
    const { value, checked } = e.target
    // console.log("checked", checked)

    const id = value
    // console.log("id", id)

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
    // console.log("newSelections", newSelections)
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
        <div className={classes.column}>
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
                  <div className={classes.catLabelText}>{catText}</div>
                </button>
              </div>
            )
          })}
        </div>

        {/* 

          This is the subcategories section on the right

        */}
        <div className={classes.column}>
          <div className={classes.subcatsBox}>
            <div>{showCat?.catName || null}</div>
          </div>
          <div className={classes.subCatRow}>
            {subCatsArray.map((entry, idx) => {
              const mapObj = categoriesMap[entry[0]]
                ? categoriesMap[entry[0]]
                : null

              const text = mapObj ? mapObj.text : entry[0]
              const IconComp = mapObj ? mapObj.IconComp : SVGTemp
              return (
                // <div>Box</div>
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
      <pre>{JSON.stringify(selections, null, 2)}</pre>
    </Main>
  )
}

export default ALNestedSelects
