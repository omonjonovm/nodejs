(function (require,module,exports,__dirname,__filename){
  const userData  = require('./user')
  const carData = require('./car')
  
  console.log(userData.user);
  userData.userLogger()
  
  console.log(carData.car);
  carData.carLogger()
})()