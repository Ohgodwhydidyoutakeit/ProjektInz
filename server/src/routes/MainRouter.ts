
import Express from 'express'
import MailRouter from './MailRouter'


const MainRouter = Express.Router()

// it needs to have use not get when chainging
MainRouter.use('/mail', MailRouter)

export default MainRouter