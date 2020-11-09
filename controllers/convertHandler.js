/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    // result = eval(input.match(/[\d.\/]/g).reduce((prev, val) => prev.concat(val), ''));
    if((/^\d+\.?\d*(\/\d+\.?\d*)?[a-z]*(gal|L|lbs|kg|mi|km)?[a-z]*/i).test(input)) {
      if(input.match(/^\d+\.?\d*(\/\d+\.?\d*)?/i)[0] === null) {
        result = 1;
      }
      result = eval(eval(input.match(/^\d+\.?\d*(\/\d+\.?\d*)?/i)[0]).toFixed(5));
    } else {
      result = 'invalid number';
    }
    if((/^\d+\.?\d*(\/\d+\.?\d*){2,}[a-z]*(gal|L|lbs|kg|mi|km)?[a-z]*/i).test(input)) {
      result = 'invalid number';
    }
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    // result = input.match(/[a-zA-Z]/g).reduce((prev, val) => prev.concat(val), '')
    if(/[a-z]*(gal|L|lbs|kg|mi|km)?[b-fh-z]+l$/i.test(input)) {
      result = 'invalid unit';
    } else if((/(^\d+\.?\d*(\/\d+\.?\d*))?(gal|L|lbs|kg|mi|km)$/i).test(input)) {
      result = input.match(/[^(a-z)\d]*(gal|L|lbs|kg|mi|km)$/i)[1];
    } else if(/[a-z]*(gal|L|lbs|kg|mi|km)?[a-z]+$/i.test(input)) {
      result = 'invalid unit';
    } else {
      result = 'no unit';
    }
    return result.toLowerCase();
  };
  
  this.getReturnUnit = function(initUnit) {
    // var result;
    // initUnit = initUnit.toLowerCase();
    if(initUnit === 'no unit') return initUnit;
    else if(initUnit === 'invalid unit') return initUnit;
    else {
      switch(initUnit) {
        case 'gal': return 'l';
        case 'l': return 'gal';
        case 'mi': return 'km';
        case 'km': return 'mi';
        case 'lbs': return 'kg';
        case 'kg': return 'lbs';
      }
    }
    // return result;
  };

  this.spellOutUnit = function(unit) {
    // var result;
    if(unit === 'no unit') return unit;
    else if(unit === 'invalid unit') return unit;
    else {
      switch(unit) {
        case 'gal': return 'gallons';
        case 'l': return 'liters';
        case 'mi': return 'miles';
        case 'km': return 'kilometers';
        case 'lbs': return 'pounds';
        case 'kg': return 'kilograms';
        // case 'gal': return ' gallons converts to  liters';
        // case 'l': return ' liters converts to  gallons';
        // case 'mi': return ' miles converts to  kilometers';
        // case 'km': return ' kilometers converts to  miles';
        // case 'lbs': return ' pounds converts to  kilograms';
        // case 'kg': return ' kilograms converts to  pounds';
      }
    }
    // return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    // var result;
    if(initUnit === 'no unit') return initUnit;
    else if(initUnit === 'invalid unit' && initNum === 'invalid number') return 'invalid number and unit';
    else if(initUnit === 'invalid unit') return initUnit;
    else if(initNum === 'invalid number') return initNum;
    else {
      switch(initUnit) {
        case 'gal': return Number((initNum * galToL).toFixed(5));
        case 'l': return Number((initNum / galToL).toFixed(5));
        case 'mi': return Number((initNum * miToKm).toFixed(5));
        case 'km': return Number((initNum / miToKm).toFixed(5));
        case 'lbs': return Number((initNum * lbsToKg).toFixed(5));
        case 'kg': return Number((initNum / lbsToKg).toFixed(5));
      }
    }
    // return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    // var result;
    return (initNum.toString() + ' ' + (new ConvertHandler()).spellOutUnit(initUnit) + ' converts to ' + returnNum.toString() + ' ' + (new ConvertHandler()).spellOutUnit(returnUnit));
    // return result;
  };
  
}

module.exports = ConvertHandler;
