const fs = require('fs');
const fetch = require('node-fetch');

fetch('http://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        let placeholder = JSON.stringify(data, null, 2);
        fs.writeFileSync('result/zuri.json', placeholder)
    })
    .catch(err => console.log("There's an error", err));

