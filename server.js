const express = require('express');
const axios = require('axios');

const app = express();

require('dotenv').config();

app.get("/saludos", function(req, res){
    res.send("Hola desde express");
    logsGenerator()
});

async function logsGenerator() {
    for (let index = 0; index < 300; index++) {
        console.log("Lorem ipsum leo vel orci porta non pulvinar neque. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Consectetur libero id faucibus nisl tincidunt eget. Morbi tristique senectus et netus. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Sit amet nulla facilisi morbi tempus iaculis urna. Suscipit tellus mauris a diam maecenas. In aliquam sem fringilla ut. Tortor at risus viverra adipiscing. Scelerisque eleifend donec pretium vulputate sapien nec. Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Mi tempus imperdiet nulla malesuada pellentesque elit. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Nam at lectus urna duis convallis.\n")
    }
}

const PORT = process.env.PORT || 8000

app.listen(PORT, ()=> {
    console.log(`El servidor funciona correctamente en el puerto: ${PORT}`);
})