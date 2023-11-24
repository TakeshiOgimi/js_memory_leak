
class Leaker {
  constructor () {
    let res = []
    let limit = 1024 * 1024
    for (let i = 0; i < limit ; i++) {
      res[i] = this.randStr()
    }
    this.strs = res
    console.log('fin')
  }

  randStr () {
    var S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    var N=1024
    return Array.from(crypto.getRandomValues(new Uint8Array(N))).map((n)=>S[n%S.length]).join('')
  }
}

let leaker;

function create() {
  leaker = new Leaker()
}

