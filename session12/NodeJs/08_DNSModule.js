const dns = require("dns");

dns.lookup("yahoo.com", (err, address, family) => {
    console.log('address: %j, family: IPV %s', (address, family))
});