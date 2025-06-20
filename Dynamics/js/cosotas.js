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

let text_busqueda=document.getElementById("texto-buscado");
let boton_contador=document.getElementById("toca-aqui");
//Variables para acrónimos
let acronimos=document.getElementById("boton_para_acronimos");
let palabra_acronimo=document.getElementById("palabra_para_sacar_acronimo");
let caracteres_con_esp;
let caracteres_sin_esp;
let palabras;
let palabras_mas_largas;
let arreglo_long_text;
let palabraLarga;

//CONTADOR
boton_contador.addEventListener("submit", function(){
    //Obtener texto con espacio 
    caracteres_con_esp=text_busqueda.value.length;
    //Obtener texto sin espacio
    arreglo_sin_esp=text_busqueda.value.split(" ");
    a=0;
    for(let i=0; i<arreglo_sin_esp.length ; i++)
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
acronimos.addEventListener("submit",function(){ 
    //Obtiene un arreglo de las frases
    let arreglo_para_acronimo=acronimos.value.split(" ");
    for(let a=0;a<arreglo_para_acronimo.length;a++)
    {
        let arreglo_acronimo=arreglo_para_acronimo[a].slice(0,1);
    }
   
});