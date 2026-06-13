class Persona{
    static contadorPersonas = 0;

    edad; 

    constructor(nombre,apellido,telefono,email){
        this._nombre = nombre;
        this._apellido = apellido;
        this._telefono = telefono;
        this._email = email;
        Persona.contadorPersonas++;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set nombre(apellido){
        this._apellido = apellido;
    }
    toString(){
        return `${this._nombre} ${this._apellido} ${this._telefono}`;
    }
}


/*function Persona(nombre,apellido,tel){
    this.nombre = nombre;
    this.apellido = apellido;
    this.tel = tel;
    this.get Nombre(){

    }
}*/

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
let persona = new Persona("Juan","Cardenas","3115556013","cardenasrivera1927@gmail.com")
let persona1 = new Persona("Juan","Cardenas","3115556013","cardenasrivera1927@gmail.com")
let persona2 = new Persona("Juan","Cardenas","3115556013","cardenasrivera1927@gmail.com")
let persona3 = new Persona("Juan","Cardenas","3115556013","cardenasrivera1927@gmail.com")



if(1>2){

}else if(1<2){

}else{

}
console.log(persona.nombre);

for(let nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}
let valores = Object.values(persona);
console.log(valores);

persona.Nombre = "Pedro";
console.log(persona.nombre)

console.log(Persona.contadorPersonas);
persona.edad = 4;
console.log(persona.edad);
 let num = 2;
let fun = ()=>{
    return "dd";
}
console.log(fun())