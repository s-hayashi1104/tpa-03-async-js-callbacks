const getRandomName = function() {
  const names = ['puppy', 'buddy', 'sam'];
  return names[Math.floor(Math.random() * names.length)];
};

const getRandomDog = function(callback) {
  console.log('@@@@@@@@@@@@@@@@@@@@@@');
  setTimeout(function() {
    const dog = {
      name: getRandomName(),
    };
    console.log(dog);
    callback(dog);
  }, Math.floor(Math.random() * 2000));
};

module.exports = getRandomDog;
