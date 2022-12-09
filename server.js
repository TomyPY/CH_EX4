import express from 'express'
import serverRoutes from './routers/index.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({"extended":true}))
app.use('/api', serverRoutes)
app.use('/static', express.static('public'))


app.listen(process.env.PORT || 8080)