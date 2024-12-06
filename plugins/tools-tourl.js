const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Endpoint para recibir mensajes de WhatsApp
app.post('/webhook', async (req, res) => {
    const message = req.body.messages[0];

    if (message && message.image) {
        const imageUrl = message.image.url;

        // Llamada a la API de qu.ax (suponiendo que la API existe y es pública)
        try {
            const shortenedUrl = await shortenUrl(imageUrl);
            res.send({
                "status": "success",
                "message": `Imagen convertida en enlace: ${shortenedUrl}`
            });
        } catch (error) {
            res.status(500).send({
                "status": "error",
                "message": "No se pudo acortar la URL."
            });
        }
    } else {
        res.send({
            "status": "error",
            "message": "No se ha recibido una imagen."
        });
    }
});

// Función para acortar la URL utilizando el servicio qu.ax
async function shortenUrl(longUrl) {
    const response = await axios.post('https://qu.ax/api/shorten', {
        url: longUrl
    });

    if (response.data && response.data.shortUrl) {
        return response.data.shortUrl;
    } else {
        throw new Error('No se pudo acortar la URL.');
    }
}

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

handler.command = ['tourl']
