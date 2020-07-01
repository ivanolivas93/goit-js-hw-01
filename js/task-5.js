let price = 0;
const country = prompt("Введите Вашу страну");
const normalizedCountry = country.toLowerCase();

switch (normalizedCountry) {
  case "китай":
    price = 100;
    break;

  case "чили":
    price = 250;
    break;

  case "австралия":
    price = 170;
    break;

  case "индия":
    price = 80;
    break;

  case "ямайка":
    price = 120;
    break;

  default:
    const message = "В вашей стране доставка не доступна";
    alert(message);
}
console.log(`Доставка в ${normalizedCountry} будет стоить ${price} кредитов`);
