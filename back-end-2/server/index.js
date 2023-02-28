require("dotenv").config();
const express = require('express');
const cors = require('cors');
const {SERVER_PORT} = process.env
const userController = require('./ctrl.js')
const {getHouses, deleteHouse, createHouse, updateHouse} = userController

const app = express();

app.use(express.json());
app.use(cors())

app.get('/api/houses', getHouses)
app.delete('/api/houses/:id', deleteHouse)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)

app.listen(SERVER_PORT, () => console.log(`Server is listening on port ${SERVER_PORT}`))
