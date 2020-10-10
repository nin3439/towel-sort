
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  return matrix.flatMap((item, index) => (index % 2 !== 0) ? item.reverse() : item);
}
