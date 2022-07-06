/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.querySelector('#convert-btn');
const inputField = document.querySelector('#unit-value');
const lengthResult = document.querySelector('#length-text');
const volumeResult = document.querySelector('#volume-text');
const massResult = document.querySelector('#mass-text');

convertBtn.addEventListener('click', function () {
  length(inputField.value);
  volume(inputField.value);
  mass(inputField.value);
});

function length(num) {
  let feet = (inputField.value * 3.281).toFixed(3);
  let baseText = `${num} meters = ${feet} feet | ${feet} feet = ${num} meters`;
  return lengthResult.innerHTML = baseText;
}

function volume(num) {
  let gallon = (inputField.value * 0.264).toFixed(3);
  let baseText = `${num} liters = ${gallon} gallons | ${gallon} gallons = ${num} liters`;
  return volumeResult.innerHTML = baseText;
}

function mass(num) {
  let pound = (inputField.value * 2.204).toFixed(3);
  let baseText = `${num} kilos = ${pound} pounds | ${pound} pounds = ${num} kilos`;
  return massResult.innerHTML = baseText;
}