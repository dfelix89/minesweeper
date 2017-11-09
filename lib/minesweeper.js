'use strict';

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
    var board = [];
    for (var rowsIndex = 1; rowsIndex < numberOfRows.length; rowsIndex++) {
        var row = [];
        for (var columnsIndex = 1; columnsIndex < numberOfColumns.length; columnsIndex++) {
            row.push(' ');
        }
        board.push(' ');
    }
    return board;
};

generatePlayerBoard(2, 3);