// Оголошуємо функцію getElementWidth
function getElementWidth(content, padding, border) {
  // Конвертуємо значення з формату Npx у числа
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding);
  const borderWidth = parseFloat(border);

  // Обчислюємо загальну ширину елемента з урахуванням падінгу і бордера
    // Повертаємо загальну ширину
  return contentWidth + 2 * paddingWidth + 2 * borderWidth;
}

// Перевіряємо коректність роботи функції
console.log(getElementWidth("50px", "8px", "4px"));   // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px"));   // 200
