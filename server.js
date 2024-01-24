const express = require('express');
const axios = require('axios');

const app = express();

require('dotenv').config();

app.get("/saludos", function(req, res){
    res.send("Hola desde express");
    console.log("aa")
    logsGenerator()
});

async function logsGenerator() {
    for (let index = 0; index < 300; index++) {
        const response = await axios.get(`https://api.api-ninjas.com/v1/loremipsum?paragraphs=1`, {headers: {
            'X-Api-Key': 'EeZsr9Wb0zBL5NhDtUNi7g==aEV6gjAN5J5jmcZb',
        }})
        console.log(response.data)
    }
}

const PORT = process.env.PORT || 8000

app.listen(PORT, ()=> {
    console.log(`El servidor funciona correctamente en el puerto: ${PORT}`);
})