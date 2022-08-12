// async await pattern

function makeConnection(request) {
    return new Promise((resolve, reject) => {
        if(request == 'Google') {
            resolve('Connection Successfull');
        } else {
            reject('Connection Failed');
        }
    })
}

async function doStuff(request) {
    try {
        const response = await makeConnection(request);
        console.log(response);
    } catch(err) {
        console.log(err);
    }
}

doStuff('AWS');
doStuff('Google');
doStuff('Yahoo');