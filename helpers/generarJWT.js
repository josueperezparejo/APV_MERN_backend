// Github @josueperezparejo

import jwt from "jsonwebtoken";

// Genera un token 
const generarJWT = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "30d"})
}

export default generarJWT;

// Github @josueperezparejo