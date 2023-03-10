//1.Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
// function min(firstNum, secondNum) {
//     if (firstNum < secondNum) {
//         return firstNum
//     } else if (secondNum < firstNum) {
//         return secondNum
//     } else {
//         return firstNum
//     }
// }
// console.log(min(11 ,12))
// console.log(min(12 ,11))
// console.log(min(32 ,32))

//2.Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
// function nums(firstNum, secondNum) {
//     let maxNum = 0;
//     let minNum = 0;
//     if (firstNum > secondNum) {
//         maxNum = firstNum
//         minNum = secondNum
//     } else if (firstNum < secondNum) {
//         maxNum = secondNum
//         minNum = firstNum
//     } else {
//         console.log("Оба числа равны")
//         return
//     }
//     for (let i = maxNum; i >= minNum; i--) {
//         if (i % 2 == 0) {
//             console.log(i)
//         }
//     }
// } 
// //nums(0, 20)
// //nums(20, 0)
// nums(10, 10)

//3.Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) 
//и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
// function power(firstNum, secondNum = 2) {
//     return firstNum**secondNum
// }
// console.log(power(5))
// console.log(power(5, 3))
// console.log(power(2, 2))

//4.Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
// function sum(n) {
//     let sumNum = 0;
//     for (let i = 1; i <= n; i++) {
//         sumNum += i
//     }
//     return sumNum
// }
// console.log(sum(5));
// console.log(sum(75))

//5.Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. 
//Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
// function sum(n, m) {
//     let sum1 = 0;
//     let sum2 = 0;
//     for (let i = n; i <= m; i++) {
//         if(i % 2 === 0) {
//             sum2 += i
//         } else {
//             sum1 += i
//         }
//     }
//     console.log(sum2)
//     console.log(sum1)
// }
// sum (1, 31)

//6.Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. 
//Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - 
//функция возвращает первый из этих элементов. 
//Пример: [ 'one', 'two', 'three' ] => 'three'
function string(arr) {
    if (arr.length === 0) {
        return null
    }
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max.length < arr[i].length) {
            max = arr[i]
        }
    }
    console.log(max);
}
string(['one', 'two', 'three', 'eighty', 'ten'])