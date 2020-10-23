const express = require('express');
const mockData = require('./mockdata.js');

//const noodleRouter = express.Router();
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('hello world');
})

app.get('/:id', (req, res) => {
const index = mockData.find(el =>  el.id === Number(req.params.id));
  res.send(mockData[index])
/*   if (index) {
    console.log('test1')
    console.log(mockData[index])
    res.status(200).send(mockData[index]);
  } else {
    console.log('404');
    res.status(404).send('This soup was too tasty and is not in stock anymore.')
  } */
})


app.listen(3000);


