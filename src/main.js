// Створіть функцію reverseArray, яка приймає масив і повертає новий масив,
// елементи якого розташовані у зворотному порядку.

const originalArray = [1, 2, 3, 4, 5];

const reverseArray = (array) => array.reverse();

const reversedArray = reverseArray(originalArray);
console.log(reversedArray); // [5, 4, 3, 2, 1]

// Створіть функцію uniqueValues, яка приймає два масиви і повертає новий масив,
// що містить тільки унікальні значення з обох масивів (без дублікатів).

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const uniqueValues = (array1, array2) => [...new Set([...array1, ...array2])];

const uniqueValuesArray = uniqueValues(array1, array2);
console.log(uniqueValuesArray); // [1, 2, 3, 4, 5, 6, 7]

// Напишіть функцію calculateAverageGrade, яка приймає на вхід масив об'єктів з
// інформацією про студентів (ім'я, вік, середній бал) і повертає середній бал усіх студентів.

const students = [
    { name: "Alice", age: 20, grade: 4.5 },
    { name: "Bob", age: 21, grade: 3.9 },
    { name: "Charlie", age: 19, grade: 4.8 }
];

const calculateAverageGrade = (studentsData) => {
    let sum = 0;
    studentsData.forEach(studentsItem => sum += studentsItem.grade);

    return (sum / studentsData.length).toFixed(1);
}

console.log(calculateAverageGrade(students)); // 4.4
