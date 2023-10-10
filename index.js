const express = require('express');
const morgan = require('morgan');
const app = express();

app.use((morgan('dev')));

app.get('/', (req,res) => {
    res.send('Hello world')
})

app.get('/halaman', (req,res) => {
    res.send('Hello ini Halaman')
})

app.listen(3000, ()=>{
    console.log('running at port 3000')
})