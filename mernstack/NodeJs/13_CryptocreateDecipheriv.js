// Node.js program to demonstrate the	
// crypto.createDecipheriv() method

// Includes crypto module
const crypto = require('crypto');

// Defining algorithm
const algorithm = 'aes-192-cbc';

// Defining password
const password = 'bncaskdbvasbvlaslslasfhj';

// Defining key
const key = crypto.scryptSync(password, 'GfG', 24);

// Defininf iv
const iv = Buffer.alloc(16, 0);

// Creating decipher
const decipher =
	crypto.createDecipheriv(algorithm, key, iv);

// Declaring decrypted
let decrypted = '';

// Reading data
decipher.on('readable', () => {
let chunk;
while (null !== (chunk = decipher.read())) {
	decrypted += chunk.toString('utf8');
}
});

// Handling end event
decipher.on('end', () => {
console.log(decrypted);
});

// Encrypted data which is to be decrypted
// const encrypted =
// 'MfHwhG/WPv+TIbG/qM78qA==';
const encrypted =
'5bGrw/WWcVFWo/tsDkIqWm==';

decipher.write(encrypted, 'base64');
decipher.end();

console.log("done");
