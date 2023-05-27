function getValue(){
  var value = document.getElementById("nome").value;
  document.getElementById("resultado").innerHTML = 'Bom vindo, ' + value + "!";
}
function removeValue(){
  document.getElementById("nome").value = "";
  document.getElementById("resultado").innerHTML = "";
}