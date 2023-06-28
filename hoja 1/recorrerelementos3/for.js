let arreglo=  [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ]
let contador=0

arreglo.forEach(i => {

    i.forEach(j => {

    console.log(j);
    })
} )

arreglo.forEach(i => {

    i.forEach(j => {
        contador+= j
    })
} )

console.log("suma total :",contador);