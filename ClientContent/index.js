const socket = io();
socket.on('getAllPokemons', async (res) => {
    for (var i = 0; i < 1153; i++){
        var request = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${res['results'][i]['url'].split('/')[6]}.png`)
        if (await request.status == 404){
            const pokemon = document.createElement("div");
            pokemon.innerHTML = `
        <div class="pokemon">
            <div class="pokemonLogo">
                <img class="imagePokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${res['results'][i]['url'].split('/')[6]}.png">
            </div>
            <p class="pokemonName">${res['results'][i]['name']}<p>
           
        </div>`
            document.getElementsByClassName('pokemonsContainer')[0].appendChild(pokemon);
        }
        else if (await request.status == 200){
            const pokemon = document.createElement("div");
            pokemon.innerHTML = `
        <div class="pokemon">
            <div class="pokemonLogo">
                <img class="imagePokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${res['results'][i]['url'].split('/')[6]}.png">
            </div>
            <p class="pokemonName">${res['results'][i]['name']}<p>
           
        </div>`
            document.getElementsByClassName('pokemonsContainer')[0].appendChild(pokemon);
        }
       console.log(request.status)
    }
})