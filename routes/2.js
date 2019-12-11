const fs = require('fs');
const express = require('express');
const router = express.Router();

let data;

fs.readFile('./nobel.json',(err, jsonString) =>{
    if(err){
        console.log("File reading Failed: ",err);
        return;
    }
    data = JSON.parse(jsonString);
});

router.get('/2', (req,res) =>{

    //Find number of people won nobel and show their data in a year, input by user
    let year = req.query.year;
    let result_b = [];
    let count = 0;
    data.prizes.forEach(element =>{
        if(element.year === year){
            result_b.push(element);
            count = count + element.laureates.length;
        }
    });
    console.log(`Number of people won Nobel prize in year ${year} is ${count}.`);
    res.send(result_b);
})

module.exports = router;