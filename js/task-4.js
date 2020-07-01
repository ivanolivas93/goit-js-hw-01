let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;
let orderDroids = prompt("Введите желаемое количество дроидов");

if (orderDroids === null) {
  console.log("Отменено пользователем!");
} else {
  totalPrice = orderDroids * pricePerDroid;
}

if (totalPrice >= credits) {
  console.log("Недостаточно средств на счету!");
} else {
  credits -= totalPrice;
  console.log(
    `Вы купили ${orderDroids} дроид(ов), на счету осталось ${credits} кредитов.`
  );
}
