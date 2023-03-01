const binarySearch = require('../index');

test('binarySearch is a defined function', () => {
  expect(typeof binarySearch).toEqual('function');
});

test('binarySearch should return the position of the element in the array', () => {
  let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(binarySearch(testArray, 7)).toEqual(6);
});

test('binarySearch should return -1 because 5643 is not in the array', () => {
  let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(binarySearch(testArray, 5643)).toEqual(-1);
});

test('binarySearch should return the position of the element in the array', () => {
  let testArray = [67, 23, 98, 456, 102]
    .sort((num1, num2) => num1 > num2 ? 1 : -1);
  expect(binarySearch(testArray, 102)).toEqual(3);
});
