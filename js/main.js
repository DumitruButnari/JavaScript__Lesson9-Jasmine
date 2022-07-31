console.log("---------First Function------------");

function ageClassification(n) {
  var res = "";
  res =
    n < 0
      ? null
      : n <= 24
      ? "детский возраст"
      : n <= 44
      ? "молодой возраст"
      : n <= 65
      ? "средний возраст"
      : n <= 75
      ? "пожилой возраст"
      : n <= 90
      ? "старческий возраст"
      : n <= 122
      ? "долгожители"
      : null;
  return res;
}

console.log("    -1 :", ageClassification(-1)); // -1 : null
console.log("     1 :", ageClassification(1)); // 1 : детский возраст
console.log("    24 :", ageClassification(24)); // 24 : детский возраст
console.log(" 24.01 :", ageClassification(24.01)); // 24.01 : молодой возраст
console.log("    44 :", ageClassification(44)); // 44 : молодой возраст
console.log(" 44.01 :", ageClassification(44.01)); // 44.01 : средний возраст
console.log("    65 :", ageClassification(65)); // 65 : средний возраст
console.log("  65.1 :", ageClassification(65.1)); // 65.1 : пожилой возраст
console.log("    75 :", ageClassification(75)); // 75 : пожилой возраст
console.log(" 75.01 :", ageClassification(75.01)); // 75.01 : старческий возраст
console.log("    90 :", ageClassification(90)); // 90 : старческий возраст
console.log(" 90.01 :", ageClassification(90.01)); // 90.01 : долгожители
console.log("   122 :", ageClassification(122)); // 122 : долгожители
console.log("122.01 :", ageClassification(122.01)); // 122.01 : null
console.log("   150 :", ageClassification(150)); // 150 : null

console.log("---------Second Function------------");

function weekFn(n) {
  var result;

  switch (n) {
    case 1:
      result = "Понедельник";
      break;
    case 2:
      result = "Вторник";
      break;
    case 3:
      result = "Среда";
      break;
    case 4:
      result = "Четверг";
      break;
    case 5:
      result = "Пятница";
      break;
    case 6:
      result = "Суббота";
      break;
    case 7:
      result = "Воскресенье";
      break;
    default:
      result = null;
  }
  return result;
}

console.log(weekFn(1)); // 'Понедельник'
console.log(weekFn(3)); // 'Среда'
console.log(weekFn(7)); // 'Воскресенье'
console.log(weekFn(9)); // null
console.log(weekFn(1.5)); // null
console.log(weekFn("2")); // null
