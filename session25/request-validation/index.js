const express = require("express");
const { dotenv } = require("dotenv");

const {
    Validator, 
    ValidationError,
} = require("express-json-validator-middleware");

const { validate } = new Validator();

function ValidationErrorMiddleware(error, request, response, next) {
    if(response.headersSent) {
        return next(error);
    }

    const isValidationError = error instanceof ValidationError;
    if(!isValidationError) {
        return next(error);
    }

    response.status(400).json({
        errors: error.validationErrors, 
    });

    next();
}

const app = express();
app.use(express.json());

const userSchema = {
    type: "object", 
    required: ["first_name", "last_name"], 
    properties: {
        first_name: {
            type: "string", 
            minLength: 4, 
        }, 
        last_name: {
            type: "string", 
            minLength: 4, 
        }, 
        age: {
            type: "integer", 
            minimum: 18, 
        },
    },
};

app.post(
    "/user", 
    validate({
        body: userSchema
    }), 
    function createUserRouteHandler(request, response, next) {
        response.json(request.body);
        next();
    }
);

app.use(ValidationErrorMiddleware);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`server running at ${PORT}`));