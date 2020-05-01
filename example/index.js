const fs = require('fs');

const {parse, parseTree} = require('../index');

fs.readdirSync(`${__dirname}/jsons`).forEach(file => {
    const json = fs.readFileSync(`${__dirname}/jsons/${file}`, 'utf8');
    console.log(`${file}\n\n${JSON.stringify(parse(json), 0, 4)}\n\n---\n`);
});
