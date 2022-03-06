const nombre = "Juan Perez";
let edad = 19;

let condicion = edad >= 18;

let condicion2 = nombre === "Jesus Garcia";

console.log("condicion =>", condicion)
console.log("condicion =>", condicion2)

if(condicion && condicion2){
    console.log(`Entra como verdadero`)
} else {
    console.log(`Entra como falso`)
}