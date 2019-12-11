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

router.get('/3', (req,res) =>{
    //Filtering the data based on selected year and category
    let year = req.query.year;
    let category = req.query.category;
    let count = 0;
    let result_c = [];
    data.prizes.forEach(element => {
        if(year && category){
            if(element.year === year && element.category === category){
                result_c.push(element);
                count = element.laureates.length;
            }
        }else{
            if(element.year === year || element.category === category){
                result_c.push(element);
                count = element.laureates.length;
            }
        }
        
    });

    console.log(`In year ${year}, Number of people won Noble prize in ${category} is, ${count}`);
    res.send(result_c);
})

module.exports = router;