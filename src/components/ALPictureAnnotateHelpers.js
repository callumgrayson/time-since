export const normalizeMarks = ({ marksArray, imgDimensions }) => {
  const iH = imgDimensions.height
  const iW = imgDimensions.width

  const newMarks = marksArray.map((markObj) => {
    const newMark = { ...markObj }
    const newObjMark = { ...newMark.mark }

    // Check for negative width cases

    if (newObjMark.width < 0) {
      // Handle negative case
      newObjMark.x = (newObjMark.x + newObjMark.width) / iW
      newObjMark.width = Math.abs(newObjMark.width) / iW
    } else {
      // Handle positive case
      newObjMark.x = newObjMark.x / iW
      newObjMark.width = newObjMark.width / iW
    }

    // Check for negative heigth cases
    if (newObjMark.height < 0) {
      // Handle negative case
      newObjMark.y = (newObjMark.y + newObjMark.height) / iH
      newObjMark.height = Math.abs(newObjMark.height) / iH
    } else {
      // Handle positive case
      newObjMark.y = newObjMark.y / iH
      newObjMark.height = newObjMark.height / iH
    }

    newMark.mark = newObjMark
    return newMark
  })
  return newMarks
}

// const defaultMarks = [
//   {
//     id: "QmjAcn",
//     mark: {
//       x: 1.7149999999999466,
//       y: 2.0100000000001046,
//       width: 682.57,
//       height: 641.4099999999999,
//       type: "RECT",
//     },
//   },
// ]
// const defaultDimensions = { height: 642, width: 686 }
