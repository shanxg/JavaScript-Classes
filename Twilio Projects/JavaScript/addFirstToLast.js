function addFirstToLast(inputArray) {
    let firstAndLast = '';

    if (inputArray.length > 0) {
      firstAndLast = inputArray.at(0) + inputArray.at(-1);
    }
  
    return firstAndLast;
}

console.log(addFirstToLast(['first', 'second', 'third']));