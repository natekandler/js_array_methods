function includes(arr, obj) {
  var results = []
  for(var i=0; i<arr.length; i++) {
    if (arr[i] == obj){
      results.push(arr[i])
    };
  }
  return results
}

function greaterThan(arr, obj) {
  var results = []
  for(var i=0; i<arr.length; i++) {
    if (arr[i] > obj){
      results.push(arr[i])
    };
  }
  return results
}

function sum(arr, base_case) {
  var results = base_case;
  for(var i=0; i<arr.length; i++) {
    results += arr[i];
  }
  return results
}

function hyphenate(arr, base_case) {
  var results = base_case;
  for(var i=0; i<arr.length; i++) {
    if(i === 0){
      results += arr[i]
    } else {
      results += ("-" + arr[i]);
    }
  }
  return results
}

function timesTwo(arr) {
  var results = []
  for(var i=0; i<arr.length; i++) {
      results.push(arr[i] * 2)
    };
  return results;
 }

function possessive(arr) {
  var results = []
  for(var i=0; i<arr.length; i++) {
      results.push(arr[i] + "'s");
    };
  return results;
 }

function sortArray(arr) {
   var len = arr.length;
   for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(arr[j-1]>arr[j]){
           var temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
   }
   return arr;
}

function logEach(arr) { 
  var results = [];
  for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
    results.push(arr[i]);
  }
  return results;
}
