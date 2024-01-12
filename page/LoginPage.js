const {test, expect} =require('@playwright/test');

const path=require ('path');

require('dotenv').config({
    path: path.join(__dirname, '../.env')

})


