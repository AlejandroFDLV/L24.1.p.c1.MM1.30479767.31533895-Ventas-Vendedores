export default class Vendedor {
    constructor(nombre, venta){

    this.nombre=nombre
    this.venta=venta
    }
    set nombre(nombre){this._nombre=nombre}
    set venta(venta){this._venta=venta}

    get nombre(){return this._nombre}
    get venta(){return this._venta}
}