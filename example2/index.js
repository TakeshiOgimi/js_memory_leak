
class Leaker {
  constructor() {
    this.date = new Date();
    this.timerId = setInterval(this.onInterval, 1000);
  }

  onInterval() {
    console.log(`interval`);
  }
}

let leaker;

function create() {
  leaker = new Leaker()
}

function disp() {
  console.log(leaker)
}

function clear() {
  leaker = null
}

