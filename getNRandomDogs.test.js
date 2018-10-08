const getNRandomDogs = require('./getNRandomDogs');

const isDog = function(dog) {
  return typeof dog.name === 'string';
};

const randomInt =  Math.floor(Math.random() * (11 - 1) + 1);

describe('getNRandomDogs', () => {
  test('should take a callback as an argument and call it once', (done) => {
    const runAssertion = function() {
      expect(callback.mock.calls.length).toBe(1);
      done();
    };
    let callback = jest.fn(runAssertion);
    getNRandomDogs(randomInt, callback);
  });
  test('should call the callback with N dogs as an argument', (done) => {
    getNRandomDogs(randomInt, function(dogs) {
      expect(dogs.every(dog => isDog(dog))).toBe(true);
      expect(dogs.length).toBe(randomInt);
      done();
    });
  });
});