

const encriptar = () =>{
  const textoingresado = document.getElementById('texto').value;
  const nuevotexto = textoingresado.replaceAll('e','enter').replaceAll('i','imes').replaceAll('a','ai').replaceAll('o','ober').replaceAll('u','ufat')

  document.getElementById('devuelve').innerHTML = nuevotexto;
  document.getElementById('devuelve').style.display = "block";
  document.getElementById('copiar').style.display = "block";
  document.getElementById('muneco').style.display = "none";
  document.getElementById('h2').style.display = "none";
  document.getElementById('mensaje').style.display = "none";

}

const copiar = () =>{
  const textocopiado = document.getElementById('devuelve').textContent;
  navigator.clipboard.writeText(textocopiado);
  alert("EL TEXTO FUE COPIADO");
}

const desencriptar = () =>{
  const textoingresado = document.getElementById('texto').value;
  const nuevotexto = textoingresado.replaceAll('enter','e').replaceAll('imes','i').replaceAll('ai','a').replaceAll('ober','o').replaceAll('ufat','u');
  document.getElementById('devuelve').innerHTML = nuevotexto;
  document.getElementById('devuelve').style.display = "block";
  document.getElementById('copiar').style.display = "block";
  document.getElementById('muneco').style.display = "none";
  document.getElementById('h2').style.display = "none";
  document.getElementById('mensaje').style.display = "none";
}