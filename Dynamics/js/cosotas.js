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
//Variables para contador 
let text_contador=document.getElementById("texto_contador");//El input 
let boton_contador=document.getElementById("contar-btn");//Botones
//Variables para acrónimos
let acronimos=document.getElementById("acronimobtn");
let palabra_acronimo=document.getElementById("texto_acronimo");
//Variables sin sentido
let caracteres_con_esp;
let caracteres_sin_esp;
let palabras;
let palabras_mas_largas;
let arreglo_long_text;
let palabraLarga;

//CONTADOR
boton_contador.addEventListener("click", function(event){
    event.preventDefault();
    //Obtener texto con espacio 
    caracteres_con_esp=text_contador.value.length;
    let texto=document.getElementById("resultado");
    texto.textContent="Número de caracteres con espacio: "+caracteres_con_esp;
    //Obtener texto sin espacio
    arreglo_sin_esp=text_contador.value.split(" ");
    a=0;
    for(let i=0; i<arreglo_sin_esp.length ; i++)
    {
        a+=arreglo_sin_esp[i].length;
    }
    let texto2=document.getElementById("resultado2");
    texto2.textContent="Número de caracteres sin espacio: "+ a;
    //Contar palabras
    let texto3=document.getElementById("resultado3");
    texto3.textContent="Número de palabras: "+arreglo_sin_esp.length;
    //Palabra más grande 
    

});
//BUSCADOR

//ACRONIMOS
acronimos.addEventListener("click",function(event){
    event.preventDefault(); 
    //Obtiene un arreglo de las frases
    let arreglo_acronimo;
    let arreglo_para_acronimo=palabra_acronimo.value.split(" ");
    console.log(arreglo_para_acronimo.length-1);
     let texto5=document.getElementById("resultado5");
    
    for(let a=0;a<=arreglo_para_acronimo.length-1;a++)
    {
        arreglo_para_acronimo[a].slice(0,1);
        texto5.textContent+=arreglo_para_acronimo[a].slice(0,1);
    } 
});