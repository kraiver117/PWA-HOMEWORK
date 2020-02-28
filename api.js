const url= 'http://jsonplaceholder.typicode.com/users'

fetch(url)
.then (response => response.json())
.then (data => {

    let element =document.getElementById('elem')
    element.innerHTML=`
    <p>${data[0].name}</p>
    <p>${data[0].username}</p>
    <p>${data[0].email}</p>
    <p>${data[0].address.street}</p>
    <p>${data[0].address.suite}</p>`
    console.log(data)

})
.catch(err => console.log(err))