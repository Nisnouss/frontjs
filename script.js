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

// Authentification
const button = document.querySelector('button');
button.addEventListener('click', async(e) => {
    e.preventDefault()
    const inputMail = document.querySelector('input[name = "email"]')
    const inputPwd = document.querySelector('input[name = "password"]')
    const valueMail = inputMail.value
    const valuePwd = inputPwd.value
    const url = 'http://localhost:3000/api/auth/login'

    const obj = {
        email: valueMail,
        password: valuePwd
    }
    const req = await fetch(url,{
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const data = await req.json()

    localStorage.setItem('data', json.stringify(data))
})

// Création d'un compte
const buttonRegister = document.querySelector('button[id = "register"]');
buttonRegister.addEventListener('click', async(e) => {
    e.preventDefault()
    const inputMailRegister = document.querySelector('input[name = "emailinsc"]')
    const inputPwdRegister = document.querySelector('input[name = "passwordinsc"]')
    const valueMailRegister = inputMailRegister.value
    const valuePwdRegister = inputPwdRegister.value
    const url = 'http://localhost:3000/api/auth/register'

    const obj = {
        email: valueMailRegister,
        password: valuePwdRegister
    }
    const datas = await fetch(url,{
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        },
    })
})