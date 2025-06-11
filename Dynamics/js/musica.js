class Cancion{

    constructor(nombre, id, genero, artista, url)
    {
        this.nombre = nombre;
        this.id = id;
        this.genero = genero;
        this.artista = artista;
        this.url = url;
        this.reproduciendo = false; 
    }
    setNombre(nombre)
    {
        this.nombre = nombre;
        console.log("Nombre cambiado a: " + this.nombre);
    }   
    getNombre(){
        console.log(this.nombre);
    }
    setId(id)
    {
        this.id = id;
        console.log("ID cambiado a: " + this.id);
    }
    getId()
    {
        console.log(this.id);
    }
    setGenero(genero)
    {
        this.genero = genero;
        console.log("Género cambiado a: " + this.genero);
    }
    getGenero(){
        console.log(this.genero);
    }
    setArtista(artista){
        this.artista = artista;
        console.log("Artista cambiado a: " + this.artista);
    }
    getArtista(){
        console.log(this.artista);
    }
    setUrl(url){
        this.url = url;
        console.log("URL cambiada a: " + this.url);
    }
    getUrl(){
        console.log(this.url);
    }
    //Devuelve true si esta reproduciendo, false en otro caso
    estaReproduciendo()
    {
        console.log( this.reproduciendo );
    }
    //Cambia de no reproduciendo a reproduciendo
    play()
    {
        this.reproduciendo = true;
    }
    //Cambia de reproduciendo a no reproduciendo
    stop()
    {
        this.reproduciendo = false;
    }
}
class ListaDeReproduccion
{
    constructor(arreglo)
    {
        this.lista = arreglo;
    }
    //Elimína el elemento del índice y lo devuelve
    pop(indice)
    {  /* Metodo que muestra una cancion y la elimina*/
        let eliminado = this.lista.splice(indice-1, 1);
        console.log("Canción eliminada: " + eliminado[0].nombre);
    }
    //Inserta un objeto canción dentro de la lista
    push(objeto)
    {
        this.lista.push(objeto);
        console.log("Canción añadida: " + objeto.nombre);
    }
    //Devuelve la longitud de la lista
    getSize()
    {
        
    }
    shuffle()
    {
        
    }
    //Devuelve la lista
    get()
    {
        for ( let i = 0; i < this.lista.length; i++)
        {
            console.log("Cancion " + this.lista[i].getNombre());
        }
    }
    fusionar(listaDeReproduccion)
    {
        //Visto en clase
    }

}

canciones = 
[ 
  new Cancion("Bohemian Rhapsody", 1, "Rock", "Queen", "https://www.youtube.com/watch?v=yk3prd8GER4"),
  new Cancion("Billie Jean", 2, "Pop", "Michael Jackson", "https://www.youtube.com/watch?v=DKFS2tDsZRY"),
  new Cancion("Still D.R.E.", 3, "Hip Hop", "Dr. Dre ft. Snoop Dogg", "https://www.youtube.com/watch?v=BaFF4OkLOss"),
  new Cancion("Wake Me Up", 4, "Electrónica", "Avicii", "https://www.youtube.com/watch?v=p_9pwEiOQ6E"),
  new Cancion("Kill Bill", 5, "R&B", "SZA", "https://www.youtube.com/watch?v=sk6rMb8OsQY"),
  new Cancion("Despacito", 6, "Pop", "Justin Beiber ft. Luis Fonsi & Daddy Yankee", "https://www.youtube.com/watch?v=TfkP5ubz1z4"),
  new Cancion("Take Me Home, Country Roads", 7, "Country", "John Denver", "https://www.youtube.com/watch?v=uu7j_xljCRY"),
  new Cancion("What a Wonderful World", 8, "Jazz", "Louis Armstrong", "https://www.youtube.com/watch?v=A3yCcXgbKrE"),
  new Cancion("The Thrill Is Gone", 9, "Blues", "B.B. King", "https://www.youtube.com/watch?v=HpP5ri5yv04"),
  new Cancion("The Other Side", 10, "Pop", "The Greatest Showman", "https://www.youtube.com/watch?v=-OX6pEeVVVo"),
  new Cancion("Domestic De Violence", 11, "J-pop", "ADO", "https://www.youtube.com/watch?v=Cdt-KtXCHCw&pp=ygUfZG9tZXN0aWMgZGUgdmlvbGVuY2UgYWRvIGx5cmljcw%3D%3D"),
  new Cancion("Hai Yorokonde", 12, "J-pop", "Kocchi no Kento", "https://www.youtube.com/watch?v=i62rtMpP3Es"),
  new Cancion("Pierdeme el respeto", 13, "Pop", "Playa Limbo", "https://www.youtube.com/watch?v=VjRmmCRXDhY&pp=ygUacGllcmRlbWUgZWwgcmVzcGV0byBseXJpY3M%3D"),
  new Cancion("All I want", 14, "Rock", "The Offspring", "https://www.youtube.com/watch?v=CzuolmEMIEk&pp=ygUfYWxsIGkgd2FudCB0aGUgb2Zmc3ByaW5nIGx5cmljcw%3D%3D"),
  new Cancion("Lueve sobre la ciudad", 15, "Pop", "The Bunkers", "https://www.youtube.com/watch?v=7a3kCFdsJ60&pp=ygUpbGx1ZXZlIHNvYnJlIGxhIGNpdWRhZCBsb3MgYnVua2VycyBseXJpY3M%3D"),
  new Cancion("Thunder Bringer", 16, "Rock", "Jorge Rivera-Herrans", "https://www.youtube.com/watch?v=3oZO_XE-MK4"),
  new Cancion("OTONABLUE", 17, "J-pop", "ATARASHII GAKKO!", "https://www.youtube.com/watch?v=7zS9gtMz0Uk&pp=ygUQb3RvbmFibHVlIGx5cmljcw%3D%3D"),
  new Cancion("Right Hand Man", 18, "Hip Hop", "Lin-Manuel Miranda", "https://www.youtube.com/watch?v=BG2BsgurwMg&pp=ygUVcmlnaHQgaGFuZCBtYW4gbHlyaWNz"),
  new Cancion("La Bachata", 19, "Bachata", "Manuel Turizo", "https://www.youtube.com/watch?v=nEd7mXPQ688&pp=ygURbGEgYmFjaGF0YSBseXJpY3M%3D"),
  new Cancion("Lamento Boliviano", 20, "Rock", "Los Enanitos Verdes", "https://www.youtube.com/watch?v=_dRsmc8vDN0&pp=ygUYbGFtZW50byBib2xpdmlhbm8gbHlyaWNz"),
]
let cancion1 = new Cancion("Bohemian Rhapsody", 1, "Rock", "Queen", "https://www.youtube.com/watch?v=yk3prd8GER4");
/*cancion1.play();
cancion1.estaReproduciendo();
cancion1.stop();
cancion1.estaReproduciendo();
let borrados = canciones.splice(2,3);
console.log(borrados);
*/
let lista = new ListaDeReproduccion(canciones);
lista.pop(1);
lista.push(new Cancion("Masked Dedede", 21, "Pop", "New Artist", "https://www.youtube.com/watch?v=example"));
lista.get();