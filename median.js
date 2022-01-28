function median(numTester){

  numTester.sort(function(a, b) {
    return a - b;
  });

    firstArr = []
    secondArr = []
  for(let i=0; i < numTester.length; i++){
    if (numTester.length % 2 == 0){

      if(numTester[i] <= numTester[(numTester.length/ 2) - 1]){
        firstArr.push(numTester[i])
      }

      if(numTester[i] > numTester[(numTester.length/ 2) - 1] && numTester[i] <= numTester[numTester.length-1]){
        secondArr.push(numTester[i])
      }

    num1 = firstArr[firstArr.length-1]
    num2 = secondArr[0]
    mean = (num1 + num2) / 2

    //pop(): Remove an item from the end of an array.
    //shift(): Remove an item from the beginning of an array.

    } else if(numTester.length % 2 != 0){

        while (numTester.length != 1){
          numTester.pop()
          numTester.shift()
        }
        mean = numTester[0]

      }
  }

  console.log(mean)
}
median([4, 7, 11, 12, 15])
