let express = require('express')
let cors = require('cors')
let allRoutes =  require('express-list-endpoints')

let { urlencoded, json } = require('body-parser')

let router = require('../backend/router')

const app = express()
const port = process.env.PORT || 3000
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(urlencoded({ extended: false }))

// parse application/json
app.use(json())
app.get('/', (req, res) => {
    res.send('Hello World2!')
})
app.use('/api', router)
app.listen(port, () =>  {
    console.log(`Example app listening on port ${port}!`)
    console.log(allRoutes(app))
})




