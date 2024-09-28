  // // N - TASK
  
  function polli(tr: string): boolean {
    const arbuz: string = tr.split("").reverse().join("");
    if (arbuz !== tr) {
      return false;
    }
    return true;
  }
  console.log(polli("rotator"));
  

// M-Task

// function getSquareNumbers(getNumbers: number[]) {
//   interface obj {
//     [key: string]: number;
//   }

//   const result: any = [];
//   const mapR = getNumbers.map((ele) => {
//     const Obj: obj = {};
//     let scuar: number = ele * ele;
//     let num: number = ele;
//     let scu: number = scuar;
//     Obj.number = num;
//     Obj.scuare = scu;
//     return result.push(Obj);
//   });
//   return result;
// }
// console.log(getSquareNumbers([1, 2, 3,]));


// //TASK - L
// function polarbear (getString: string) {
//   const kodiakbear: string[] = getString.split(" ");
//   const brownbear = kodiakbear.map((ele) => {
//    const b = ele.split("").reverse();
//    return b.join("");
//   })
//   return brownbear.join(" ");
//  }
//  console.log(polarbear("we dislike coding"))

//  //K-Task
 
//  function unliFind(words: string): number {
//   const getWord: string[] = words.split("");
//   let count: number = 0;
//   for (let i = 0; i < getWord.length; i++) {
//     if (
//       getWord[i] === "i" ||
//       getWord[i] === "a" ||
//       getWord[i] === "u" ||
//       getWord[i] === "o" ||
//       getWord[i] === "e" ||
//       getWord[i] === "o'"
//     ) {
//       count++;
//     }
//     count;
//   }
//   return count;
// }
// console.log(unliFind("string"));

//task-J

// function findWord(getWord: string) {
//   const words = getWord.split(" ");
//   let no = "";
//   words.forEach((ele) => {
//     if (ele.length > no.length) {
//       no = ele;
//     }
//   });
//   return no;
// }
// const word = "I wanna go to Burkina-Sila!";
// console.log(findWord(word));
/* Project standarts:

- Logging standarst(Morgan format va //controllerni har bitta methodini log qilyapmiz)
- Naming standarts
    function nomlari, method, variables - Camel case(goHome, getLogin, getSignup)
    class => Pascal (MemberService)
    folder, file => Kebab
    css => Snake case (button_style)
- ERROR handling
*/



/**
front end ni 2 xil developmenti bor:

 -Traditional Front end => SSR(Adminka) => EJS
 -modern FD             => SPA(User's application) => REACT library
 
*/





// // I-Task
// function findNumber(getNumbers: number[]) {
//   interface ReduceNum {
//     [key: number]: number;
//   }
//   const reduceNum = getNumbers.reduce(
//     (reduceObject: ReduceNum, numbers: number) => {
//       reduceObject[numbers] = (reduceObject[numbers] || 0) + 1;
//       return reduceObject;
//     },
//     {}
//   );

//   const result = Object.keys(reduceNum).reduce((a, b) => {
//     return reduceNum[Number(a)] > reduceNum[Number(b)] ? a : b;
//   });
//   return result;
// }
// console.log(findNumber([5, 3, 5, 5, 5]));









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