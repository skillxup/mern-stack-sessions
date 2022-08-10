// users/user.service.js

// users sample data for checking / testing
// store in db for production applications
const users = [
    {id: 1, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'User'}, 
    {id: 2, username: 'demo', password: 'demo', firstName: 'Demo', lastName: 'User'}, 
    {id: 3, username: 'test', password: 'test', firstName: 'Test', lastName: 'User'}
];

module.exports = {
    authenticate, 
    getAll
};

async function authenticate({username, password}) {
    const user = users.find(u => u.username === username && u.password === password);
    if(user) {
        const {password, ...userWithoutPassword} = user;
        return userWithoutPassword;
    }
}

async function getAll() {
    return users.map((user, index) => {
        const {password, ...userWithoutPassword} = user;
        return userWithoutPassword;
    });
}
