// **************** CALLBACKS ********************

const users = ['Juan', 'Juli', 'Gini'];

function sendNotifications(userName) {
    console.log(`Hola ${userName}! Que tengas un buen dia!`);
}

function enviarAUsuarios(array, accion) {
    array.map(e => accion(e));
    console.log('Tarea concluida!');
}

enviarAUsuarios(users, sendNotifications)



// *************** PROMESAS *******************

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true
        if (success) {
            resolve('Esta operacion ha sido exitosa!')
        } else {
            reject('La operacion fallo :(')
        }
    }, 3000);
})

document.getElementById('loading').innerHTML = 'Cargando...'

miPromesa.then(res => {
    document.getElementById('loading').innerHTML = ''
    document.getElementById('response').innerHTML = res
}).catch(error => {
    document.getElementById('loading').innerHTML = ''
    document.getElementById('response').innerHTML = error
})


// *********** PROMESAS 2 **********************

const miPromesa2 = new Promise((resolve, reject) => {

    const random = Math.round(Math.random() * 10)

    setTimeout(() => {
        resolve(random)
    }, 2000);
})

const isEven = number => {
    const even = number % 2 == 1 ? 'es impar' : 'es par'
    document.getElementById('loading2').innerHTML = ''
    document.getElementById('response2').innerHTML = `El numero ${number} ${even}`
}

miPromesa2.then(isEven
).catch(error => {
    document.getElementById('loading2').innerHTML = ''
    document.getElementById('response2').innerHTML = error
})


// ********** PROMISE ALL ***************

const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
        res('Respuesta de promesa 1')
    }, 5000);
})

const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
        res('Respuesta de promesa 2')
    }, 2000);
})

const promise3 = new Promise((res, rej) => {
    setTimeout(() => {
        res('Respuesta de promesa 3')
    }, 3000);
})


// Para poder darle la secuencialidad que yo quiero utilizo Promise.all
// Se le envia un array de promesas

Promise.all([promise1, promise2, promise3])
    .then(res => {
        console.log(res[0])
        console.log(res[1])
        console.log(res[2])
    })
    .catch(error => {
        console.error(error)
    })