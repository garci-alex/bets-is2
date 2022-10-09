class Punto{
    constructor(x, y){
        this.x = x
        this.y = y
    }

    suma(PuntoEntrada){
        let nuevoPunto = new Punto (0, 0);
        nuevoPunto.x = PuntoEntrada.x + this.x
        nuevoPunto.y = PuntoEntrada.y + this.y 

        return nuevoPunto
    }
}

let p1 = new Punto(1, 2)
let p2 = new Punto(2, 1)

console.log(p1.suma(p2))