const getTwoRandomDogs = require('./getTwoRandomDogs');

const isDog = function(dog) {
  return typeof dog.name === 'string';
};

describe('getTwoRandomDogs', () => {
  test('should take a callback as an argument and call it once', (done) => {
    const runAssertion = function() {
      expect(callback.mock.calls.length).toBe(1);
      done();
    };

    let callback = jest.fn(runAssertion);
    getTwoRandomDogs(callback);
  });

  test('should call the callback with 2 dogs as an argument', (done) => {
    getTwoRandomDogs(function(dogs) {
      expect(isDog(dogs[0])).toBe(true);
      expect(isDog(dogs[1])).toBe(true);
      done();
    });
  });
});

