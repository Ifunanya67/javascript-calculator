
console.log("calculator");
 const num1 = parseFloat(prompt("Enter num1:"));
const operator = prompt ("Enter operator to use:(+,-,*,/");

 const num2 = parseFloat(prompt("Enter num2:"));

 let result;
 if (operator === '+') {
    result = num1 + num2
 } else if (operator === '-' ){
    result = num1 -num2
 }
   else if (operator === '*'){
    result = num1 * num2
   }
   else if (operator === '/'){
    result = num1/num2
   }

   alert(result);


