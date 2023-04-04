const matrix = [
  ["A", "B", "C"],
  ["D", "*", "E"],
  ["F", "G", "w"],
];

const two = [
  ["A", "B", "C"],
  ["D", "E", "*"],
  ["G", "H", "I"],
];

const starOutGrid = (grid) => {
  // define a star
  const star = "*";
  //   define rows and cols
  const rows = new Set();
  const cols = new Set();

  // loop through matrix if the index in grid is a star add the index
  // to the rows and the cols to give a coordinance
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === star) {
        rows.add(i);
        cols.add(j);
      }
    }
  }

  //  loop through matrix if the row or col has an index of a star change that to a star
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (rows.has(i) || cols.has(j)) {
        grid[i][j] = star;
      }
    }
  }

  return grid;
};

// console.log(starOutGrid(matrix));
console.log(starOutGrid(two));
