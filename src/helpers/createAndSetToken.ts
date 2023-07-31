import { TokenInterface } from "@/tsInterfaces";
import jwt from "jsonwebtoken";



export function createAndSetToken(tokenPayload: TokenInterface) {
    // create token
    const tokenData = { id: tokenPayload._id, email: tokenPayload.email, username: tokenPayload.username }
    const token = jwt.sign(tokenData, process.env.JWT_TOKEN_SECRET!, { expiresIn: '1d' })

    //set  token
    tokenPayload.response.cookies.set('token', token, { httpOnly: true })


}