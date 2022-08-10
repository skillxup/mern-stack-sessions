const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

const app = express();

// set up global configuration access
dotenv.config();

// generating JWT
app.post(
    "/user/generateToken", (req, res) => {
        // validate user
        // generate JWT Token
        let jwtSecretKey = process.env.JWT_SECRET_KEY;
        let data = {
            time: new Date(), 
            userId: Math.floor(Math.random() * 365)
        }
        const token = jwt.sign(data, jwtSecretKey);
        res.send(token);
    }
);

// verifying JWT
app.get(
    "/user/validateToken/", (req, res) => {
        let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
        let jwtSecretKey = process.env.JWT_SECRET_KEY;

        try {
            const token = req.header(tokenHeaderKey);
            const verified = jwt.verify(token, jwtSecretKey);
            
            if(verified) {
                return res.send("successfully verified");
            } else {
                return res.send("not verified");
            }
        } catch(error) {
            return res.send(error);
        }
    }
);

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running at PORT: ${PORT}`));