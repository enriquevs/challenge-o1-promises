/**
* Let's code some things:
*
*
* Define the 'getSum' function that uses the 'sum' promise and chaining
* to get the next result in browser:
*
* Example 1 --> getSum(1)
*
* 1
* 3
* 5
* 7
*
* Example 2 --> getSum(2)
*
* 2
* 4
* 6
* 8
*
* Restrictions:
*
* - The 'sum' promise should resolve whatever num and reject when is not number.
* - Catch error and display in browser:
*
* Example getSum('car')
*
* It failed! Error: Not number.
*
**/

function sum(num) {
  return new promise (resolve, reject){
    function getsum() {

    }
  }
}



/*-------------------Driver Code-------------------------*/

console.log("==== challenge03 : Driver code ====");

//when argument is a number: 1
getSum(1);
//when argument is a number: 2
getSum(2);
//when argument is not a number
getSum('car');


// function sum(num) {
//   return new Promise((resolve, reject) => {
//     if (typeof num === 'number') {
//       resolve(num)
//     } else {
//       reject('Not number')
//     }
//   })
// }
//  function getSum(num) {
//   return sum(num)
//    .then(num => {
//     for (var i = 1; i <= 4; i++) {
//       var li = document.createElement('li')
//       li.textContent = num;
//       document.querySelector('ul').appendChild(li)
//       console.log(num);
//       num += 2;
//     }
//   })
//   .catch(error => console.log("It failed! Error:", error))
// }
