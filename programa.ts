class Programa {
    public nombre:string;
    public version:number;

    setNombre(nombre:string) {
        this.nombre = nombre;
    }
    setVersion(version:number) {
        this.version = version;
    }
    getNombre():string {
        return this.nombre;
    }
}

var programas = [];
function guardar() {
    
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();

    var programa = new Programa();
    programa.setNombre(nombre);

    programas.push(programa);

    var list ="";
    for (var i=0; i<programas.length;i++){
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }
    var listado=<HTMLElement>document.getElementById("listado");
    listado.innerHTML=list;

    (<HTMLInputElement>document.getElementById("nombre")).value = "";
}
