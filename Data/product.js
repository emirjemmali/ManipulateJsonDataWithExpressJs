/**
 * Created by Emir on 04/02/2019.
 */
fs=require('fs');
module.exports.products=JSON.parse(fs.readFileSync('data/products.json'))
