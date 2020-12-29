const csvToJson = require("convert-csv-to-json");

// Store our quotes as JSON in array
let quotes = csvToJson.fieldDelimiter(',').getJsonFromCsv("quotes.csv");

// Generate random index to find our quote
const randInt = Math.floor(Math.random() * quotes.length);

// Print out the quote in a readable format
console.log(`${quotes[randInt].quote} \n - ${quotes[randInt].author}`);
