const EventEmitter=require('events');
const http=require('http');

// const myEmitter=new EventEmitter();

class Sales extends EventEmitter{
    constructor(){
        super();
    }
}

const myEmitter=new Sales();

myEmitter.on('newSale', ()=>{
    console.log('Ther was a new sale!');
});

myEmitter.on('newSale', ()=>{
    console.log('Customer name: Jonas');
});

myEmitter.on('newSale', (stock)=>{
    console.log(`There are only ${stock} items left in stock.`);
});

myEmitter.emit('newSale', 9);

/////////////////////////////////////////

const server=http.createServer();

server.on('request', (req, res)=>{
    res.end('Request received!');
});

server.on('request', (req, res)=>{
    console.log('Another request received!');
});

server.on('close', (req, res)=>{
    console.log('Server Closed!');
});

server.listen(8000, '127.0.0.1', ()=>{
    console.log('Waiting for requests...');
});