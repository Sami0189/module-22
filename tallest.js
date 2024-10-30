// const heights = [43,65,75,23,73,76];

// // you need to use three dot
// const max = Math.max(...heights);
// console.log(max);


const heights = [43,65,76,23,73,71];

function getMax(numbers){
    let max = numbers[0];//index 0 = 43;ata ka max dora hoicha
   for(const num of numbers){
     if(num>max){
     max = num;
     }
    }
    return max;
}

const max = getMax(heights);
console.log(max);


/**
 * The Condition: if (num > max)
  
.This line checks whether the current number (num) is greater than the current maximum value (max).
.num is the current element being examined in the loop (e.g., the first time through the loop, it would be 43, then 65, and so on).
.max is initialized to the first element of the array, so at the start, it’s 43.
*
*
*
*The Action: max = num

.When the condition is true (meaning num is greater than max), this line updates max to the new value (num).
.Continuing with the example:
.When num is 65, max gets updated to 65.
.When num is 76, max gets updated to 76.
 */



const smallest = [43,65,76,23,73,71];

function theSmallest (numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num<min){
            min = num;
        }
    }
    return min;
}
 const min = theSmallest(smallest);
 console.log(min);