// Code your solution here
function findMatching(drivers, target){
  return drivers.filter(driver => driver.toLowerCase() === target.toLowerCase())
}

function fuzzyMatch(drivers, target){
  return drivers.filter(driver => driver.startsWith(target))
}

function matchName(drivers, target){
  return drivers.filter(driver => driver.name === target)
}
