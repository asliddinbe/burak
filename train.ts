// I-Task
function findNumber(getNumbers: number[]) {
  interface ReduceNum {
    [key: number]: number;
  }
  const reduceNum = getNumbers.reduce(
    (reduceObject: ReduceNum, numbers: number) => {
      reduceObject[numbers] = (reduceObject[numbers] || 0) + 1;
      return reduceObject;
    },
    {}
  );

  const result = Object.keys(reduceNum).reduce((a, b) => {
    return reduceNum[Number(a)] > reduceNum[Number(b)] ? a : b;
  });
  return result;
}
console.log(findNumber([5, 3, 5, 5, 5]));









/* Project Standards:
- Logging standards:
- Naming standards:
       function, method, variable => CAMEL
       class => PASCAL
       folder => KEBAB
       css => SNAKE

-Error handling
       */

/** 
 Traditionl API
 Rest API
 GraphQL API
 ...
 */

 /*
   Traditional FD => BSSR => EJS
   Modern FD => SPA => REACT
  */





// // H2-Task

// function getNum(getStr: String): String {
//   const numArr: number[] = [];
//   getStr.split("").forEach((ele) => {
//     if (!isNaN(Number(ele))) {
//       numArr.push(Number(ele));
//     }
//   });
//   return numArr.join("");
// }

// console.log(getNum("norther1336npolar"));






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