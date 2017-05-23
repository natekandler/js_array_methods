# JavaScript Drill: Array Methods

## Summary
Just like in Ruby when we're working with collections JavaScript can provide some convenience methods for commonly performed operations so we don't have to write `for` loops for everything. 

In the following releases we'll be refactoring the functions using `for` loops to use JavaScript [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) methods. 

You should not update the spec provided but the tests should still pass after you refactor.

### Release 0: Asking The Right Question
When working with a collection we can ask ourselves what we are trying to accomplish? There are five things to ask that will indicate what convenience function we can use. Are we trying to:

- iterate
- aggregate
- manipulate
- filter
- order

Something to always remember with JavaScript is browser support. If you need to support below IE9 you will run into issues with many of these methods. Check the Mozilla docs linked for each method to see all of the info on browser support.

### Release 1: Iterating
If we just need to iterate we can use JavaScript's [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach?v=example) method.

``` JavaScript
var a = ['a', 'b', 'c'];

a.forEach(function(element) {
    console.log(element);
});

// this will log 'a' then 'b' then 'c' to the console
```
Take a look at the functions in `array_methods.js` to see which ones are just iterating and refactor using `forEach()`

### Release 2: Filtering
To filter specific elements from an array, JavaScript supplies us with a conveniently named [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?v=example) method

``` JavaScript
var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

var longWords = words.filter(function(word){
  return word.length > 6;
})

// Filtered array longWords is ["exuberant", "destruction", "present"]
```
Find which functions are filtering and refactor using `filter()`.
### Release 3: Manipulating
Just like in Ruby, when we want to manipulate and array Javascript provides us with a [map(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?v=example)]() method. This method will return the mutated array but not the original.

``` JavaScript
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]
```

See what functions are manipulating and refactor using `map()`.

### Release 4: Ordering
Javascript also provides a built in [sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort?v=example) method. 

``` JavaScript
var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); 
// ['apples', 'bananas', 'cherries']
```
Find any functions that are ordering and refactor them using `sort()`

### Release 5: Aggregating
When we want to aggregate Javascript provides us with a [reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=example) method just like Ruby does. This function takes two arguments. The first is a callback and the second is the base we want the aggregator to start with. 

``` JavaScript
var sum = [0, 1, 2, 3].reduce(function(acc, val) {
  return acc + val;
}, 0);
// sum is 6
```
What functions are aggregating? See if you can refactor those to use `reduce()`.
