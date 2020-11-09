/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L';
      assert.equal(convertHandler.getNum(input), 32, `result must be 32 but is: ${convertHandler.getNum(input)}`);
      done();
    });
    
    test('Decimal Input', function(done) {
      var input = '8.3km';
      assert.equal(convertHandler.getNum(input), 8.3, `result must be 8.3 but is: ${convertHandler.getNum(input)}`);
      done();
    });
    
    test('Fractional Input', function(done) {
      var input = '10/2km';
      assert.equal(convertHandler.getNum(input), 5, `result must be 5 but is: ${convertHandler.getNum(input)}`);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = '7.2/2km';
      assert.equal(convertHandler.getNum(input), 3.6, `result must be 3.6 but is: ${convertHandler.getNum(input)}`);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input = '8.2/2.05km';
      assert.equal(convertHandler.getNum(input), 4, `result must be 4 but is: ${convertHandler.getNum(input)}`);
      done();
    });
    
    test('No Numerical Input', function(done) {
      var input = 'km';
      assert.equal(convertHandler.getNum(input), 'invalid number', `result must be 1 but is: ${convertHandler.getNum(input)}`);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(ele) {
        // console.log('for ele: ', ele, ' -result: ', convertHandler.getUnit(ele));
        assert.equal(convertHandler.getUnit(ele), ele.toLowerCase())
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      var input = 'ivilhjv';
      // console.log('for input: ', input, ' -result: ', convertHandler.getUnit(input));
      assert.equal(convertHandler.getUnit(input), 'invalid unit');
      input = '615'
      // console.log('for input: ', input, ' -result: ', convertHandler.getUnit(input));
      assert.equal(convertHandler.getUnit(input), 'no unit');
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','l','mi','km','lbs','kg'];
      var expect = ['gallons','liters','miles','kilometers','pounds','kilograms'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      var input = [5, 'l'];
      var expected = 1.3207;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Mi to Km', function(done) {
      var input = [5, 'mi'];
      var expected = 8.047;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Km to Mi', function(done) {
      var input = [5, 'km'];
      var expected = 3.1069;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Lbs to Kg', function(done) {
      var input = [5, 'lbs'];
      var expected = 2.2680;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('Kg to Lbs', function(done) {
      var input = [5, 'kg'];
      var expected = 11.0231;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
  });

});