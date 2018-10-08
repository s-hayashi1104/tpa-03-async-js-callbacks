const getRandomDog = require('./helpers/getRandomDog');

const callbackResultArray = function(randomInt, callback, resultArray){
  if (resultArray.length === randomInt) {
    callback(resultArray);
  }
};

const getNRandomDogs = function(randomInt, callback) {
  const resultArray = [];
  for (let loop = 0; loop < randomInt; loop+=1){ 
    getRandomDog(function(dog){
      resultArray.push(dog);
      callbackResultArray(randomInt, callback, resultArray);
    });
  }
};

module.exports = getNRandomDogs;