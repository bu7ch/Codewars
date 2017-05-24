function bonusTime(salary, bonus) {

var total = '';

if (bonus === true) {
total = salary * 10;
}
else {
total = salary;
}

return '£' + total.toString();
}
