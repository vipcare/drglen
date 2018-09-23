const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.engine('html', require('ejs').renderFile)
app.set('/views', express.static(__dirname + '/views'))
app.set('view engine', 'html')
// app.use('/assets', express.static(__dirname + '/assets'))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(request, response) {
  response.render('index')
})

// app.get('/i2', function(request, response) {
//   response.render('index2')
// })
//
// app.get('/i3', function(request, response) {
//   response.render('index3')
// })
//
// app.get('/i4', function(request, response) {
//   response.render('index4')
// })

const server = app.listen(process.env.PORT || 5000, function() {
  console.info('Server running at http://0.0.0.0:' + server.address().port)
})
