const url='http://jsonplaceholder.typicode.com/users'

fetch(url)
.then(Response => Response.json() )
.then(data => {

    let element=document.getElementById('element')
    element.innerHTML=`
    <p>${data[0].name}</p>
    <p>${data[0].email}</p>`

    console.log(data)
})
.catch(err => console.log(err))