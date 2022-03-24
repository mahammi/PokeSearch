//object storing API data
let randID = Math.floor((Math.random()*500) + 1);
const pokemonDiv = document.querySelector('.pokemon-card');

const data = {
    url: 'https://pokeapi.co/api/v2/',
    type:'pokemon',
    id: randID,
};

const apiURL = `${data.url}${data.type}/${data.id}`;

fetch(apiURL)
    .then((data)=>data.json())
    .then((data)=>displayInfo(data)
    ).catch(()=>errorMessage());

const displayInfo = (data) => {
  
    console.log(data);
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
    console.log("No data");
    pokemonDiv.innerHTML = `<h1 class="error-message">The Pokemon could not be found. Please try again!</h1>`;
}