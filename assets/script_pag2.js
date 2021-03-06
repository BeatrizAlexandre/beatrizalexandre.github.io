document.addEventListener('DOMContentLoaded', function() {
  let db = new DB('https://aula-10-a1ec0.firebaseio.com/')

  let tpName = new TP('template-name')

  let tpGoals = new TP('template-goals')

  let params = new URLSearchParams(window.location.search)

  let url = '/' + params.get('category') + '/courses/' + params.get('course') + '/'

  db.download(url, function(data) {
    let name = document.querySelector('.name')
    name.innerHTML = tpName.generate({'name': data['name']})

    let goals = document.querySelector('.goals')
    goals.innerHTML = tpGoals.generate({'goals': data['goals']})
    console.log(data)
  })
})