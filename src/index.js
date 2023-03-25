const express = require('express');
const cors = require('cors');
require('dotenv').config();

const protocolo = process.env.PROTOCOL || "http";
const ip = require('ip');
const ip_adress = ip.address();
const porta = process.env.PORT || 3030;

const routes = require('./routes');

const bookhub = express();
bookhub.use(cors());
bookhub.use(express.json());
bookhub.use(routes);


bookhub.listen(porta, () => console.log(`Server started in http://localhost:${porta} or ${protocolo}://${ip_adress}:${porta}`));

