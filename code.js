var a = 0; 
var b = 0; 
var c = 0; 
var dongho; 
  document.getElementsByClassName("manhinh")[0].value = "00";
  document.getElementsByClassName("manhinh")[2].value = "00";
  document.getElementsByClassName("manhinh")[4].value = "00";
function start() {
  clearInterval(dongho); 
  dongho = setInterval(() => {
    a++;
    if (a == 60) {
      a = 0;
      b++;
    }
    if (b == 60) {
      b = 0;
      c++;
    }
    if (c == 99) {
      reset();
      return;
    }

    document.getElementsByClassName("manhinh")[0].value = ('0' + c).slice(-2);
    document.getElementsByClassName("manhinh")[2].value = ('0' + b).slice(-2);
    document.getElementsByClassName("manhinh")[4].value = ('0' + a).slice(-2);
  }, 1000);
}

function reset() {
  clearInterval(dongho);
  a = b = c = 0;
  document.getElementsByClassName("manhinh")[0].value = "00";
  document.getElementsByClassName("manhinh")[2].value = "00";
  document.getElementsByClassName("manhinh")[4].value = "00";
}

function sotop() {
  clearInterval(dongho);
}