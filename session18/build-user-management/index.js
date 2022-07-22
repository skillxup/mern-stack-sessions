const express = require('express');
const bodyParser = require('body-parser');
const { emit } = require('nodemon');
const app = express();

const users = [
    { userName: 'Awani', userEmail: 'awani@gmail.com', userAge: '23', userUniqueId: '1' }, 
    { userName: 'John', userEmail: 'john@gmail.com', userAge: '18', userUniqueId: '2' }, 
    { userName: 'Paul', userEmail: 'paul@gmail.com', userAge: '14', userUniqueId: '3' }
];

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// templateEngine
app.set('view engine', 'ejs');

// define routes
app.get('/', (req, res) => {
    res.render('home', {
        data: users
    });
});

app.post('/', (req, res) => {
    const inputUserUniqueId = req.body.userUniqueId;
    const inputUserName = req.body.userName;
    const inputUserEmail = req.body.userEmail;
    const inputUserAge = req.body.userAge;

    users.push({
        userUniqueId: inputUserUniqueId, 
        userName: inputUserName, 
        userEmail: inputUserEmail, 
        userAge: inputUserAge
    });

    res.render('home', {
        data: users
    });
});

app.post('/delete', (req, res) => {
    var requestedUserInputUniqueId = req.body.userUniqueId;
    var j = 0;
    users.forEach(user => {
        j = j + 1;
        if(user.userUniqueId === requestedUserInputUniqueId) {
            users.splice((j - 1), 1)
        }
    });

    res.render('home', {
        data: users
    });
});


app.post('/update', (req, res) => {
    const inputUserUniqueId = req.body.userUniqueId;
    const inputUserName = req.body.userName;
    const inputUserEmail = req.body.userEmail;
    const inputUserAge = req.body.userAge;
    
    var j = 0;

    users.forEach(user => {
        j = j + 1;
        if(user.userUniqueId == inputUserUniqueId) {
            user.userUniqueId = inputUserUniqueId;
            user.userName = inputUserName;
            user.userEmail = inputUserEmail;
            user.userAge = inputUserAge;
        }
    });

    res.render('home', {
        data: users
    });

});

app.listen(3000, (req, res) => {
    console.log(`app is unning onn port: 3000`);
});