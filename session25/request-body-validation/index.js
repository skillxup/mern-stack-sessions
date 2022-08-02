const express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");

const app = express();
app.use(bodyParser.json());

app.post(
    "/user", 
    [
        check("username").isEmail().normalizeEmail(), 
        check("password").isLength({min: 5}).trim().escape()
    ], (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array()
            })
        }
        res.send(req.body);
    }
);

app.listen(3000, () => console.log(`server started at http://localhost:3000`));