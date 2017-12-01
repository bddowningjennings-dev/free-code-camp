
let buttons = ['AC','CE','/','x','7','8','9','-','4','5','6','+','1','2','3','blank','0','.','='];

$(document).ready(() => {
  for (each of buttons) {
    let button = new Button(each);
    $(".buttons").append(button.elementDOM());
  }
})

class Button {
  constructor(value) {
    this.value = value;
  }
  elementDOM() {
    return "<div class='button' id='"+this.value+"'>"+this.value+"</div";
  }
}