class AB {
  constructor(url) {
    firebase.initializeApp({databaseURL: url})
    this.database = firebase.database()
    this.href = window.location.href
    this.begin = Date.now()
  }

  finish() {
    let elapsed = Date.now() - this.begin
    let filename = this.href.substr(this.href.lastIndexOf('/') + 1)
    let reference = this.database.ref('/')
    let fingerprint = new Fingerprint2()

    setTimeout(function() {
      fingerprint.get(function(result, components) {
        reference.push({
          'id': result,
          'filename': filename,
          'elapsed': elapsed,
        })
      })
    }, 500)
  }
}


function start(url) {
  return new AB(url)
}
