// BOM [Browser - Object • Model]
// • Introduction
// Window Object -Is The Browser Window
// •Window Contain The Document Object
// All Global variables And Objects And Functions Are Members Of Window Object
// Test Document -And Console
// - •What Can We •Do With -Window Object- ?
// -Open Window
// OClose Window
// Move Window
// - Resize - Window
// - -Print - Document
// Run Code After- Period Of Time -Once Or More

window.console.log('hello')
window.document.title = 'js tuto'

// • BOM [Browser D Object Model]
// - • alert(Message) o Need No Response only Ok •Avai1ab1e alternative : sweetalert
// -confirm(Message) => Need Response And Return A Boolean
// • • prompt(Message, Default Message) Collect Data
//this==window

// let confirmMsg = confirm("Are You Sure?");
// console. log (confirmMsg) ;
// if(confirmMsg ==true) {
// console. log("ltem Deleted")}else{
// console. log( "Item Not Deleted")};

// let promMsg = prompt("Are You Sure?");
// console. log (promMsg) ;

//setTimeout

setTimeout(function () {
  console.log('msg')
}, 5000)

function sayMessage(user) {
  console.log('i am message', user)
}

setTimeout(sayMessage('fati'), 5000)
let handler = setTimeout(sayMessage, 5000, 'fati')
console.log(handler)
// document.getElementById('show').onclick = function () {
//   clearTimeout(handler)
// }

let sett = setTimeout(
  function (name) {
    sayMessage(name)
    console.log('det', sett)
  },
  2000,
  'fati',
)

let set = document.getElementById('set')
// console.log(set.textContent)
//ma version
// let count = parseInt(set.textContent)
function countdown() {
  return count--
}
// let interval = setInterval(function(){

//         set.textContent = countdown()

// },1000)

// if(count <0)
// {
//     clearInterval(interval);
//     console.log(count)
// }

//zero version
// function countdown2() {
//   set.innerHTML -= 1
//   console.log(interval)
//   if (set.innerHTML === '0') {
//     clearInterval(interval)
//   }
// }

// let interval = setInterval(countdown2, 1000) // we can use the interval variable inside setinterval

//Location
// location Object
// - [URL Il -Hash I I FileAl Mail]
// - host
// - hash
// protocol
// reload()
// replace()
// - assign()

console.log(location)
console.log(location.href)
// location.href = 'www.google.com'
// location.href = '#show' //hash
console.log(location.host) //127.0.0.1:5501
console.log(location.hostname) //127.0.0.1

// BOM [Browser Object •Model]
// open(URL [Opt], •Window - Name -Or Target •Attr• [Opt], ;Win Features [Opt],
// - close()
// - Window Features
// -Midth [Num]
// - height • [Num]
// left [Num]
// top, [Num]
// History .

// setTimeout(function () {
//   window.open('https://google.com', '_blanck', ''), 2000
// })

console.log(history)

// BOFI [Browser oObject VodelJ
//   stop()
//   - print()
//   - focus()
//   - scrollTo(x,y ||options)
//   - scroll (x, -y)
//   - scrollBy(x,y)

window.document.body.style.height = '2000px'
// window.scrollTo({ top: 1000, behavior: 'smooth' })

//scrollX
//scrollY

// console.log(window.scrollX === window.pageXOffset)
window.onscroll = function () {
  console.log(window.scrollY)
  if (window.scrollY >= 500) {
    document.getElementsByTagName('button')[0].style.display = 'block'
  } else {
    document.getElementsByTagName('button')[0].style.display = 'none'
  }
}

document.getElementsByTagName('button')[0].onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

//localStorage object property in window object
//setItem , getItem , removeItem, clear , key
//private TAb , no expiration time
//application ==> stockage ==> stockage local

//Set
// window.localStorage.setItem("color","red")
window.localStorage.fontSize = '400'
console.log(window.localStorage)

//get
console.log(window.localStorage.getItem('color'))

window.localStorage.removeItem('fontSize')

if (window.localStorage.length > 2) {
  window.localStorage.clear()
}

//get key
console.log(window.localStorage.key(0))

let lis = document.querySelectorAll('ul li')
let div = document.querySelector('.experiment')
console.log(lis)

//ma version
// window.onload=function()
// {
//   div.style.backgroundColor=window.localStorage.color
//   lis[window.localStorage.index].classList.add("active")

// }
// lis.forEach(function(elm,ind,arr){
//      console.log(elm.getAttribute("data-color"));
//      elm.onclick=function()
//      {
//        arr.forEach(function(elm){
//         elm.classList.remove("active");
//        })
//        this.classList.add("active")
//        window.localStorage.color=this.getAttribute("data-color")
//        window.localStorage.index=ind
//        div.style.backgroundColor=window.localStorage.color
//      }
// })

//zero version

// En JavaScript, lorsque tu utilises e.currentTarget.dataset,
//  tu accèdes à l'objet dataset de l'élément
//  DOM qui a déclenché l'événement.
//  L'objet dataset contient toutes les données personnalisées
//d'un élément définies via les attributs data-* en HTML.

//always check if the localstorage contains the value
if (window.localStorage.getItem('colorselected')) {
  div.style.backgroundColor = window.localStorage.colorselected
  lis.forEach((el) => {
    el.classList.remove('active')
  })
  document
    .querySelector(`[data-color="${window.localStorage.colorselected}"]`)
    .classList.add('active')
}

lis.forEach((li) => {
  li.addEventListener('click', (e) => {
    console.log(e.currentTarget.dataset.color)
    lis.forEach((el) => {
      el.classList.remove('active')
    })
    e.currentTarget.classList.add('active')
    window.localStorage.setItem('colorselected', e.currentTarget.dataset.color)
    div.style.backgroundColor = e.currentTarget.dataset.color
  })
})

//session storage
//new tab ==new session
//duplicate tab == copy session
//new tab with same url ==> new session

// window.localStorage.setItem('color', 'purple')
// window.sessionStorage.setItem('color', 'red')

//JSON : javascript object notation
//format for sharing data betwee server and client
//json derived from javascript
//alternative to xml
//file .js exetension

/*
  Why JSON?
  - Easy to Read: JSON is human-readable, making it simpler to understand and edit.
  - Supported by Most Programming Languages: JSON is widely supported by various programming languages and frameworks.
  - Easy Conversion: You can easily convert data from JSON to other formats and vice versa.

  JSON vs XML:
  - Text-Based Format: JSON uses a text-based format, making it lightweight and easier to process.
  - Lightweight: JSON does not use tags, unlike XML, making it shorter and less verbose.
  - No Tags: JSON uses key-value pairs instead of tags, unlike XML.
  - Array Support: JSON natively supports arrays for handling collections of data.
  - No Comments: JSON does not support comments, unlike XML.
*/

//API
//secret key used in private APIS
// Une API (Application Programming Interface) sert d'intermédiaire entre la base de données et l'interface utilisateur (IHM - Interface Homme-Machine). Voici comment cela fonctionne généralement :

// L'interface utilisateur (IHM) : C'est la partie visible de l'application avec laquelle les utilisateurs interagissent. Elle envoie des demandes (requêtes) à l'API pour obtenir des données ou pour soumettre des données.

// L'API : Elle fait le lien entre l'IHM et la base de données. L'API reçoit les requêtes de l'IHM, traite ces requêtes et interagit avec la base de données pour récupérer ou modifier des informations. Elle formate ensuite les réponses (en général sous forme de JSON ou XML) et les renvoie à l'IHM.

// La base de données : Elle stocke toutes les données de l'application. L'API interroge la base de données pour obtenir les informations demandées par l'utilisateur via l'IHM, ou bien elle enregistre de nouvelles données qui proviennent de l'IHM.

// Avantages de cette architecture :
// Séparation des responsabilités : L'API isole la logique de gestion des données (back-end) de l'interface utilisateur (front-end).
// Sécurité : L'API peut contrôler quelles données et quelles opérations sont accessibles depuis l'IHM, protégeant ainsi la base de données.
// Réutilisabilité : Une API peut être utilisée par différentes interfaces (applications web, mobiles, etc.) pour interagir avec les mêmes données.

// JSON.parse => convert text to js object
//JSON.stringify => convert js object to json

// JavaScript object
const user = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
  isAdmin: false,
}

// Convert the JavaScript object into a JSON string using JSON.stringify()
const jsonString = JSON.stringify(user)

console.log('JSON String:', jsonString)
// Output:
// JSON String: {"name":"John Doe","age":30,"email":"john.doe@example.com","isAdmin":false}

// Now let's parse the JSON string back to a JavaScript object using JSON.parse()
const parsedUser = JSON.parse(jsonString)

console.log('Parsed Object:', parsedUser)
// Output:
// Parsed Object: { name: 'John Doe', age: 30, email: 'john.doe@example.com', isAdmin: false }

//Synchronous
//operations runs in sequence
//each operation must wait for the previous one to complete
//like a queue

//Asynchrous
//operations runs in parallel
//this means that an operation can occur while another onother one is still being processed
//like in restaurant

//synchrounous

// console.log("1")
// console.log("2")
// window.alert("operation")
// console.log("3")

//Asynchrounous
// console.log("1")
// console.log("2")
// //processed in parallel
// setTimeout(()=>{
//   window.alert("operation")
// },5000)
// console.log("3")

// Les Web APIs sont donc des outils (les methodes et les fonctions)
// très puissants qui
// permettent d’étendre les capacités de JavaScript (qui est synchrone)
//  et
// d’interagir avec l’environnement du navigateur.
// Elles rendent possible l'exécution d'opérations
// asynchrones et permettent aux développeurs
// d'ajouter des fonctionnalités riches et
// interactives aux applications web.

// Call Stack gère les fonctions synchrones.
// Web APIs sont utilisées pour les opérations asynchrones (timers, requêtes, etc.).
// Callback Queue est où les fonctions de retour sont en attente d'exécution.
// Event Loop fait le lien entre le stack et la callback queue.
// Ces environnements fonctionnent ensemble pour
// gérer le JavaScript de manière non bloquante,
// permettant ainsi d’effectuer plusieurs tâches
// simultanément sans bloquer le fil principal.

//FIFO : first in first out like washing dishes
//LIFO :last in first out like a queue

console.log('one')
setTimeout(() => {
  console.log('tree')
})

setTimeout(() => {
  console.log('four')
})
console.log('two')

//AJAX
/*
  AJAX stands for Asynchronous JavaScript and XML.
  It allows web pages to update specific parts without reloading the entire page,
  making the user experience smoother and more dynamic.
   use XmlHTPRequest objct to interact with the server

   ex : form check name 
  How AJAX Works:

  1. Send a request: JavaScript sends a request to the server (usually for data).
  2. Server responds: The server processes the request and sends data back (often in JSON format).
  3. Update the page: The web page updates only a specific part (e.g., a table or a list) 
     with the new data, without refreshing the whole page.


     In the context of AJAX and the XMLHttpRequest object in JavaScript, readyState represents the current state of the request. The readyState changes as the request progresses, and it has five possible values:

readyState values:
0 (UNSENT): The request has been created, but the open() method hasn't been called yet.
1 (OPENED): The open() method has been called, but the request hasn’t been sent yet.
2 (HEADERS_RECEIVED): The request has been sent, and the headers of the response have been received.
3 (LOADING): The response body is being received. At this point, the responseText may contain partial data.
4 (DONE): The entire request has completed, and the response is fully received.


     */
//404 :not fiound 200:success 403 : access forbiden

let req = new XMLHttpRequest()
req.open('GET', 'https://restcountries.com/v3.1/all')
req.send()
console.log(req)

req.onreadystatechange = function () {
  console.log(req.readyState)
  console.log(req.status)
  if (this.readyState === 4 && this.status == 200) {
    let jsData = JSON.parse(this.responseText)
    // console.log(jsData);
    for (i = 0; i < 10; i++) {
      console.log(jsData[i])
      let div = document.createElement('p')
      let countryName = document.createTextNode(
        `Country N${i} : ${jsData[i].name.common}`,
      )
      div.appendChild(countryName)
      document.body.appendChild(div)
    }
  }
}

// readyState checks the progress of the request.
// status checks the result of the request from the server, usually after readyState === 4.

//callback hell||pyramid of doom

function getData(callback) {
  // Simulate an async operation (like an AJAX call)
  setTimeout(() => {
    callback('Data received')
  }, 1000)
}

function processData(data, callback) {
  // Simulate processing data
  setTimeout(() => {
    callback('Processed ' + data)
  }, 1000)
}

function saveData(data, callback) {
  // Simulate saving data
  setTimeout(() => {
    callback('Saved ' + data)
  }, 1000)
}

// Callback hell
getData((data) => {
  processData(data, (processedData) => {
    saveData(processedData, (savedData) => {
      console.log(savedData) // Output: Saved Processed Data received
    })
  })
})

getData(console.log)

let promise = new Promise((resolve, reject) => {
  // Simulate waiting for the toy (like waiting for your friend)
  setTimeout(() => {
    const toyAvailable = true // Change this to false to simulate a failure

    if (toyAvailable) {
      resolve('Here is your toy!') // Success
    } else {
      reject("Sorry, I couldn't find your toy.") // Failure
    }
  }, 1000) // Wait for 1 second
})

console.log(promise);


let promise2 = new Promise((resolve, reject) => {
  // Simulate waiting for the toy (like waiting for your friend)
  
    const toyAvailable = true // Change this to false to simulate a failure

    if (toyAvailable) {
      resolve('Here is your toy!') // Success
    } else {
      reject("Sorry, I couldn't find your toy.") // Failure
    }
  } // Wait for 1 second
)

console.log(promise2);