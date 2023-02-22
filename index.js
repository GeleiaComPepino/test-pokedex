const express = require('express');
const app = express();
const { Server } = require("socket.io");
const http = require('http');
const server = http.createServer(app);
const io = new Server(server);
const axios = require('axios');
const port = process.env.PORT || 8080;
async function getAllPokemons(){
    const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=99999&offset=0')
    return data
}

io.on('connection', async (socket) => {
    console.log(`a ${socket.id} connected`);
    socket.emit('getAllPokemons', await getAllPokemons());
});
app.get('/', (req,res) => {
    res.sendFile(`${__dirname}/ClientContent/index.html`);
})
app.get('/fonts/8-BIT%20WONDER.ttf', (req,res) => {
    res.sendFile(`${__dirname}/ClientContent/fonts/8-BIT WONDER.ttf`)
})
app.get('/index.css', (req,res) => {
    res.sendFile(`${__dirname}/ClientContent/index.css`)
})
app.get('/index.js', (req,res) => {
    res.sendFile(`${__dirname}/ClientContent/index.js`)
})

app.use('404.css',(req,res) =>{
    res.status(404).sendFile(`${__dirname}/ClientContent/404/404.css`)
});
app.use(function(req,res){
    res.status(404).sendFile(`${__dirname}/ClientContent/404/404.html`)
});
server.listen(port, () =>{
    console.log('Entre em: http://localhost:8080');
});