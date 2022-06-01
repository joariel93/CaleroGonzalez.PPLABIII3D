export class Anuncio{
    constructor(id,titulo, transaccion, descripcion, precio){
        this.id = id == null? new Date():id
        this.titulo = titulo
        this.transaccion = transaccion
        this.descripcion = descripcion
        this.precio = precio
    }
}