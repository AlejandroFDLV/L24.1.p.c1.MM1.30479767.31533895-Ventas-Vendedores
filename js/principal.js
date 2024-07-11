/*ENUNCIADO
Se conoce el monto de ventas de varios vendedores. Se desea conocer la cantidad de ventas
que fueron por 100$ o menos, cantidad de ventas mayores a 100$. Asimismo, se desea saber el
monto total en $ de todas las ventas.
Se dispone de los siguientes datos de varias vendedores: (nombre, monto venta)
(Mary, 150), (José, 135), (Carlos, 160), (Pedro, 75)*/

import Cl_Venta from "./Cl_Venta.js"
import Cl_Vendedor from "./Cl_Vendedor.js"

let vts=new Cl_Venta()
let vdr1 =new Cl_Vendedor("Mary", 150)
let vdr2 =new Cl_Vendedor("Jose", 135)
let vdr3 =new Cl_Vendedor("Carlos", 160)
let vdr4 =new Cl_Vendedor("Pedro", 75)

vts.procesarVendedor(vdr1)
vts.procesarVendedor(vdr2)
vts.procesarVendedor(vdr3)
vts.procesarVendedor(vdr4)

let salida=document.getElementById("salida")
salida.innerHTML=`Cantidad de ventas que fueron por 100$ o menos: ${vts.contadorMenor()}
<br>Cantidad de ventas mayores a 100$: ${vts.contadorMayor()}
<br>Monto total de las ventas: ${vts.acumVen()}$.`