// Afficher une quote
async function getQuote() {
    const url = 'http://localhost:3000/api/quote/all'
    const req = await fetch(url,{
        method: 'GET',
    })
    const datas = await req.json()
    const divQuote = document.querySelector('div');
    datas.forEach(data => {
        divQuote.insertAdjacentHTML('afterbegin', `<p>${data.quote}</p>`);
        divQuote.insertAdjacentHTML('afterbegin', `<p>${data.author}</p>`);
    });
    // console.log(await datas.json())
}
getQuote();

// Créer
const buttonCreate = document.querySelector('button[id = "create"]')
buttonCreate.addEventListener('click', async(e) => {
    e.preventDefault()
    const createQuote = document.querySelector('input[id = "addQuote"]')
    const createAuthor = document.querySelector('input[id = "addAuthor"]')
    const createQuoteVal = createQuote.value
    const createAuthorVal = createAuthor.value

    const url = 'http://localhost:3000/api/quote'

    const obj = {
        quote: createQuoteVal,
        author: createAuthorVal
    }

    const req = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5YTAxMGUyZjVmNDRhY2EyOWU1MGE1YiIsImlhdCI6MTc3MjA5OTcwMSwiZXhwIjoxNzc0NjkxNzAxfQ.KVrg1Tul2CJTzAVgkhD2gcgl7yM9HO__SccjnMOdyCk`
        },
    })

    const data = await req.json()
    console.log(data)
})
// Modifier
const buttonUdpate = document.querySelector('button[id = "update"]')

buttonUdpate.addEventListener('click', async(e) => {
    e.preventDefault()
    const updateQuote = document.querySelector('input[id = "updQuote"]')
    const updateAuthor = document.querySelector('input[id = "updAuthor"]')
    const updateQuoteVal = updateQuote.value
    const updateAuthorVal = updateAuthor.value

    const obj = {
        quote: updateQuoteVal,
        author: updateAuthorVal
    }
    const url = `http://localhost:3000/api/quote/${id}`


    const req = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5YTAxMGUyZjVmNDRhY2EyOWU1MGE1YiIsImlhdCI6MTc3MjA5OTcwMSwiZXhwIjoxNzc0NjkxNzAxfQ.KVrg1Tul2CJTzAVgkhD2gcgl7yM9HO__SccjnMOdyCk`
        }
    })

    const data = await req.json()
    console.log(data)
})

// Supprimer
const buttonDelete = document.querySelector('button[id = "delete"')

buttonDelete.addEventListener('click', async(e) => {
    e.preventDefault()
    
    const url = `http://localhost:3000/api/quote/${id}`

    const req = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5YTAxMGUyZjVmNDRhY2EyOWU1MGE1YiIsImlhdCI6MTc3MjA5OTcwMSwiZXhwIjoxNzc0NjkxNzAxfQ.KVrg1Tul2CJTzAVgkhD2gcgl7yM9HO__SccjnMOdyCk`
        }
    })

    const data = await req.json()
})