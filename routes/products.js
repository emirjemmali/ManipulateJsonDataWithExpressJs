var express = require('express');
var router = express.Router();
var listproducts=require('../Data/product')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({
        p:listproducts
    })
});
router.get('/instock/:st', function(req, res, next) {
    listST=[];
    console.log(listproducts.products)
    for(var p in listproducts.products){
        if (listproducts.products[p].stock > req.params.st){
            listST.push(listproducts.products[p]);
            }
     }
     res.json(listST);

});
router.get('/:id', function(req, res, next) {
    res.json({
        p:listproducts.products[req.params.id]
    })
});
router.get('/:id/:qte', function(req, res, next) {
    p=listproducts.products[req.params.id]
    console.log(p);
    res.json({
        id:req.params.id,
        qt:req.params.qte,
        unit_price:p.price,
        total:req.params.qte*p.price
        })
});

module.exports = router;
