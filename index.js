const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());


const chefData = require('./data.json')

app.get('/', (req, res) => {
    res.json({message: 'hello server running'});
});

app.get('/allData', (req, res) => {
   res.send(chefData)
});

app.get('/allData/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const chefDetails = chefData.find(n => n.id === id);
    res.send(chefDetails)
})

app.listen(5000, () => {
    console.log('server is running');
})