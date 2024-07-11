export default class Ventas {
    constructor(){
        this.acVe=0
        this.contVMYR=0
        this.contVMNR=0
    }
    procesarVendedor(v){
        this.acVe+=v.venta;
        if(v.venta>=100)
            this.contVMYR++
        if(v.venta<100)
            this.contVMNR++
    }
    acumVen(){return this.acVe}
    contadorMayor(){return this.contVMYR}
    contadorMenor(){return this.contVMNR}
}
