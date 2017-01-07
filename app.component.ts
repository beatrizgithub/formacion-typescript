export class AppComponent {
    public titulo:string = "Restaurantes";
    public programas: Array<string>;
    public elemento:string;

    constructor() {
        this.programas=["Uno"];
    }
    addElement(){
        this.programas.push(this.elemento);
    }
}
