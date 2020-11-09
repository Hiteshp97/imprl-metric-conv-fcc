/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      if(!input) return res.json({ error: 'invalid number and unit'})
      if(typeof returnNum === 'string') {
        res//.status(400)
          .json({ error: returnNum });
      } else if(typeof returnNum === 'number') {
        res.json({ 
          initNum, 
          initUnit: initUnit,// == 'l' ? 'L' : initUnit, 
          returnNum, 
          returnUnit: returnUnit,// == 'l' ? 'L' : returnUnit, 
          string: toString 
        });
      } else {
        res.json({ error: 'something went wrong'})
      }
    });
    
};
