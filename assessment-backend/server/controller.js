const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
const fortunes = ["A friend is a present you give yourself.", "Take the high road.", "Believe in yourself and others will too.", "In order to take, one must first give.", "Say hello to others. You will have a happier day."]
const goalData = require('./goals.json')
let id = goalData.length

module.exports = {

    getCompliment: (req, res) => {
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },

    addGoal: (req, res) => {
        req.body.id = id
        goalData.push(req.body)
        id++
        res.status(200).send(goalData)
    },

    updateGoal: (req, res) => {
        const {id} = req.params;
        // const {checkbox} = req.body;

        console.log(goalData)

        const goal = goalData.findIndex((goal) => {
            if(+id === goal.id && goal.completed === false) { 
                goal.completed = true
            } else {
                goal.completed = false
            }
        })

        console.log(goalData)

        res.status(200).send(goalData)
    },

    deleteGoal: (req, res) => {
        const findGoalId = goalData.findIndex((e) => e.id === +req.params.id);
        goalData.splice(findGoalId, 1)
         
        res.status(200).send(goalData)
    }
}