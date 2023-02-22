const axios = require('axios');
async function getAllPokemons(){
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=99999&offset=0')
    return data
}
(async () => {
    const response = await getAllPokemons()
    console.log(response['results'])
})()