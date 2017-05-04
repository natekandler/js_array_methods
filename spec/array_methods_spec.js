describe("js enumerables", function() {

  it("filters for matching items in array", function() {
    var testArray = [1,2,3,2,4];
    var result = includes(testArray, 2);
    expect(result).toEqual([2,2]);
  });

  it("filters items greater than comparator", function() {
    var testArray = [2,4,6,8,10];
    var result = greaterThan(testArray, 7);
    expect(result).toEqual([8,10]);
  });


  it("sums an array", function() {
    var testArray = [1,2,3];
    var result = sum(testArray, 0);
    expect(result).toEqual(6);
  });

  it("adds hyphens between words", function() {
    var testArray = ["first","second","third"];
    var result = hyphenate(testArray, "");
    expect(result).toEqual("first-second-third");
  });

  it("multiplies by two", function() {
    var testArray = [2,4,6];
    var result = timesTwo(testArray);
    expect(result).toEqual([4,8,12]);
  });

  it("makes the string possessive", function(){
    var testArray = ["Nate","Mark","Kevin"];
    var result = possessive(testArray);
    expect(result).toEqual(["Nate's","Mark's","Kevin's"]);

  });


  it("sorts and array", function(){
    var testArray = [5,2,3,4,1]; 
    var result = sortArray(testArray);
    expect(result).toEqual([1,2,3,4,5])
  });

  it("should log each item and return original", function(){
    var testArray = [1,2]
    console.log = jasmine.createSpy("log");
    var result = logEach(testArray);
    expect(result).toEqual(testArray)
    expect(console.log).toHaveBeenCalledWith(1);
    expect(console.log).toHaveBeenCalledWith(2);
  });
});
