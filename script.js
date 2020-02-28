// if ('caches' in window) {
//   caches.match(url).then(function(response) {
//     if (response) {
//       response.json().then(function(json) {
//         // Only update if the XHR is still pending, otherwise the XHR
//         // has already returned and provided the latest data.
//         if (app.hasRequestPending) {
//           console.log('updated from cache');
//           json.key = key;
//           json.label = label;
//           app.updateForecastCard(json);
//         }
//       });
//     }
//   });
// }


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



function getApiDataFromCache() {
  // CODELAB: Add code to get weather forecast from the caches object.
  if (!('caches' in window)) {
    return null;
  }
  const url = 'http://jsonplaceholder.typicode.com/users';
  return caches.match(url)
      .then((response) => {
        if (response) {
          return response.json();
        }
        return null;
      })
      .catch((err) => {
        console.error('Error getting data from cache', err);
        return null;
      });
}