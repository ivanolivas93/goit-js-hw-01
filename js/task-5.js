let price = 0;
let country = prompt("Введите Вашу страну");
let normalizedCountry = country.toLowerCase();

switch (country) {
  case 1:
    result = Китай;
    price = 100;
    break;

  case 2:
    result = Чили;
    price = 250;
    break;

  case 3:
    result = Австралия;
    price = 170;
    break;

  case 4:
    result = Индия;
    price = 80;
    break;

  case 5:
    result = Ямайка;
    price = 120;
    break;

  default:
    alert("В вашей стране доставка недоступна");
}
let message = "Доставка в ${normalizedCountry} будет стоить ${price} кредитов";
console.log(message);
