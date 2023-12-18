//Exercise 1: Roman to Integer
// - หลักการในการเขียนเลขโรมันมีดังนี้
//     - เลขโรมันทั่วไปจะถูกเขียนโดยเริ่มจากตัวอักษรที่มาค่ามากที่สุดไปยังค่าที่น้อยที่สุดจากซ้ายไปขวา
//     - เลข 4 จะไม่ได้เขียนเป็น IIII แต่จะเขียนเป็น IV ซึ่งหมายความว่าเป็นการลบ 1 ออกจาก 5 โดยการใส่ I ก่อน V
//     - เลข 9 มีหลักการคล้ายๆกันกับเลข 4 ซึ่งจะได้เขียนเป็น IX
//     - เลขโรมันมีหลักการในการลบทั้งหมด 6 กรณี ดังนี้
//         1. I สามารถวางไว้ก่อน V (5) และ X (10) เพื่อให้ได้ 4 และ 9
//         2. X สามารถวางไว้ก่อน L (50) และ C (100) เพื่อให้ได้ 40 และ 90
//         3. C สามารถวางไว้ก่อน D (500) และ M (1000) เพื่อให้ได้ 400 และ 900
// - Function `romanToInt` รับ Parameter 1 อันซึ่งมี Value Type เป็น String และจะ Return ตัว Value เป็นตัวเลขที่มี Value Type เป็น `number` ตามค่าของมัน
// | Symbol | Value |
// | --- | --- |
// | I | 1 |
// | V | 5 |
// | X | 10 |
// | L | 50 |
// | C | 100 |
// | D | 500 |
// | M | 1000 |

const objRomanToInt = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = function (s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const currentRoman = objRomanToInt[s[i]];
    const nextRoman = i + 1 < s.length ? objRomanToInt[s[i + 1]] : 0; //prevent an "out of bounds" error

    if (currentRoman < nextRoman) {
      result += nextRoman - currentRoman;
      i++; //for skip the nextRoman(index) cuz it has already been considered
    } else {
      result += currentRoman;
    }
  }
  return result;
};
//"MCMXCIV" 1000*,100*,1000/i++,10,100//i++,1,5//i++ => (1000+(1000-100=900)+(100-10=90)+(5-1=4)) end loops

const result1 = romanToInt("III"); // 3
const result2 = romanToInt("LVIII"); // 58
const result3 = romanToInt("MCMXCIV"); //1994

console.log(result1);
console.log(result2);
console.log(result3);
