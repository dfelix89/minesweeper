const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let rowsIndex = 1; rowsIndex < numberOfRows.length; rowsIndex++) {
      let row = [];
      for (let columnsIndex = 1; columnsIndex < numberOfColumns.length; columnsIndex++) {
          row.push(' ');
      }
      board.push(' ');
  }
  return board;
};

generatePlayerBoard(2, 3);