const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.render('ui/html/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
