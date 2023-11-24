class Registry {
  constructor() {
    this.subscribers = [];
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
  }
}

function create() {
  let registry = new Registry();
  let leaker = new Leaker(null, registry);
  leaker = null;
}

