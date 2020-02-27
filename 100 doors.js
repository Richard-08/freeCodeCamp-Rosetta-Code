/* 
There are 100 doors in a row that are all initially closed. You make 100 passes by the doors. The first time through, 
visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it). The second time, 
only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. The third time, visit every 3rd door 
(i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.

Implement a function to determine the state of the doors after the last pass. Return the final result in an array, 
with only the door number included in the array if it is open. */


/* //////////////////////////////// Solution ///////////////////////////////////*/

function getFinalOpenedDoors(numDoors) {
    let doorsArr = Array(numDoors).fill(false);
    for (let step = 1; step <= doorsArr.length; step += 1) {
        for (let i = step - 1; i < doorsArr.length; i += step) {
             doorsArr[i] = !doorsArr[i];
        }
    }
    let returnArr=[];
    for (let i = 0; i < doorsArr.length; i += 1) {
        if (doorsArr[i] === true) {
            returnArr.push(i + 1);
        }
    }
    return returnArr;
}

function getFinalOpenedDoors(numDoors) {
  const finalState = [];
  let i = 1;
  while (Math.pow(i, 2) <= numDoors) {
    finalState.push(Math.pow(i, 2));
    i += 1;
  }
  return finalState;
}

console.log(getFinalOpenedDoors(100)); // should return [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]