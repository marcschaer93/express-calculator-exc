const { findMean, findMedian, findMode } = require("./helpers");

const nums = [1, 2, 3, 4, 5, 6, 7];

describe("findMean", function () {
  it("it calculates the average of an Array with numbers", function () {
    expect(findMean(nums)).toBe(4);
  });
});

describe("findMedian", function () {
  it("it calculates the median of a sorted Array with odd Array lenght", function () {
    expect(findMedian(nums)).toBe(4);
  });

  it("Calculates the median of a sorted Array with even Array length", function () {
    expect(findMedian([1, 2, 3, 4])).toEqual(5);
  });
});

describe("findMode", function () {
  it("it returns the most frequent number in a array", function () {
    expect(findMode([1, 2, 2, 2, 3, 4])).toBe(2);
  });
});
