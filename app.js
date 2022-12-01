const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('ui/index')
})

app.get('/defaultsite', (req, res) => {
  res.render('ui/index')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
