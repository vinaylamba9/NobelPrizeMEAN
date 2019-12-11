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
})

router.get('/1', (req, res) =>{

    //Searching for a Nobel prize winner...
    let name = req.query.name;
    name = "" + name.toLowerCase();
    let result_a = [];
    data.prizes.forEach(element => {
        element.laureates.forEach(laureate =>{
            let fname = laureate.firstname.toLowerCase().split(' ');
            let lname = laureate.surname.toLowerCase().split(' ');
            let fullname = fname.concat(lname);
            fullname.forEach(i =>{
                if(i === name){
                    result_a.push(laureate);
                }
            })
        })
    });
    res.send(result_a);
})

module.exports = router;