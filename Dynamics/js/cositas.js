let text_busqueda=document.getElementById("texto-buscado");
let boton_busca=document.getElementById("toca-aqui");
let caracteres_con_esp;
let caracteres_sin_esp;
let palabras;
let palabras_mas_largas;
let arreglo_long_text;
let palabraLarga;
let acronimos=document.getElementById("boton_para_acronimos");
let palabra_acronimo=document.getElementById("palabra_para_sacar_acronimo");
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



