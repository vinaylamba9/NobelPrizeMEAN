const fs = require('fs');
const express = require('express');
const router = express.Router();

let data
fs.readFile('./nobel.json',(err, jsonString) =>{
    if(err){
        console.log("File reading Failed: ",err);
        return;
    }
    data = JSON.parse(jsonString);
});
   
router.get('/4',(req, res) =>{

    //Showing a list of all winners in Alphabetical order, with year and category in which they have
    //won the prize.
    let result_d = [];
    data.prizes.forEach(element => {
        element.laureates.forEach(laureate =>{
            let obj = {
                name: "",
                year: "",
                category: "",
                motivation: "",
                share: ""
            };
            obj.name = laureate.firstname + " " + laureate.surname;
            obj.year = element.year;
            obj.category = element.category;
            obj.motivation = laureate.motivation;
            obj.share = laureate.share;
            result_d.push(obj);
        })
    });
    //sort the result_d array according to alphabetical order
    result_d.sort(function(a,b){
        let nameA = a.name;
        let nameB = b.name;
        if(nameA > nameB) {return 1;}
        if(nameA < nameB) {return -1;}
        return 0;
    });
    res.send(result_d);
})

module.exports = router;