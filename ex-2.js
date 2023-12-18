//Exercise 2: Fizz Buzz
// - ให้เขียน Function ที่ชื่อว่า `fizzBuzz` เพื่อ Return ตัว Array ที่มี Value เป็น String ของตัวเลข ตามจำนวนของ Parameter `n` ที่กำหนดเข้ามาและจะมีเงื่อนไขพิเศษดังนี้
//     - Value ที่มี Index ที่หารด้วย 3 ลงตัวจะมี Value เป็น “Fizz”
//     - Value ที่มี Index ที่หารด้วย 5 ลงตัวจะมี Value เป็น “Buzz”
//     - Value ที่มี Index ที่หารด้วย 3 และ 5 ลงตัวจะมี Value เป็น “FizzBuzz”
const fizzBuzz = function (n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
};

const result1 = fizzBuzz(3);
const result2 = fizzBuzz(5);
const result3 = fizzBuzz(15);

console.log(result1); // ["1","2","Fizz"]
console.log(result2); // ["1","2","Fizz","4","Buzz"]
console.log(result3); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
