var inputRed = document.querySelector('#input-red');
var rangeRed = document.querySelector('#range-red');

var inputGreen = document.querySelector('#input-green');
var rangeGreen = document.querySelector('#range-green');

var inputBlue = document.querySelector('#input-blue');
var rangeBlue = document.querySelector('#range-blue');

var colorBox = document.querySelector('#colors');

const intializeValues = () => {
  inputRed.value = 0;
  rangeRed.value = 0;

  inputGreen.value = 0;
  rangeGreen.value = 0;

  inputBlue.value = 0;
  rangeBlue.value = 0;
};

const updateRGBColor = () => {
  colorBox.style.backgroundColor = `rgb(${inputRed.value}, ${inputGreen.value}, ${inputBlue.value})`;
};

const updateRedValue = (element) => {
  inputRed.value = event.target.value;
  updateRGBColor();
};

const updateGreenValue = (element) => {
  inputGreen.value = element.target.value;
  updateRGBColor();
};

const updateBlueValue = (element) => {
  inputBlue.value = element.target.value;
  updateRGBColor();
};

window.onload = () => {
  intializeValues();

  rangeRed.addEventListener('input', updateRedValue);
  rangeGreen.addEventListener('input', updateGreenValue);
  rangeBlue.addEventListener('input', updateBlueValue);
};
