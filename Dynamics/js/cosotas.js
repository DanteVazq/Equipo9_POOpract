let palabras_mas_largas;
let arreglo_long_text;
let palabraLarga;
let acronimos=document.getElementById("boton_para_acronimos");
let palabra_acronimo=document.getElementById("palabra_para_sacar_acronimo");
//get de los botones para cambiar de modo
let contadorBtn=document.getElementById("contador-btn");
let buscadorBtn=document.getElementById("buscador-btn");
let acronimoBtn=document.getElementById("acronimo-btn");
//get de los divs de los modos
let contContador=document.getElementById("contenedor_contador");
let contBuscador=document.getElementById("contenedor_buscador");
let contAcronimo=document.getElementById("contenedor_acronimo");
//Desactivar los modos y activar con botones
contBuscador.style.display = "none";
contAcronimo.style.display = "none";
buscadorBtn.addEventListener("click", ()=>{
    contBuscador.style.display = "block";
    contContador.style.display = "none";
    contAcronimo.style.display = "none";
});
acronimoBtn.addEventListener("click", ()=>{
    contBuscador.style.display = "none";
    contContador.style.display = "none";
    contAcronimo.style.display = "block";
});
contadorBtn.addEventListener("click", ()=>{
    contBuscador.style.display = "none";
    contContador.style.display = "block";
    contAcronimo.style.display = "none";
});
//CONTADOR
boton_busca.addEventListener("click", function(){
    //Obtener texto con espacio 
    caracteres_con_esp=text_busqueda.value.length;
    //Obtener texto sin espacio
    arreglo_sin_esp=text_busqueda.value.split(" ");
    a=0;
    for(i=0; i<=arreglo_sin_esp.length ; i++)
    {
        a+=arreglo_sin_esp[i].length;
        arreglo_long_text.push(a);
    }
    //Contar palabras
    arreglo_sin_esp.lengt;
    //Buscar palabra más larga
    let maximo=Math.max(arreglo_long_text);
    let posicion= arreglo_long_text.indexOf(maximo);
    palabraLarga=arreglo_sin_esp[posicion];
});
//BUSCADOR
//ACRONIMOS
acronimos.addEventListener("click",function(){
    
});