// Implement the class SubrectangleQueries which receives a rows x cols rectangle as a matrix of integers in the constructor and supports two methods:
//
//     1. updateSubrectangle(int row1, int col1, int row2, int col2, int newValue)
//
// Updates all values with newValue in the subrectangle whose upper left coordinate is (row1,col1) and bottom right coordinate is (row2,col2).
// 2. getValue(int row, int col)
//
// Returns the current value of the coordinate (row,col) from the rectangle.

var SubrectangleQueries = function(rectangle) {
    this.rectangle = rectangle;
};

SubrectangleQueries.prototype.updateSubrectangle = function(row1, col1, row2, col2, newValue) {
    for (let i = row1; i <= row2 ; i++) {
        for (let j = col1; j <= col2; j++) {
            this.rectangle[0][i][j] = newValue;
        }
    }
    console.log(this.rectangle)
};

SubrectangleQueries.prototype.getValue = function(row, col) {
    console.log("this.rectangle", this.rectangle);
    return this.rectangle[0][row][col];
};

let subrectangleQueries = new SubrectangleQueries([[[1,2,1],[4,3,4],[3,2,1],[1,1,1]]])
console.log("subrectangleQueries",subrectangleQueries)
console.log("getValue(0,2)",subrectangleQueries.getValue(0,2))

console.log("updateSubrectangle(0, 0, 3, 2, 5)",subrectangleQueries.updateSubrectangle(0, 0, 3, 2, 5))
console.log("updateSubrectangle(0, 0, 3, 2, 5)",subrectangleQueries.updateSubrectangle(3, 0, 3, 2, 10))