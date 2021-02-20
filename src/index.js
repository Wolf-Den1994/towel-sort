module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    !(i & 1) ? result.push(...matrix[i]) : result.push(...matrix[i].reverse());
  }
  return result;
}
