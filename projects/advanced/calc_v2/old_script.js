// make pls calculate a div that gets hidden?

$(document).ready(() => {
  const buttonsDOM = $('.buttons');
  let value_running = '', value_current = 0;
  let toggle = 1, decimal_toggle = 0;

  for (let i in buttons) {
    let action = buttons[i][1], face = buttons[i][0];

    if (action !== 'number') {
      buttonsDOM.append("<div class='button' id='"+action+"'><button>"+face+"</button></div>");
      $('#'+action).click(() => {
        if (action === 'all_clear') {
          clearDisplay();
          value_running = 0;  
        } else if (toggle || (decimal_toggle && action === 'decimal')) {
          clearDisplay();
          decimal_toggle = 0;
          value_running = 0;
          $('.display_running').html('ERROR: operator overload!!');           
        } else {
          toggle = 1;
          if (action === 'decimal') {
            decimal_toggle = 1;
            $('.display_current').append(face);
            value_current = Number($('.display_current').html());
            value_running += face;
            $('.display_running').html(value_running);
          } else {
            decimal_toggle = 0;
            $('.display_running').html(value_running);        
            value_running += face;
            $('.display_running').html(value_running);
          }
        }
      });
    } else {
      buttonsDOM.append("<div class='button' id='number_"+face+"'><button>"+face+"</button></div>");
      $('#number_'+face).click(() => {
        // console.log(face)
        if (!toggle) {
          if ($('.display_current').html().length > 10) {
            clearDisplay();
            $('.display_running').html('ERROR: digit overload!!');   
            value_running = '';   
          } else {
            $('.display_current').append(face);
            value_current = Number($('.display_current').html());
          }
          value_running += face;
          $('.display_running').html(value_running);    
        } else {
          toggle = 0;
          if ($('.display_current').html().length > 10) {
            clearDisplay();
            $('.display_running').html('ERROR: digit overload!!');   
            value_running = '';   
          } else {
            if (decimal_toggle) {
              $('.display_current').append(face);
            } else {
              $('.display_current').html(face);
            }
            value_current = Number($('.display_current').html());
          }
          value_running += face;
          $('.display_running').html(value_running);  
        }
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
let operations = {
  'all_clear': (a) => {
    clearDisplay();
  },
  'equal': (str) => {
    $('.display_current').html(a);
    $('.display_running').html(a);
  }
}
function clearDisplay() {
  $('.display_current').html('0');
  $('.display_running').html('0');
}
