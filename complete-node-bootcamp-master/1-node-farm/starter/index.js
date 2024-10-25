const fs = require('fs');
const http = require('http');
const url = require('url');
const slugify=require('slugify');
const replaceTemplate=require('./modules/replaceTemplate.js');

/////////////////////////////////
// FILES

// Synchronus, blocking code
// const textIn=fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);
// const textOut=`This is what we know about avocado: ${textIn}.\nCreated on ${Date.now()}.`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!');

// Asynchronus, non-blocking code

// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     if (err) console.log(`Error!`);
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', (err) => {
//                 console.log('Your file has been written!');
//             });
//         });
//     });
// });

// console.log('Reading file...');

/////////////////////////////////
// SERVER

//synchronus so that file is only read once
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj=JSON.parse(data);

const slug=dataObj.map((el)=>el.productName);
console.log(slug);

const server = http.createServer((req, res) => {
    const {query, pathname}=url.parse(req.url, true);
    //overview page
    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, {'content-type':'text/html'});
        const cardsHtml=dataObj.map(el=>replaceTemplate(tempCard, el)).join(' ');
        const output=tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
        res.end(output);
    }
    //product page
    else if (pathname === '/product') {
        res.writeHead(200, {'content-type':'text/html'});
        const product=dataObj[query.id];
        const output=replaceTemplate(tempProduct, product); 
        res.end(output);
    }
    //API
    else if (pathname === '/api') {
        const productData = JSON.parse(data); //converting to string
        // res.writeHead(200, {'Content-type':'application/json'}); //telling browser about sending json file
        res.writeHead(200, { 'Content-type': 'text/html' }); //telling browser about sending html file
        res.end(tempOverview);
    }
    else {
        res.writeHead(404, {
            'content-type': 'text/html',
            'my-own-header': 'Hello World!',
        });
        res.end('<h1>Page not found!</h1>');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to the requests on port 8000');
});