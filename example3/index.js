class Registry {
  constructor() {
    this.subscribers = [];
    this.str = this.randStr();
  }

  add(subscriber) {
    if (!this.subscribers.includes(subscriber)) {
      this.subscribers.push(subscriber);
    }
  }

  remove(subscriber) {
    if (this.subscribers.includes(subscriber)) {
      this.subscribers.splice(this.subscribers.indexOf(subscriber), 1);
    }
  }

  randStr() {
    var S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    var N=1000*1000*100
    return Array.from(Array(N)).map(()=>S[Math.floor(Math.random()*S.length)]).join('')
  }
}

class Leaker {
  constructor(parent, registry) {
    this.parent = parent;
    this.registry = registry;
    this.child = null;
    this.registry.add(this);

    if (!this.parent) {
      this.child = new Leaker(this, registry);
    }
    this.str = this.randStr();
  }

  randStr() {
    var S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    var N=1000*1000*100
    return Array.from(Array(N)).map(()=>S[Math.floor(Math.random()*S.length)]).join('')
  }
}

let registry;
let leaker;

function create() {
  registry = new Registry();
  leaker = new Leaker(null, registry);
  leaker = null;
}

function setNull() {
  registry = null;
}

