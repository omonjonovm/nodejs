const Events = require('events')
class Logger  extends Events{
  log(a,b) {
    this.emit('calc', a*b)
  }
}
const logger = new Logger()
logger.on('calc',(data) => {
  console.log(data);
})
logger.log(929,897)
logger.log(1992,7003)
logger.log(949,656)
logger.log(670,8000)