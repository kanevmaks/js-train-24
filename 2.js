console.log("Завдання: 2 ==============================");

// Створюємо функцію task2
function task2() {
  // Створюємо функцію promise1
  function promise1() {
    // Повертаємо новий проміс
    return new Promise((resolve) => {
      // Використовуємо setTimeout для імітації асинхронної операції, яка завершується через 2 секунди.
      // Після 2 секунд викликаємо resolve з результатом проміса, який є рядком "Проміс 1 виконано"
      setTimeout(() => {
        resolve("Проміс 1 виконано");
      }, 2000);
    });
  }
  // Створюємо функцію promise2
  function promise2() {
    // Повертаємо новий проміс
    return new Promise((resolve) => {
      // Використовуємо setTimeout для імітації асинхронної операції, яка завершується через 5 секунди.
      // Після 5 секунд викликаємо resolve з результатом проміса, який є рядком "Проміс 2 виконано"
      setTimeout(() => {
        resolve("Проміс 2 виконано");
      }, 5000);
    });
  }
  // Використовуємо Promise.race для визначення, який проміс виконується першим.
  Promise.race([promise1(), promise2()])
    // Метод повертає новий проміс, який вирішується або відхиляється негайно після розв'язання або відхилення будь-якого з промісів у переданому списку.
    // У разі успіху виводимо результат
    .then((data) => {
      console.log(data);
    })
    // У разі помилки виводимо повідомлення про помилку
    .catch((error) => {
      console.log(error);
    })
    // Незалежно від результату, виводимо повідомлення про завершення обробки промісів, який є рядом "Завдання 2 завершено"
    .finally(() => {
      console.log("Завдання 2 завершено");
    });
}

// Викликаємо функцію task2
task2();
