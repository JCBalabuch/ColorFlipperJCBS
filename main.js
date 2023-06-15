import './style.css';

const COLOR_PALETTE = {
  '#F7F0F5': 'Magnolia',
  '#DECBB7': 'Dun',
  '#D5DDBC': 'Beige',
  '#B6C197': 'Sage',
  '#937B63': 'Chamoisee',
  '#8F857D': 'Battleship gray',
  '#8A9B68': 'Moss green',
  '#5C5552': 'Walnut brown',
  '#433633': 'Van Dyke'
};

const addOptionToColorPicker = () => {
  const colorPickertSelect = document.querySelector('#color-picker');

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement('option');
    option.value = color;
    option.innerText = COLOR_PALETTE[color];

    colorPickertSelect.append(option);
  });
};

const addEventListenerToColorPicker = () => {
  const colorPickertSelect = document.querySelector('#color-picker');
  const colorName = document.querySelector('#color-name');

  colorPickertSelect.addEventListener('change', (ev) => {
    const newColor = ev.target.value;

    document.body.style.backgroundColor = newColor;

    const ColorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`;
    colorName.innerText = COLOR_PALETTE[newColor] ? ColorNameText : '-';
  });
};

addOptionToColorPicker();
addEventListenerToColorPicker();
