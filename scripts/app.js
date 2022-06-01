import {Anuncio_Auto} from "./anuncio_auto.js"
import crearTablaDeDatos from "./tablaDinamica.js"

window.addEventListener("submit", function(e) {
    //document.getElementById('elForm').addEventListener("submit", function(e) {
      e.preventDefault(); 
      AgregarAnuncio()
      LimpiarForm()
      actualizarTabla()
   // })
  });
const $frmAnuncios = document.forms[0]
$frmAnuncios.addEventListener("submit",(e)=>{
  e.preventDefault()

})
window.addEventListener("click",(e)=>{
  if(e.target.matches("tr td"))
    console.log(e.target.parentElement.dataset.id)
})
function actualizarTabla(){
  const container = document.querySelector(".table-container")
  while(container.childNodes>0){
    container.removeChild(container.childNodes[0])
  }
  const losDatos = ObtenerItemsDeLocalStorage("Anuncios")
  document.querySelector(".table-container").appendChild(crearTablaDeDatos(losDatos));
}

function AgregarAnuncio(){
    debugger
    const titulo = document.getElementById("titulo").value
    const transaccion = ObtenerRadioButtonSeleccionado("transaccion")
    const descripcion = document.getElementById("descripcion").value
    const precio = parseInt(document.getElementById("precio").value)
    const puertas = parseInt(document.getElementById("puertas").value)
    const kms = parseInt(document.getElementById("kms").value)
    const potencia = parseInt(document.getElementById("potencia").value)

    const nuevoAnuncio = new Anuncio_Auto(null,titulo,transaccion, descripcion,precio, puertas, kms, potencia)
    let lista = ObtenerItemsDeLocalStorage("Anuncios")
    if(lista == null){
        const arrayAnuncios = []
        arrayAnuncios.push(nuevoAnuncio)
        localStorage.setItem("Anuncios", JSON.stringify(arrayAnuncios)) 
    }
    else{
        let aux = []
        lista.forEach((item)=>{
            aux.push(new Anuncio_Auto(item.id,item.titulo, item.transaccion, item.descripcion, item.precio, item.puertas, item.kms,item.potencia))
        })
        aux.push(nuevoAnuncio)
        localStorage.setItem("Anuncios", JSON.stringify(aux))
    }
}

function ObtenerRadioButtonSeleccionado(name){
    var radios = document.getElementsByName(name);
    var selected = Array.from(radios).find(radio => radio.checked);
    return selected.value;
}
function ObtenerItemsDeLocalStorage(nombreItem){
    return JSON.parse(localStorage.getItem(nombreItem))
}
function LimpiarForm(){
    
}