function getClossingPair(char){
 return char == "["? "]": char=="{"? "}" : ")";
}

function testString(inputString) {
  var entry = [];
  var last = "";
  var ok = true;
  for (var i = 0; i < inputString.length; i++) {
    if (["[", "{", "("].includes(inputString.charAt(i)))
      entry.push(inputString.charAt(i));
    if (["]", "}", ")"].includes(inputString.charAt(i))) {
      var last = entry.pop();
      if (getClossingPair(last) != inputString.charAt(i)) {
        console.log(last);
        ok = false;
        break;
      }
    }
  }
  return ok;
}

function getMaxValue(carrotTypes, capacity){
  console.log(carrotTypes);
  var carrots = JSON.parse(carrotTypes);
  console.log(carrots);
  var weight;
  while(weight<capacity){

  }

}

module.exports = {testString, getMaxValue};