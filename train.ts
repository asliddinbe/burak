//Task-G method 
// function getHighestIndex(arr) {
//     let maxValue = arr[0];
//     let maxIndex = 0;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > maxValue) {
//             maxValue = arr[i];
//             maxIndex = i;
//         }
//     }

//     return maxIndex;
// }

// let index = getHighestIndex([5, 21, 12, 21, 8]);
// console.log('method_1:', index);

//Task-H
// function getPositive(numbers: number[]) {
//     let aNum: number[] = [];
//     for (let i = 0; i < numbers.length; i++) {
//       if (numbers[i] > 0) {
//         aNum.push(numbers[i]);
//       }
//     }
//     const aSrt: string = aNum.join("");
//     return aSrt;
//   }
//   console.log(getPositive([1, -4, 2]));