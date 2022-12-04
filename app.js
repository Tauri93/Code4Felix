const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

app.get(['/defaultsite' , '/'], (req, res) => {
  res.render('home')
})

app.get(['/defaultsite/network' , '/network'], (req, res) => {
  res.render('networks')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
