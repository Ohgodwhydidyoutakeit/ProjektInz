import Express from 'express'
import 'dotenv/config'
import cors from 'cors'


const app = Express()
app.use(cors())

app.get('/', (req: Express.Request, res: Express.Response) => {
    res.send({
        message: "Works Great"
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listens on http://localhost:${process.env.PORT || 3000}`)
})


