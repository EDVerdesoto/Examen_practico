const express = require('express');
const app = express();
const port = process.env.PORT;

// endpoint que responde un mensaje 
app.get('/', (_req, res) => {
    res.send('Integración continua funcional!');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en puerto ${port}`);
});

