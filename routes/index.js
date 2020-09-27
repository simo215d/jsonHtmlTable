var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let jsonText = '{ "carLeasRent": [{ "cars": [{ "id": "tesla", "color": "white", "pricePrWeek": 100 }, { "id": "bmw", "color": "blue", "pricePrWeek": 50 }, { "id": "audi", "color": "black", "pricePrWeek": 40 } ] }, { "users": [{ "name": "Simon", "role": "leaser", "carID": "tesla" }, { "name": "Nils", "role": "leaser", "carID": "audi" }, { "name": "Mikkel", "role": "leaser", "carID": "bmw" }, { "name": "Bob", "role": "renter", "carID": "null" }, { "name": "Sofia", "role": "renter", "carID": "null" } ] }, { "bookings": [{ "leaserName": "Simon", "renterName": "Bob", "startDate": "23Sep2020", "endDate": "30Sep2020" }, { "leaserName": "Nils", "renterName": "Sofia", "startDate": "23Sep2020", "endDate": "07Oct2020" } ] } ] }'
  let obj = JSON.parse(jsonText);
  res.render('index', { title: 'Express: '+obj.carLeasRent[0].cars[0].id});
});

module.exports = router;
