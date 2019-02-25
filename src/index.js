module.exports = function getLoveTrianglesCount(preferences = []) {
  let counterloveTriangles = 0;
  preferences.forEach((currentLover, indexLover) => {
    const lover = preferences[preferences[currentLover - 1] - 1] - 1;
    if ((currentLover !== (indexLover + 1)) && (indexLover === lover)) {
      preferences.splice(indexLover, 1, 0);
      counterloveTriangles++;
    }
  })
  return counterloveTriangles;
};
