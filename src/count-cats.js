const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  const cats = [];
  for (let i = 0; i < backyard.length; i++) {
    const element = backyard[i];
    for (let j = 0; j < element.length; j++) {
      if (element[j] === '^^') {
        cats.push(element[j]);
      }   
    }
  }
  return cats.length;
}

module.exports = {
  countCats
};
