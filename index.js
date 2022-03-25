
const pokemonDiv = document.querySelector('.pokemon-card');
const submit = document.querySelector('button');

//object storing API data
let data = {
    url: 'https://pokeapi.co/api/v2/',
    type:'pokemon',
    name: 'pikachu',
};

//default data = pikachu
let apiURL = `${data.url}${data.type}/${data.name}`;

//fetch data
fetch(apiURL)
    .then((data)=>data.json())
    .then((data)=>displayInfo(data))
    .catch(()=>errorMessage());


const displayInfo = (data) => {
    const html =`
        <div class="pokemon-name"><b>${data.name}</b></div>
        <img class="pokemon-img"src=${data.sprites.front_default}>
        <hr>
        <div class="details"> 
            <h2>Details</h2>
            <p>Height: ${data.height} decimetres </p>
            <p>Weight: ${data.weight} hectograms </p> 
        </div>
    `;
    pokemonDiv.innerHTML = html;
}


const errorMessage = () => {
    pokemonDiv.innerHTML = `<h1 class="error-message">The Pokémon "${data.name}" could not be found. Please try again!</h1>`;
}

const getPokemon = () => {
    const pokeName = document.querySelector('input').value.toLowerCase();
    data.name = pokeName;
    apiURL = `${data.url}${data.type}/${data.name}`;

    fetch(apiURL)
        .then((data)=>data.json())
        .then((data)=>displayInfo(data))
        .catch(()=>errorMessage());
}

submit.addEventListener("click", getPokemon);








