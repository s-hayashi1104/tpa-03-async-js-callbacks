const getNRandomDogs = require('./getNRandomDogs');

const isDog = function(dog) {
  return typeof dog.name === 'string';
};

const randomInt =  Math.floor(Math.random() * (11 - 1) + 1);

const measureLength = function(dogs) {
  return dogs.length === randomInt;
}

describe('getNRandomDogs', () => {
  test('should take a callback as an argument and call it once', (done) => {
    const runAssertion = function() {
      expect(callback.mock.calls.length).toBe(randomInt);
      done();
    };
    let callback = jest.fn(runAssertion);
    getNRandomDogs(callback);
  });
  test('should call the callback with N dogs as an argument', (done) => {
    getNRandomDogs(randomInt, function(dogs) {
      expect(isDog(dogs[0])).toBe(true);
      expect(measureLength(dogs)).toBe(true);
      done();
    });
  });
});