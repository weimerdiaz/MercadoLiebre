const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`iniciando un servidor con Express en: http://localhost:${port}`);
});
