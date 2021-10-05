function techList(tech, nameParam) {
    let techListing = [];
    let techSort = tech.sort();
  
    if (tech.length > 1) {
      for (let index = 0; index < tech.length; index += 1) {
        let addList = techSort[index];
  
        techListing.push({
          tech: addList,
          name: nameParam,
        });
      }
      return techListing;
    }
    return 'Vazio!';
}

module.exports = techList;