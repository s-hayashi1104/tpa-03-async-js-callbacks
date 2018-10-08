const getRandomDog = require('./helpers/getRandomDog');

const callbackResultArray = function(callback, resultArray){
  if (resultArray.length === 2) {
    callback(resultArray);
  }
};

const getTwoRandomDogs = function(callback) {
  const resultArray = [];
  getRandomDog(function(dog){
    resultArray.push(dog);
    callbackResultArray(callback, resultArray);
  });
  getRandomDog(function(secondDog){
    resultArray.push(secondDog);
    callbackResultArray(callback, resultArray);
  });
  
};

module.exports = getTwoRandomDogs;
