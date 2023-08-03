function findMatching(drivers, name){
    const lowerCaseName = name.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase() === lowerCaseName);
}

function fuzzyMatch(drivers, beginningLetters){
    const lowerCaseBeginning = beginningLetters.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().startsWith(lowerCaseBeginning));
}

function matchName(drivers, name){
    return drivers.filter((driver) => driver.name === name);
}