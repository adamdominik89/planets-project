const { parse } = require('csv-parse');
const fs = require('fs');

const result = [];

fs.createReadStream('./kepler_data.csv')
    .pipe(parse({
        comment: '#',
        columns: true,
    }))
    .on('data', (data) => {
        result.push(data);
    })
    .on('error', (error) => {
        console.error(error);
    })
    .on('end', (res) => {
        console.log(result);
        console.log('done');
    });

