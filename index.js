function findMatching(drivers, searchTerm) {
  return drivers.filter(driver => {
    return (driver.toLowerCase() === searchTerm.toLowerCase())
  })
}

function fuzzyMatch(drivers, searchTerm) {
  return drivers.filter(driver => {
    return (driver.slice(0, searchTerm.length) === searchTerm)
  })
}

function matchName(drivers, searchTerm) {
  return drivers.filter(driver => {
    return (driver.name === searchTerm)
  })
}
