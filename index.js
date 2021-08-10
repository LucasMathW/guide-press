import express from 'express'
import hl from 'handy-log'
import connection from './database/database.js'
const PORT = 3333
const app = express()
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.static('public'))


connection
  .authenticate()
    .then(()=>{
      hl.rainbow('connection to the database was successfully')
    })
    .catch((err)=>{
      console.log(err)
    })

app.get('/', (req, res)=>{
  return res.render("index")
})

app.listen(PORT, ()=>{
  hl.rainbow(`app is running on port: ${PORT}`)
})