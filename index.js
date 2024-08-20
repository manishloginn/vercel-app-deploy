const express = require('express')
const app = express()
const port = 5000


app.get("/" , (req, res) => {
    res.send("homepage")
    console.log('starrt')
})

app.listen(port, () => {
    console.log('runnning')
})

