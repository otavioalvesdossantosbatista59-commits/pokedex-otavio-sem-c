const resultado = document.getElementById('resultado')
const campoBusca = document.getElementById('campoBusca')
const btnBuscar = document.getElementById('btnBuscar')
const btnAnterior = document.getElementById('btnAnterior')
const btnAleatorio = document.getElementById('btnAleatorio')
const btnProximo = document.getElementById('btnProximo')
var pokemonAtual = 1;
buscarPokemon(1)

// function buscarPokemon(termo) {
//     const url = "https://pokeapi.co/api/v2/pokemon/" + termo
//     // Forma Compacta, usando arrow function
//     fetch(url)
//         .then(resposta => resposta.json())
//         .then(resposta => resultado.innerHTML = `
//             <img src="${resposta.sprites.front_default}"/>
//             <p>#${resposta.id}</p>
//             <h2>${resposta.name}</h2>
//         `)
// }

async function buscarPokemon(termo) {
    const url = "https://pokeapi.co/api/v2/pokemon/" + termo
    const resposta = await fetch(url)
    if (resposta.ok) {  
        const pokemon = await resposta.json() 
    pokemonAtual = pokemon.id
    resultado.innerHTML = `
        <img src="${pokemon.sprites.front_default}"/>
        <p>#${pokemon.id}</p>
        <h2>${pokemon.name}</h2>
    `
} else {
    resultado.innerHTML = '<h2>Pokemon nao encontrado</h2>'
}
}

btnBuscar.addEventListener('click', () => {
    console.log("Fui clicado buscando pokemon " + campoBusca.value)
    pokemonAtual = campoBusca.value
    buscarPokemon(pokemonAtual)
});

campoBusca.addEventListener('keyup', evento => {
    if (evento.key == "Enter") {
        btnBuscar.click()
    }
})


btnProximo.addEventListener('click' , () => {
    if (pokemonAtual , 1025) {
    console.log('Buscando Proximo Pokemon')
    pokemonAtual++
    buscarPokemon(pokemonAtual)
   } 
})



btnAnterior.addEventListener('click' , () => {
    console.log('Buscando Pokemon Anterior')
   if  (pokemonAtual > 1 ) {
    console.log('Buscando Proximo Pokemon')
    buscarPokemon(pokemonAtual)
    }
})


btnAleatorio.addEventListener('click' , () => {
    console.log('Pokemon aleatorio')
    pokemonAtual = Math.floor(Math.random() * 1000) + 1
    buscarPokemon(pokemonAtual)
})
