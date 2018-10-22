    document.addEventListener('DOMContentLoaded', function() {

	let db = connect('https://aula-10-a1ec0.firebaseio.com/')

	let params = extract()

	let url = '/' + params['topico'] + '/courses'

	let url2 = '/' + params['topico'] + '/courses/' + params['courses']
	//console.log(url2)
	//console.log(url)

	db.download(url2,function(data){

		   replace('body', {
		   	'nome': data['nome'],
    		'curs': data['goals'],

		})
		

	})

    db.download(url, function(data) {
    	replace('body', {
    		'courses': data,

    	})

    /*
        Inicializa uma medição de tempo, que será gravada no
        banco de dados cujo endereço é passado como parâmetro.
        Altere o endereço abaixo para seu próprio banco de dados.
    */
    let ab = start('https://teste-a-e-b.firebaseio.com/')

    /*
        Seleciona o elemento que, quando clicado, finaliza a
        medição de tempo e envia o resultado para o banco.
        Altere o seletor abaixo para o do elemento desejado.
    */
    let element = document.querySelector('.continue')

    /*
        A princípio, o restante do código não precisa mudar.
    */
    
    element.addEventListener('click', function() {
        ab.finish()
    })

    let as = document.querySelectorAll('a')

    for(let a of as) {
        a.addEventListener('click', function(event) {
            event.preventDefault()
            setTimeout(function() {
                window.location.assign(a.href)
            }, 5000)
        })
    }



    })
/*
	db.download(url, function(data) {
		for(key in data){
			let nome = document.querySelector('.nome')
    		nome.innerHTML = tpNome.generate({'nome': data[key]['nome']})
    	}
    	*/
    	//let courses = document.querySelector('.goals')
    	//courses.innerHTML = tpCourses.generate({'goals': data['goals']})




		//for(key in data){

			/*replace('body', {
				'nome': data[key]['nome'],
				}
			)*/
			//console.log(data[key]['nome'])
		//} 
  	//})
})
