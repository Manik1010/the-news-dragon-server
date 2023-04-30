const express = require('express');
const app = express();
// const port = 5000
const port = process.env.PORT || 5000

const catagories = require('./Data/catagories.json')
const news = require('./Data/news.json')
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/catagories', (req, res) => {
    res.send(catagories)
})
app.get('/news', (req, res) => {
    res.send(news)
})
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const selectedNews = news.find( n => n._id === id);
    res.send(selectedNews);
})
app.get('/catagories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(id);
    if( id == 0){
        res.send(news);
    }

    const catagorieNews = news.filter( n => parseInt(n.category_id) === id);
    res.send(catagorieNews);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})