function findMatching(array, string) {
  return array.filter( (item) => {
    if (item.toLowerCase() === string.toLowerCase()) {
      return true
    } else {
      return false
    }
  })
}

function fuzzyMatch(array, string) {
  const newString = string.toLowerCase()
  return array.filter( (item) => {
    const newItem = item.toLowerCase()
    if (newItem.startsWith(newString)) {
      return true
    } else {
      return false
    }
  })
}

function matchName(array, string) {
  return array.filter( (item) => {
    if (item['name'] === string) {
      return true
    } else {
      return false
    }
   })
}
