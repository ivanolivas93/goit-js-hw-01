const ADMIN_PASSWORD = "jqueryismyjam";
let message;
const password = prompt("Введите пароль");

if (password === null || password == "") {
  let message = "Отменено пользователем!";
  console.log(message);
  alert(message);
} else if (password === ADMIN_PASSWORD) {
  let message = "Добро пожаловать!";
  console.log(message);
  alert(message);
} else {
  let message = "Доступ запрещен, неверный пароль!";
  console.log(message);
  alert(message);
}