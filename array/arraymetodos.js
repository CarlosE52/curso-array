const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o ultimo elemento!
console.log(pilotos)

pilotos.push('Verstappen') // coloca o elemento no final!
console.log(pilotos)

pilotos.shift() // remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton') // coloca o elemento em primeiro!
console.log(pilotos)

//splice pode adicionar e remover 

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3,1) // remove elemento 3 'Massa'
console.log(pilotos)

const algunspilotos1 = pilotos.slice(2) // novo array
console.log(algunspilotos1)

const algunspilotos2 = pilotos.slice(1, 4)
console.log(algunspilotos2)