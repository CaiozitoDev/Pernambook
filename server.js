const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))



app.post('/registerdata', function(req, res) {
    console.log(__dirname)
    res.send('bom dia poze')
})



app.listen(3000, () => {
    console.log('Server running on port 3000')
})