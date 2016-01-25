var express = require('express')
    , bodyParser = require('body-parser')
    , chalk = require('chalk')
    , app = express()
    , directoriesRouter = require('./routes/directories')
    , noticesRouter = require('./routes/notices')

app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: 'public'})
})

app.use('/directories', directoriesRouter)
app.use('/notices', noticesRouter)

var mockServer = app.listen(3001, function () {
    var port = mockServer.address().port
    console.log('=======================================')
    console.log('MOCK SERVER IS RUNNING AT %s PORT', chalk.green(port))
    console.log('=======================================')
})

module.exports = mockServer;
