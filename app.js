const express = require('express')
const app = express()

const Starling = require('starling-developer-sdk');

const client = new Starling({
    accessToken: 'accessTokenHere'
});

app.get('/', (req, res) => res.send('Hello World!'))


app.listen(3000, () => console.log('Example app listening on port 3000!'))

client.getAccount('accessTokenHere')
    .then(({data}) => console.log(data))
    .catch(err => console.log(err));