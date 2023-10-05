const botonCalc = document.getElementById("boton");


botonCalc.addEventListener("click",()=>{

      // Función para calcular la cantidad óptima de pedido (EOQ)
      const H = document.getElementById('costo_ordenar').value;
      const D = document.getElementById('demanda').value;
      const M = document.getElementById('costo_mantenimiento').value;
      const P = document.getElementById('precio').value;


  function calcularEOQ() {
     let var1=(Math.sqrt((2 * D * H) / M));
     return var1;
     console.log("el valor de var1:"+var1);
  }
  
  // Función para calcular el costo total anual óptimo
  function calcularCostoTotalAnual() {
    const EOQ = calcularEOQ();
    return (P*D) + H * (D / EOQ) + M*( EOQ / 2);
  }
  
  // Función para calcular el número de pedidos por año
  function calcularNumeroPedidos() {
    const EOQ = calcularEOQ();
    return D / EOQ;
  }
  
  // Función para calcular el tiempo entre pedidos (en días)
  function calcularTiempoEntrePedidos() {
    const EOQ = calcularEOQ();
    return EOQ / D;
  }

const EOQ = calcularEOQ();
console.log("el valor de EOQ:  "+EOQ)
const costoTotalAnual = calcularCostoTotalAnual();
const numeroPedidos = calcularNumeroPedidos();
const tiempoEntrePedidos = calcularTiempoEntrePedidos();

// Ahora puedes usar estos valores en tus cálculos adicionales o mostrarlos al usuario.



// Ahora puedes usar estas variables en tus cálculos o procesamiento adicional.

const tabla = `<table class="table" border="1" >
<tr>
  <th class="table__thE">NOMBRE</th>
  <th class="table__thE">RESULTADO </th>
  <th class="table__thE">EQUIVALENCIA</th>
</tr>
<tr>
  <td class="table__tdE">Cantidad Optima de Pedido</td>
  <td class="table__tdE">${calcularEOQ().toFixed(3)}</td>
  <td class="table__tdE">[u]</td>
</tr>
<tr>
  <td class="table__tdE">Costo Total Anual Optimo</td>
  <td class="table__tdE">${calcularCostoTotalAnual().toFixed(3)}</td>
  <td class="table__tdE">$/Año</td>
</tr>
<tr>
  <td class="table__tdE">Numeros de Pedidos/año</td>
  <td class="table__tdE">${calcularNumeroPedidos().toFixed(3)}</td>
  <td class="table__tdE">Pedidos/Año</td>
</tr>
<tr>
  <td class="table__tdE">Tiempo Entre Pedidos</td>
  <td class="table__tdE">${calcularTiempoEntrePedidos().toFixed(3)}</td>
  <td class="table__tdE">u/Año</td>
</tr>
</table>`;

const fuera = document.getElementById("tabla");











  fuera.innerHTML = tabla;
});