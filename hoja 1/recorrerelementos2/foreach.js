let arreglo= [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"] , [true, 1000, "@", "¡"] ], [ [44, 55,
66, 77], [1, 2, 3, 4] ] ];
for (let i = 0; i < arreglo.length; i++) {
    for (let j = 0; j < arreglo[i].length; j++) {
        for (let n = 0; n < arreglo[i][j].length; n++) {
                console.log(arreglo[i][j][n]);                            
        }
    }
}

arreglo.forEach(i => {
    i.forEach(j => {
        j.forEach(n =>{
            console.log( n);
        })     
    })
})