var myArray = [3,0,-5,NaN,1,44,null, undefined, 'hello',-12,3,0,0,1,2,-3,-3,2,1,4,-2,-3,-1];

function sumArray(arr) {
  var sum = 0;
  for(i = 0; i < arr.length; i++) {
    if(typeof(arr[i]) === 'number') {
      if(isNaN(arr[i])) {
        sum = sum;
      } else {
        sum += arr[i];
      }
    } else {
      sum = sum;
    }
  }
  console.log('sum = ', sum);
}

function maxArray(arr) {
  var myMax = 0;
  for(i = 0; i < arr.length; i++) {
    if(typeof(arr[i]) === 'number') {
      if(arr[i] >= myMax) {
        if(isNaN(arr[i])) {
          myMax = myMax;
        } else {
          myMax = arr[i];
        }
      }
    } else {
      myMax = myMax;
    }
  }
  console.log('max = ', myMax)
}

function minArray(arr) {
  var myMin = 0;
  for(i = 0; i < arr.length; i++) {
    if(typeof(arr[i]) === 'number') {
      if(arr[i] <= myMin) {
        if(isNaN(arr[i])) {
          myMin = myMin;
        } else {
          myMin = arr[i];
        }
      } else {
        myMin = myMin;
      }
    }
  }
  console.log('min = ', myMin)
}

sumArray(myArray);
maxArray(myArray);
minArray(myArray);
