// console.log("This is javascript called !!")
// console.log('Hellow dera')
// fetch('http://localhost:3000/weather?address=PUne').then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log(data.error)
//         }else{
//             console.log(data)
//             console.log(data.forecast)
//             console.log(data.location)
//         }
//     })
// })


// const weatherForm = document.querySelector('form')
// const search = document.querySelector('input')
// weatherForm.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     const location = search.value
//     console.log(location)
// })


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const massage1 = document.querySelector('#message-1')
const massage2 = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value
    massage1.textContent = 'Loading...'
    massage2.textContent = ''
    // fetch('http://localhost:3000/weather?address='+ location).then((response)=>{
    fetch('/weather?address='+ location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            // console.log(data.error)
            massage1.textContent = data.error
        }else{
            massage1.textContent = data.forecast
            // console.log(data)
            massage2.textContent = data.location
            // console.log(data.location)
        }
    })
})
})

