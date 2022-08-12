const mod = (a, b) => {
    return new Promise((resolve, reject) => {
        if(b == 0) {
            reject('module zero is not allowed');
        } else {
            resolve(a % b);
        }
    })
}

// console.log(mod(2, 0));

async function _5mod0() {
    try {
        const res = await mod(5, 2);
        console.log(`the result of division is ${res}`);
    } catch(err) {
        console.log(err);
    }
}

_5mod0();