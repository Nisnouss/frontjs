// Afficher une quote
async function getQuote() {
    const url = 'http://localhost:3000/api/quote'
    const req = await fetch(url,{
        method: 'GET',
    })
    const data = await req.json()
    const divQuote = document.querySelector('div');
    divQuote.insertAdjacentHTML('afterbegin', `<p>${data.quote}</p>`);
    divQuote.insertAdjacentHTML('beforeend', `<p>${data.author}</p>`);
    // console.log(await datas.json())
}
getQuote();

// Créer une quote
// const createNewQuote = document.createElement('input');


// Effacer une quote



// Authentification
const button = document.querySelector('button');
button.addEventListener('click', async(e) => {
    const inputMail = document.querySelector('input[name = "email"]')
    const inputPwd = document.querySelector('input[name = "password"]')
    const valueMail = inputMail.value
    const valuePwd = inputPwd.value
    const url = 'http://localhost:3000/api/login'

    const obj = {
        email: valueMail,
        password: valuePwd
    }
    const datas = await fetch(url,{
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        },
    })
})



// Création d'un compte
const buttonRegister = document.querySelector('button[id = "register"]');
buttonRegister.addEventListener('click', async(e) => {
    const inputMail = document.querySelector('input[name = "emailinsc"]')
    const inputPwd = document.querySelector('input[name = "passwordinsc"]')
    const valueMail = inputMail.value
    const valuePwd = inputPwd.value
    const url = 'http://localhost:3000/api/register'

    const obj = {
        email: valueMail,
        password: valuePwd
    }
    const datas = await fetch(url,{
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        },
    })
})