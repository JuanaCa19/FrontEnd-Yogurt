function Persona(nombre,apellido,tel){
    this.nombre = nombre;
    this.apellido = apellido;
    this.tel = tel;
    this.get Nombre(){

    }
}

let persona = new Persona("Juan","Cardenas","3115556013")



/*let persona = {
    nombre:"Juan",
    apellido:"Cardenas",
    tel:"3115556013",
    get Nombre(){
        return this.nombre;
    },
    set Nombre(nombre){
        this.nombre = nombre;
    }
};*/
console.log(persona.nombre);

for(let nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}
let valores = Object.values(persona);
console.log(valores);

persona.Nombre = "Pedro";
console.log(persona.nombre)