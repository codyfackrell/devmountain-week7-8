const houseData = require('./db.json')
let id = houseData.length - 1

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houseData)
    },

    deleteHouse: (req, res) => {
        const findHouseId = houseData.findIndex((e) => e.id === +req.params.id);
        houseData.splice(findHouseId, 1)
         
        res.status(200).send(houseData)
    },

    createHouse: (req, res) => {
        req.body.id = id; 
        houseData.push(req.body)
        id++
        res.status(200).send(houseData)
    },

    updateHouse: (req, res) => {
        const {id} = req.params;
        const {type} = req.body;

        const house = houseData.findIndex((house) => {
            if(house.id === +id && type === 'minus') { 
                house.price -= 10000
            }
            if(house.id === +id && type === 'plus') {
                house.price += 10000
            }
            return house
        })

        res.status(200).send(houseData)
    }
}