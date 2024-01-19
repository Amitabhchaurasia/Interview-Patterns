// Rectangle
let drawRectangle = function(length, width) {
    for (let i = 1; i <= width; i++) {
        let row = " * ".repeat(length);
        console.log(row);
    }
    console.log();
}

console.log("Rectangle");
drawRectangle(5, 4);

// Square
let drawSquare = function(side) {
    for (let i = 1; i <= side; i++) {
        let row = "* ".repeat(side);
        console.log(row);
    }
    console.log();
}

console.log("Square");
drawSquare(4);

// Right-Angle Triangle (Left Side)
let drawRightAngleTriangleLeft = function(size) {
    for (let i = 1; i <= size; i++) {
        let row = "* ".repeat(i);
        console.log(row);
    }
    console.log();
}

console.log("Right-Angle Triangle (Left Side)");
drawRightAngleTriangleLeft(4);

// Right-Angle Triangle (Right Side)
let drawRightAngleTriangleRight = function(size) {
    for (let i = 1; i <= size; i++) {
        let row = " ".repeat(size - i) + "*".repeat(i);
        console.log(row);
    }
    console.log();
}

console.log("Right-Angle Triangle (Right Side)");
drawRightAngleTriangleRight(10);

// Triangle
let drawTriangle = function(size) {
    for (let i = 1; i <= size; i++) {
        let row = " ".repeat(size - i) + "*".repeat(2 * i - 1);
        console.log(row);
    }
    console.log();
}

console.log("Triangle");
drawTriangle(10);

// Inverted Triangle
let drawInvertedTriangle = function(size) {
    for (let i = size; i >= 1; i--) {
        let row = " ".repeat(size - i) + "*".repeat(2 * i - 1);
        console.log(row);
    }
    console.log();
}

console.log("Inverted Triangle");
drawInvertedTriangle(10);

// Inverted Right-Angle Triangle (Left Side)
let drawInvertedRightAngleTriangleLeft = function(size) {
    for (let i = size; i >= 1; i--) {
        let row = " ".repeat(size - i) + "*".repeat(i);
        console.log(row);
    }
    console.log();
}

console.log("Inverted Right-Angle Triangle (Left Side)");
drawInvertedRightAngleTriangleLeft(10);

// Inverted Right-Angle Triangle (Right Side)
let drawInvertedRightAngleTriangleRight = function(size) {
    for (let i = size; i >= 1; i--) {
        let row = "*".repeat(i);
        console.log(row);
    }
    console.log();
}

console.log("Inverted Right-Angle Triangle (Right Side)");
drawInvertedRightAngleTriangleRight(10);
