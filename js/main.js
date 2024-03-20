let fabricante = prompt("Fabricante?").toLowerCase();
let marca = prompt("Marca?").toLowerCase();
let precio = parseFloat(prompt("Precio?"));


const encontrar ={
    Fabricante: fabricante,
    Marca: marca,
    Precio: precio,

}

 function preguntaVer(placas){
    let pregunta = prompt("¿Desea ver los productos? (Si o No)");
    if (pregunta.toLowerCase() === "si") {
        placas.forEach(placa => {
            console.log(`
                Fabricante: ${placa.fabricante}
                Marca: ${placa.marca}
                Serie: ${placa.serie ? placa.serie : 'N/A'}
                Modelo: ${placa.modelo}
                Memoria: ${placa.memoria}
                Precio: ${placa.precio}
            `);
        });
    } else {
        console.log("Has elegido no ver los productos");
    }
}; 



function filtrarFabrica(fabrica) {
    if (encontrar.Fabricante){
        return fabrica.fabricante.toLowerCase() === encontrar.Fabricante;
    }return true
};

function filtrarMarca(marcas){
    if (encontrar.Marca){
        return marcas.marca.toLowerCase() === encontrar.Marca;
    }return true
}

function filtrarPrecio(placa) {
    if (encontrar.Precio !== undefined) {
        return placa.precio  === encontrar.Precio;
    }
    return true;
}



function filtrarPlacas(){
    const resultadoFiltrado = PlacaDeVideo
    .filter(filtrarFabrica)
    .filter(filtrarMarca)
    .filter(filtrarPrecio);
    if(resultadoFiltrado.length > 0){
        preguntaVer(resultadoFiltrado)
    }else {
        console.error("error")
    }
}

filtrarPlacas()