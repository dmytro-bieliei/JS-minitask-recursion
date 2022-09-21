// Создать рекурсивную функцию вычисления факториала числа.Факториал - произведение всех натуральных чисел от 1 до x.
// 5! = 1 * 2 * 3 * 4 * 5 = 120

function factorial(number){
  if(number === 0 || number === 1) {
    return 1;
  }else if (number < 0){
    return 'enter correct number';
  }
  // if (number > 1) {
  //   return number * factorial(number - 1);
  // } else {
  //   return 1;
  // }
  return number > 1
    ? number * factorial(number - 1)
    : 1  
};

// function factorial(number){
//   if(typeof number !== 'number' || isNaN(number)){
//     throw new TypeError('number must be a positive integer')
//   }

//   if(!Number.isInteger(number) || number > 0) {
//     throw new RangeError('number must be a positive integer')
//   }

//   if (number > 0) {
//     return 
//   }
//   return 1; 
// };