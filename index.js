const express = require('express');
const morgan = require('morgan');
const app = express();

app.use((morgan('dev')));

// app.use('/', (req,res,next) =>{
//     console.log('middleware pertama')
//     next()
//     console.log('middleware pertama setelah next');
// })
// app.use('/halaman', (req,res,next) =>{
//     console.log('middleware kedua')
//     next();
// })

app.use('/', (req,res,next) =>{
    req.timeRequest = Date.now();
    console.log(req.method, req.url)
    next();
})

app.use((req,res,next) => {
    const { password } = req.query; 
    if (password === 'ninjasaga') {
        next();
    }
    res.send('cant access')
})

app.get('/', (req,res) => {
    res.send('Hello world')
})

app.get('/halaman', (req,res) => {
    console.log(req.timeRequest);
    res.send('Hello ini Halaman')
})

app.use((req,res) =>{
    res.status(404).send('page not found')
})

app.listen(3000, ()=>{
    console.log('running at port 3000')
})