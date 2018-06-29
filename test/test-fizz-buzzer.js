'use strict';

const expect = require('chai').expect;

const fizzBuzz = require('../fizzBuzzer');

describe('fizzBuzzer', function(){

  it('should be return fizz if number is divisble by 3', function(){
    const normalC = [
      {num: 18, expected: 'fizz'},
      {num: 6, expected: 'fizz'},
    ];
    normalC.forEach(function(input){
      const answer = fizzBuzz(input.num);
      expect(answer).to.equal(input.expected);
    });
  }); 
  it('should be return buzz if number is divisble by 5', function(){
    const normalC = [
      {num: 25, expected: 'buzz'},
      {num: 100, expected: 'buzz'},
    ];
    normalC.forEach(function(input){
      const answer = fizzBuzz(input.num);
      expect(answer).to.equal(input.expected);
    });
  });    
  it('should be return fizz-buzz if number is divisble by 15', function(){
    const normalC = [
      {num: 150, expected: 'fizz-buzz'},
      {num: 225, expected: 'fizz-buzz'},
    ];
    normalC.forEach(function(input){
      const answer = fizzBuzz(input.num);
      expect(answer).to.equal(input.expected);
    });
  });  
  it('should throw a new error if the arguments are not numbers', function(){
    const bad = ['false', 'asdfsd', true];
    bad.forEach(function(input){
      expect(function(){fizzBuzz(input);}).to.throw(Error);
    });
  });
  it('should be return the number if number is not divisble by 5 or 3', function(){
    const normalC = [
      {num: 7, expected: 7},
      {num: 4, expected: 4},
    ];
    normalC.forEach(function(input){
      const answer = fizzBuzz(input.num);
      expect(answer).to.equal(input.expected);
    });
  });  
});

// if (typeof num !== 'number') {
//     throw Error('`num` must be a number');
//   }
//   if (num % 15 === 0) {
//     return 'fizz-buzz';
//   }
//   if (num % 5 === 0) {
//     return 'buzz';
//   }
//   if (num % 3 === 0) {
//     return 'fizz';
//   }
//   else {
//     return num;
//   }
// };