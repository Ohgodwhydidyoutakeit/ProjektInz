import Express from 'express'
import 'dotenv/config'
import cors from 'cors'


import MainRouter from './routes/MainRouter'
// start our app 
const app = Express()
// anable cors s
app.use(cors())
// our routing 
app.use(MainRouter)

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listens on http://localhost:${process.env.PORT || 3000}`)
})


