var myArray = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2,-3,-1];

function sumArray(arr) {
  var sum = 0;
  for(i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log('sum = ', sum);
}

function maxArray(arr) {
  var myMax = 0;
  for(i = 0; i < arr.length; i++) {
    if(arr[i] >= myMax) {
      myMax = arr[i];
    }
  }
  console.log('max = ', myMax)
}

function minArray(arr) {
  var myMin = 0;
  for(i = 0; i < arr.length; i++) {
    if(arr[i] <= myMin) {
      myMin = arr[i];
    }
  }
  console.log('min = ', myMin)
}

sumArray(myArray);
maxArray(myArray);
minArray(myArray);
