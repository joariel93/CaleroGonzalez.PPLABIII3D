function obtenerPrimerElementoDeDatos(losDatos) {
    if (losDatos.length > 0) return losDatos[0];
  }
  function obtenerCabeceras(elObjeto) {
    const tr = document.createElement("tr");
    Object.keys(elObjeto).forEach((key) => {
        if(key!="id"){
  
            const th = document.createElement("th");
            th.appendChild(document.createTextNode(key));
            tr.appendChild(th);
        }
    });
    return tr;
  }
  function obtenerFila(elDato, index) {
    const tr = document.createElement("tr");
    tr.classList.add(index %2?"colorClaro":"colorOscuro")
    Object.values(elDato).forEach((value) => {
        if(elDato["id"] !== value){
            const td = document.createElement("td");
            td.appendChild(document.createTextNode(value));
            tr.appendChild(td);
            tr.setAttribute("data-id",elDato["id"])
        }
    });

    return tr
  }
  function crearCabecera(primerObjeto) {
    if (primerObjeto != null && primerObjeto != undefined) {
      const thead = document.createElement("thead");
      thead.appendChild(obtenerCabeceras(primerObjeto));
      return thead;
    }
  }
  function crearCuerpo(losDatos) {
    if (losDatos.length > 0) {
      const tbody = document.createElement("tbody");
      losDatos.forEach((dato, index) => {
        tbody.appendChild(obtenerFila(dato, index));
      });
      return tbody;
    }
  }
  function crearTablaDeDatos(losDatos) {
      const tabla = document.createElement("table");
      if(losDatos){
          tabla.appendChild(crearCabecera(obtenerPrimerElementoDeDatos(losDatos)));
          tabla.appendChild(crearCuerpo(losDatos));
        }
        return tabla;          
  }
  export default crearTablaDeDatos