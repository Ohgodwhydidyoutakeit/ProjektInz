import { Request, Response } from "express";
import { sendMail } from "../utils/sendMail";

class MailController {
    static sendTestMail = async (req: Request, res: Response) => {
        try {
            sendMail()
        } catch {
            res.status(400).send("Cannot send email. Ensure you have provided proper payload.")
            return;
        }
        res.send({
            message: "Controller works"
        })
    }
}


export default MailController