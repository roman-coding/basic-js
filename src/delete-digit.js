const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  const resArr = []
  const str = String(n)

  for (let digit of str) {
    resArr.push(Number(str.replace(digit, '')))
  }

  return Math.max(...resArr)
}

module.exports = {
  deleteDigit
}
