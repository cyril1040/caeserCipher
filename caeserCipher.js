function rot13(str) {
  var myCode = str.split("");//string to array
  var myDecodeStr = [];
  //create an alphabet arrays
  let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
  // iterate through the inputted  string array
  for(var i = 0; i < myCode.length; i++){
    //check whether the current value is in array
    if(alphabets.indexOf(myCode[i])===-1){
      //add value to mydecoder
      myDecodeStr.push(myCode[i]);
    }else{
      // iterate through the alphabet
      for(var j = 0; j < alphabets.length; j++){
        if(myCode[i] === alphabets[j]){
          myDecodeStr.push(alphabets[j+13])
        }
      }
    }
  }

  return myDecodeStr.join("");
}

rot13("SERR PBQR PNZC");
