// import events module
var events = require("events");

// create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// create an eventHandler
var connectHandler = function connected() {
    console.log('connection succesful');
    
    // fire the dataReceived event
    eventEmitter.emit('dataReceived');
}

// bind the dataReceived event with the anonymous function
eventEmitter.on('connection', connectHandler);

eventEmitter.on('dataReceived', function() {
    console.log('data received successfully');
})

// fire the connection event
eventEmitter.emit('connection');
console.log('eventEmitter program ends');