
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
  [0, 'blank'],
  ['0', 'zero'],
  ['.', 'decimal'],
  ['=', 'equal'],
];

$(document).ready(() => {

  for (each of buttons) {
    let button = new Button(each[0], each[1]);
    $(".buttons").append(button.elementDOM());
  }
  $('.button').click((e) => {
    let click_value = e.target.innerHTML;
    display(click_value);
  });
})


class Button {
  constructor(value, name) {
    this.value = value;
    this.name = name;
  }
  elementDOM() {
    return "<div class='button "+this.name+"'><button>"+this.value+"</button></div>";
  }
}

function display(click_value) {
  const display_current = $('.display_current');
  const display_running = $('.display_running');
  let total = $(".blank > button");
  let value_last = Number(total.html());
  let value_current = Number(display_current.html());
  let value_running = display_running.html();

  if (isNaN(click_value) && click_value !== '.') {
    let oper = buttons.filter((each) => each[0] === click_value)[0][1];
    total.html(operations[oper](value_last,value_current));
    // display_current.html(total.html());
  }

  if (!isNaN(value_running + click_value) && click_value !== '.') {
    value_running = Number(value_running + click_value);
    display_current.html(value_running);
    console.log(value_running);
  } else {
    value_running += click_value;
    console.log(`${click_value} is  a non-number`);
  }
  display_running.html(value_running);
}

function isNaN(value) {
  return Number.isNaN(Number(value));
}

let operations = {
  'addition': function(a,b) { return a + b },
  'subtraction': (a,b) => a - b,
  'multiplication': (a,b) => a * b,
  'division': (a,b) => a / b
}