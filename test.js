function reverse_and_combine_text(str){
  const arraySplitBySpace = str.split(" ")
  const arraySplitByLetterAndReversed = [];
  const arrayConcat = [];
  const newNumber = 1;
  const oldString = "hello";
  let poppedEntry = null;
  let endResult
  
  // stop method

   if (arraySplitBySpace.length === 1) {
     endResult = arraySplitBySpace[0]
     return endResult
   }
  
  // reverse everything
  for (let i = 0; i < arraySplitBySpace.length; i++) {
    arraySplitByLetterAndReversed.push(arraySplitBySpace[i].split("").reverse().join(""));
  }
  
  // pop the odd number at the end
  if (arraySplitByLetterAndReversed.length%2 === 1) {
    poppedEntry = arraySplitByLetterAndReversed.pop();
  }
  
  // add every pair of numbers
  for (let i = 0; i < arraySplitByLetterAndReversed.length; i+=2) {
    arrayConcat.push(arraySplitByLetterAndReversed[i] + arraySplitByLetterAndReversed[i+1]);
  }
  
  // if odd number was popped, put it back in
  if (poppedEntry) {
    arrayConcat.push(poppedEntry)
  }
  
  // create a new "sentence" with spaces
  const newString = arrayConcat.join(" ")

// restarting the recursive function
  return reverse_and_combine_text(newString)
}

console.log(reverse_and_combine_text("abc def"))
reverse_and_combine_text("abc def ghi jkl")
reverse_and_combine_text("dfghrtcbafed")
reverse_and_combine_text("234hh54 53455 sdfqwzrt rtteetrt hjhjh lllll12  44")
reverse_and_combine_text("sdfsdf wee sdffg 342234 ftt")