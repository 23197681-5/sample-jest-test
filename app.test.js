const {testString, getMaxValue} = require('./app');

var inputStringOk =  "[{​​​​​​​​kg: 5, price: 100}​​​​​​​​, {​​​​​​​​kg: 7, price: 150}​​​​​​​​, {​​​​​​​​kg: 3, price: 70}​​​​​​​​]";
var inputStringWithError = "[]}()";
/*[11:04] Mateus Vianna Alves
    1) Write an efficient method that tells us whether or not an input string brackets ("{​​​​​​​​", "}​​​​​​​​",
"(", ")", "[", "]") opened and closed properly. Example: “{​​​​​​​​[]}​​​​​​​​” => true, “{​​​​​​​​(])}​​​​​​​​” => false,
“{​​​​​​​​([)]}​​​​​​​​” => false
 
​
<https://teams.microsoft.com/l/message/19:2c128c03701444c3ae5ababaf8d2c715@thread.tacv2/1648649059516?tenantId=1f9b1311-c757-4228-b0e2-7d4ade7932aa&amp;groupId=158890aa-fb6e-4faa-9bdd-2fcacb84be75&amp;parentMessageId=1648307402379&amp;teamName=BRA-01-FullStack&amp;channelName=Front-end&amp;createdTime=1648649059516>*/

test('string ok', () => {
  expect(testString(inputStringOk)).toBe(true);
}); 
test('string not ok', () => {
  expect(testString(inputStringWithError)).toBe(false);
});


/*
[11:04] Mateus Vianna Alves
    2) Think that you have an unlimited number of carrots, but a limited number of carrot
types. Also, you have one bag that can hold a limited weight. Each type of carrot has a
weight and a price. Write a function that takes carrotTypes and capacity and return the
maximum value the bag can hold.
Example:
*/

var carrotTypes = "[{​​​​​​​​kg: 5, price: 100}​​​​​​​​, {​​​​​​​​kg: 7, price: 150}​​​​​​​​, {​​​​​​​​kg: 3, price: 70}​​​​​​​​]";
var capacity = 36 //kg


test('Returns a number > 0', () => {
  expect(getMaxValue(carrotTypes, capacity)).toBeGreaterThan(0);
});


