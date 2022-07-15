const dns = require("dns");

// dns.lookup("yahoo.com", (err, address, family) => {
//     if(err) console.log(err);
//     console.log('address: %s, family: IPV%s', address, family)
// });

dns.resolve4("gmail.com", (err, addresses) => {
    if(err) throw err;
    console.log(`addresses: ${JSON.stringify(addresses)}`);

    addresses.forEach((a) => {
        dns.reverse(a, (err, hostname) => {
            if(err) throw err;
            console.log(`reverse for ${a}: ${JSON.stringify(hostname)}`)
        })
    })
});

// console.log("getServers: ");
// console.log(dns.getServers());

// dns.lookupService("74.6.143.26", 22, (err, hostname, service) => {
//     if(err) throw err;
//     console.log(hostname, service);
// });

// list of some of the builtin methods of dns
// dns.resolveSoa()

// rTypes - 'A', 'AAA', 'CNAME', 'MX', 'NS', etc.,
// error codes: NODATA, SERVFAIL, REFUSED, TIMEOUT, BADQUERY, 