/*Functions
---Anynamous function ( whithout name ) 
ex of usage : onclick button , setTimeout ...
---Named Functions (with name)
 
*/

let calculator = function (num1, num2) {
  return num1 + num2
}
console.log(calculator(1, 6))

document.getElementById('show').onclick = function () {
  console.log('from show button')
}

setTimeout(function () {
  console.log('from setTimeout ')
}, 0)

// Function
// --Nested function : Function inside function (fontion imbriquées )
// if we have  a complicated function that do a lot of tasks ,we can divide it into nested function
// --return function

// example1
function sayMesage(fname, lname) {
  let message = 'hello'

  function concatMsg() {
    return `${message} ${fname} ${lname}`
  }

  return concatMsg() // return the value
  // return concatMsg; ==> return the body of function
}

// example2
function sayMesage(fname, lname) {
  let message = 'hello'

  function concatMsg() {
    function getFullName() {
      return `${fname} ${lname}`
    }
    return `${message} ${getFullName()} `
  }

  return concatMsg() // return the value
  // return concatMsg; ==> return the body of function
}

console.log(sayMesage('fatima', 'chafiki'))

// ---Arrow  function  (fonction flechés )

var print = function () {
  return 10
}

//more than one statment
var print = () => {
  let messgage = 'hello '
  return 10
}
var print = (_) => 50 // no parameter and one return statment

print = (num) => num

console.log(`from print function : ${print(40)}`)

// Scope
// ---global and local scope

//global scope : we can use it from anywhere (function , if , for )
var a = 1
let b = 2

function showText() {
  console.log(`function - from global ${a} ${b}`)
}

function showText1() {
  //local scope : only for the function
  var a = 10
  let b = 20
  console.log(`function - from local ${a} ${b}`)
}

console.log(`From global ${a} ${b}`)

showText()
showText1()

// block scope (if , switch ,for)
var x = 10
if (true) {
  var x = 222 //override the x because var is not block scope
}
console.log(x)

var x = 10
if (true) {
  let x = 222 //let is block scope
  console.log(`from block scope ${x}`)
}
console.log(`from global scope ${x}`)

//lexical scope  : child functions search for the varibale inside it then outside in parent if it dont found it inside

function parent() {
  let a = 1044
  // console.log(d) // d is not defined
  function child() {
    var a = 777
    var d = 999
    console.log(a)

    function grand() {
      console.log(a)
    }
    grand()
  }
  child()
}

parent()

// Rest parameter
let names = function (...names) {
  let output = []
  for (let name of names) {
    output.push(`[${name}]`)
  }

  function getOutput() {
    return `String ${output.join(',')} => Done`
  }
  return getOutput()
}
// version ameliores
const names2 = (...names) => {
  const output = names.map((name) => `[${name}]`)
  return `String ${output.join(',')} => Done`
}
console.log(names('fatima', 'aminae', 'fatiha', 'hanan'))

//higher order function : is a function that accepts functions as parameters and/or returns a function .

//map function
let myNums = [1, 2, 3, 4]

let newArray = []

newArray = myNums.map((num, index, arr) => `${num * 2} ${index} ${arr}`, 10)

//we can use named function , anynamous ,or arrow funcion in the map fuction

function addition(a) {
  return a + a
}

newArray = myNums.map(addition)
console.log(newArray)

//filter

newArray = myNums.filter(function (el, index) {
  return index > 0
})
console.log(newArray)

let friends = ['fatima', 'aminae', 'fatiha', 'hanan']
filteredFriend = friends.filter((elem) => elem.startsWith('f'))
console.log(filteredFriend)

//filter words more than 4 characters
let phrase = 'I love fooood thoooo much guys'
filtphrase = phrase.split(' ').filter((elem) => elem.length > 4)
console.log(filtphrase)

//higher order function : reduce => give a single value
// index => the index of the current element being processed in the array
// -- starts from index 0 if an initialValue is provided otherwise start from index 1
let nums = [1, 2, 3]

let add = nums.reduce(function (acc, current, index, arr) {
  return acc + current
})
console.log(add)

const words = ['apple', 'banana', 'strawberry', 'blueberry', 'kiwi']

const biggestWord = words.reduce((acc, currentWord) => {
  return currentWord.length > acc.length ? currentWord : acc
}, '')

console.log(biggestWord) // strawberry

const joining = words.reduce((acc, current) => {
  return `${acc},${current}`
})

console.log(joining)

//ForEach (dont return anything )

//ma version
let allis = document.querySelectorAll('.ul li')
allis.forEach(function (elm, index, array) {
  elm.onclick = function () {
    let i = index
    this.classList.add('active')
    console.log(this)
    array.forEach(function (elm, index) {
      if (index != i) {
        elm.classList.remove('active')
      }
      console.log(elm)
    })
  }
})
console.log(allis)

//version de elzero

allis.forEach(function (elm, index, array) {
  elm.onclick = function () {
    array.forEach(function (elm, index) {
      elm.classList.remove('active')
    })

    this.classList.add('active')
  }
})

//hide divs
let alldivs = document.querySelectorAll('.content div')
allis.forEach(function (elm, index, array) {
  elm.onclick = function () {
    array.forEach(function (elm, index) {
      elm.classList.remove('active')
    })

    this.classList.add('active')
    alldivs.forEach(function (el) {
      el.style.display = 'none'
    })
  }
})

/* 
  Object 
  --intro and what is object
  --testing window object
  --accessing object 
*/

let mvar = 'age'
let user = {
  //properties
  name: 'fatima',
  age: 25,
  'country of': 'morocco',
  //methods
  sayHello: function () {
    return 'hello'
  },
}

console.log(user.name) //dot notation
console.log(user['country of']) //bracket notation
console.log(user.sayHello())
console.log(user.age)
console.log(user[mvar])
console.log(user.mvar) //undefined

/* 
  Object 
  --nested object
*/

let user2 = {
  name: 'fatima',
  age: 25,
  'country of': 'morocco',
  available: true,
  skills: ['html'],
  addresses: {
    maroc: 'casa',
    ksa: {
      one: 'makkah',
      two: 'medine',
    },
  },
}

console.log(user2.addresses['ksa']['one']) //combine the two type of notation

/* 
  Object 
  --create with new Object()
*/
let user3 = new Object({
  name: 'fatima',
  age: 25,
  'country of': 'morocco',
  available: true,
  skills: ['html'],
  addresses: {
    maroc: 'casa',
    ksa: {
      one: 'makkah',
      two: 'medine',
    },
  },
})

user3.hobbies = ['sport', 'meditation', 'reading', 'travelling']
console.log(user3.addresses['ksa']['one']) //combine the two type of notation
console.log(user3)

/* 
  Object 
  --This keyword 
  this refers to owner of the funtion
  we can use this in the method  of an object  and that refers to that 

*/

console.log(this)

/* 
  Object 
  --create with create method
*/

let copyobj = Object.create(user3)
copyobj.age = 40
console.log(copyobj)

/* 
  Object 
  --create with assign method
*/

let obj = Object.assign({}, user3, { prop1: 555 })
console.log(obj)

/* 
  DOM (document object model )
  --what is DOM ? (browser converts html page to dom (object contains elements of the page))
  --DOM selectors 
    ----find element by iD
    ----find element by tag name
    ----find element by class name
    ----find element by css selectors
    ----find element by collection
    --------------title
    -------------body
    --------------images 
    ---------------forms 
    -------------------links


*/

let btn = document.getElementById('show')
console.log(btn)
let lis = document.getElementsByTagName('li')
console.log(lis)
let contentdiv = document.getElementsByClassName('content')
console.log(contentdiv)
let contentdiv1 = document.querySelector('.content div') //return the first element
console.log(contentdiv1.innerHTML)
let Allcontentdiv1 = document.querySelectorAll('.content div') //return the first element
console.log(Allcontentdiv1)

console.log(document.title)
console.log(document.body)
console.log(document.forms)
console.log(document.forms[0][0])

/* 
 DOM [get /set elements contents and attributes]
 ---innerHTML (understand html)
 ---textcontent(dont understand html)

   eelem.getAttribute()
   elem.setAttribute()
*/
//get attribute

let divOne = document.getElementById('done')
console.log(divOne)
console.log(divOne.innerHTML)
console.log(divOne.innerText)
console.log(divOne.textContent)

//set attrbute
divOne.innerHTML = 'text from main.js <span>goooo</span>'
console.log(divOne)
console.log(divOne.innerHTML)

/* 
  DOM [check attributes]
  element.attributes
  element.hasAttribute
  element.hasAttributes
  Element.removeAttribute
*/
console.log(btn.attributes)
console.log(btn.hasAttributes())

// Étape 1 : Créer un nouvel élément <div>
const newDiv = document.createElement('div')

// Étape 2 : Ajouter du contenu au <div>
newDiv.textContent = 'Bonjour, je suis un nouvel élément div!'

// Étape 3 : Ajouter des attributs (facultatif)
newDiv.setAttribute('class', 'ma-classe')

// Étape 4 : Insérer le nouvel élément dans le DOM
// Ajoute le nouvel élément au corps du document
document.body.appendChild(newDiv)

// Ou ajouter à un autre élément spécifique
// const container = document.getElementById('monContainer');
// container.appendChild(newDiv);

///////////////////////////////////////
// 1. Créer un nouvel élément <div>
const newDiv1 = document.createElement('div')
const newDiv2 = document.createElement('div')
newDiv2.innerText = 'hello world'

// 2. Créer un nœud de texte
const textNode = document.createTextNode(
  'Bonjour, je suis un nouvel élément divhhhhhhhhhh!',
)

// 3. Ajouter le nœud de texte au <div>
newDiv1.appendChild(textNode)
newDiv1.appendChild(newDiv2)

// 4. Créer un attribut 'class' avec createAttribute
const classAttr = document.createAttribute('class') // Crée un nouvel attribut 'class'
classAttr.value = 'ma-classe' // Définir la valeur de l'attribut

// 5. Ajouter l'attribut au <div> avec setAttributeNode
newDiv1.setAttributeNode(classAttr) // Ajoute l'attribut 'class' à l'élément <div>

// 6. Ajouter un attribut 'id' avec setAttribute
newDiv.setAttribute('id', 'monDiv') // Ajoute un attribut 'id' au <div>

// 7. Créer un commentaire
const comment = document.createComment('Ceci est un commentaire pour ce div.')

// 8. Ajouter le commentaire au body (invisible sur la page)
document.body.appendChild(comment)

// 9. Insérer le nouvel élément <div> dans le body
document.body.appendChild(newDiv1)



