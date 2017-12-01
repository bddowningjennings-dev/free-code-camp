

$(document).ready(() => {
  const buttonsDOM = $('.buttons');
  
  for (let i in buttons) {
    let action = buttons[i][1];
    let face = buttons[i][0];

    if (action !== 'number') {
      buttonsDOM.append("<div class='button' id='"+action+"'><button>"+face+"</button></div>");
      $('#'+action).click(() => {
        let value_current = Number($('.display_current').html());
        console.log(action)
        clearDisplay();        
        if (action in operations) {
          operations[action]();
        }
      });
    } else {
      buttonsDOM.append("<div class='button' id='number_"+face+"'><button>"+face+"</button></div>");
      $('#number_'+face).click(() => {
        console.log(face)
        $('.display_current').append(face);  
      });
    }
  }
})

const buttons = [
  ['AC', 'all_clear'],
  ['CE', 'clear_entry'],
  ['/', 'division'],
  ['x', 'multiplication'],
  ['7', 'number'],
  ['8', 'number'],
  ['9', 'number'],
  ['-', 'subtraction'],
  ['4', 'number'],
  ['5', 'number'],
  ['6', 'number'],
  ['+', 'addition'],
  ['1', 'number'],
  ['2', 'number'],
  ['3', 'number'],
  ['blank', 'blank'],
  ['0', 'zero'],
  ['.', 'decimal'],
  ['=', 'equal'],
];
let arr = [];
for (let button of buttons) {
  arr.push(button[0]);
}
console.log(arr);



let operations = {
  'all_clear': () => {
    clearDisplay();
  }
}
function clearDisplay() {
  $('.display_current').html('');
  $('.display_running').html('');
}