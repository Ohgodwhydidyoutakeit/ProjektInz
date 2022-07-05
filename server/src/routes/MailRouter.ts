import Express from 'express'
import MailController from '../contollers/MailController';

const MailRouter = Express.Router();


MailRouter.get('/test', MailController.sendTestMail)


export default MailRouter