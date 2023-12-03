
class Leaker {
  constructor() {
    this.timerId = setInterval(this.onInterval, 1000)
  }

  onInterval() {
    console.log(`interval`)
  }

  execClearInterval() {
    clearInterval(this.timerId)
  }
}

let leaker;

function create() {
  leaker = new Leaker()
}

function disp() {
  console.log(leaker)
}

function setNull() {
  leaker.execClearInterval()
  leaker = null
}

