function insert (num) {
   var numero =  document.getElementById('result').innerHTML;
   document.getElementById('result').innerHTML = num + numero;
}

function clean() {
   document.getElementById('result').innerHTML = " ";
}