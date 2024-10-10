// DOM deal with children
// 1. Accessing children
const parentElement = document.getElementById('parent')
const children = parentElement.children // Returns HTMLCollection of element children
console.log('Children:', children)
console.log('Children node:', parentElement.childNodes)
console.log('first child:', parentElement.firstChild)
console.log('first element child:', parentElement.firstElementChild)
console.log('last child:', parentElement.lastChild)
console.log('last element child:', parentElement.lastElementChild)

// 2. Traversing children
const firstChild = parentElement.firstElementChild // Access first child element
const lastChild = parentElement.lastElementChild // Access last child element
console.log('First Child:', firstChild)
console.log('Last Child:', lastChild)

// 3. Adding a new child
const newChild = document.createElement('div')
newChild.textContent = 'New Child' // Set the content of the new child
parentElement.appendChild(newChild) // Appends the new child at the end
console.log('New child added:', newChild)

// Inserting before the first child
const anotherChild = document.createElement('div')
anotherChild.textContent = 'Inserted Child'
parentElement.insertBefore(anotherChild, firstChild) // Inserted before the first child
console.log('Child inserted before first child:', anotherChild)

// 4. Removing a child (removing the last child)
parentElement.removeChild(lastChild) // Removes last child (Child 2)
console.log('Last child removed:', lastChild)

// 5. Replacing a child (replace the first child with a new one)
const replacedChild = document.createElement('div')
replacedChild.textContent = 'Replaced Child'
parentElement.replaceChild(replacedChild, firstChild) // Replaces the first child
console.log('First child replaced:', replacedChild)

// 6. Modifying a child (change text content and attribute)
newChild.textContent = 'Updated New Child' // Modify text content
newChild.setAttribute('class', 'updated-class') // Add a new class attribute
console.log('Modified new child:', newChild)

// NodeList peut contenir différents types de nœuds et peut être statique ou dynamique.
// HTMLCollection ne contient que des éléments HTML et est toujours dynamique
//element always means html element

//DOM[Events]
//onclick
//oncontextmenu
// Événements de la souris (Mouse Events)
// onclick: Déclenché lorsqu'un élément est cliqué.
// ondblclick: Déclenché lors d'un double clic sur un élément.
// onmousedown: Déclenché lorsqu'un bouton de la souris est enfoncé.
// onmouseup: Déclenché lorsqu'un bouton de la souris est relâché.
// onmouseenter: Déclenché lorsque le curseur entre dans l'élément.
// onmouseleave: Déclenché lorsque le curseur quitte l'élément.
// onmousemove: Déclenché lorsque le curseur se déplace à l'intérieur de l'élément.
// onmouseover: Déclenché lorsque le curseur passe sur l'élément ou ses enfants.
// onmouseout: Déclenché lorsque le curseur quitte l'élément ou ses enfants.
// oncontextmenu: Déclenché lors d'un clic droit, souvent pour afficher un menu contextuel.
// 2. Événements clavier (Keyboard Events)
// onkeydown: Déclenché lorsqu'une touche est enfoncée.
// onkeyup: Déclenché lorsqu'une touche est relâchée.
// onkeypress: Déclenché lorsqu'une touche est enfoncée (déconseillé, utilisez onkeydown et onkeyup).
// 3. Événements des formulaires (Form Events)
// onsubmit: Déclenché lorsque le formulaire est soumis.
// onreset: Déclenché lorsque le formulaire est réinitialisé.
// onfocus: Déclenché lorsqu'un élément reçoit le focus.
// onblur: Déclenché lorsqu'un élément perd le focus.
// onchange: Déclenché lorsque la valeur d'un élément <input> ou <select> change.
// oninput: Déclenché chaque fois que la valeur d'un élément <input> ou <textarea> change.
// onselect: Déclenché lorsque du texte est sélectionné dans un champ de formulaire.
// oninvalid: Déclenché lorsqu'un élément du formulaire est invalide.
// 4. Événements de la fenêtre (Window Events)
// onload: Déclenché lorsque la page et ses ressources sont complètement chargées.
// onunload: Déclenché lorsque la page est sur le point d'être déchargée.
// onresize: Déclenché lorsque la fenêtre du navigateur est redimensionnée.
// onscroll: Déclenché lorsque l'utilisateur fait défiler la page ou un élément.
// onbeforeunload: Déclenché avant que l'utilisateur quitte la page.
// onhashchange: Déclenché lorsque le hash de l'URL change.
// onpopstate: Déclenché lorsque l'entrée active dans l'historique change (utilisé dans les applications à page unique).
// onDOMContentLoaded: Déclenché lorsque le HTML est entièrement chargé et analysé, mais avant que les ressources comme les images soient complètement chargées.

let btn = document.getElementById('show')
btn.ondblclick = function () {
  console.log('clicked')
}

window.onscroll = function () {
  console.log('scrolling')
}

document.links[9].onclick = function (event) {
  console.log(event)
  event.preventDefault()
}

let username = document.getElementById('uname')
let userage = document.getElementById('uage')

document.forms[0].onsubmit = function (e) {
  let userValid = false
  let ageValid = false

  if (username.value !== '' && username.value.length <= 10) {
    userValid = true
  }

  if (userage.value !== '') {
    ageValid = true
  }

  if (userValid === false || ageValid === false) {
    e.preventDefault()
  }
  console.log(userValid)
}

// event simulation
// -- click
// focus
// blur

window.onload = function () {
  username.focus()
  userage.blur()
  document.links[9].click()
}

//ma version
username.addEventListener('change', (e) => {
  console.log(e)
  if (username.value !== '') {
    console.log(username.value)
    username.blur()
    userage.focus()
  }
})

// version du cchatgpt (utiliser input)
username.addEventListener('input', (e) => {
  if (username.value.length === 1) {
    // Si une lettre est saisie
    // username.blur();  // Retire le focus de 'username'
    userage.focus() // Met le focus sur 'userage'
  }
})

//classList dealing

let btnsec = document.getElementById('sec')
console.log(btnsec)
console.log(btnsec.classList)
console.log(btnsec.classList.contains('btn'))
console.log(btnsec.classList.item(1))
btnsec.classList.remove('btn-secondary')
btnsec.classList.add('btn-primary')
btnsec.classList.toggle('btn-danger') //add or remove selon si laa classe existe ou non
btnsec.style.cssText = 'color:blue;font-weight:bold;background-color:green'
btnsec.style.backgroundColor = 'pink'
btnsec.style.removeProperty('color') //[inline , stylesheet]
btnsec.style.setProperty('color', 'purple', 'important')
document.styleSheets[1].rules[0].style.setProperty('background-color', 'pink')

//deal with elements
// before , after , append , prepend , remove

let element = document.getElementById('my-div')
let createP = document.createElement('p')
createP.textContent = 'created paragraph'
createP.innerHTML = '<span>span</span>'
element.before('hello from JS')
element.after('hello from JS2')
element.after(createP)
element.before(createP)
element.append('appended elements </br>')
element.prepend('prepended element </br>')
// element.remove()

let sibling = element.previousElementSibling
console.log('sib', sibling)

let sibling2 = element.nextElementSibling
console.log('sib', sibling2)

let sibling3 = element.nextSibling
console.log('sib', sibling3)

let sibling4 = element.previousSibling
console.log('sib', sibling4)

let sibling5 = element.parentElement //used in pop
console.log('sib', sibling5)

// DOM CLONING
//cloneNode (deep)
let element12 = document.getElementById('my-div')
let element1 = document.getElementById('my-div').cloneNode(true)
let element3 = document.getElementById('done')
element3.appendChild(element1)
console.log(element1, element12)

one = function () {
  console.log('clicked one')
}

two = function () {
  console.log('clicked two')
}
//addeventliscner
element12.addEventListener('click', one)
element12.addEventListener('click', two)

// element12.addEventListener('click',"two") errors

document.addEventListener('click', function (e) {
  console.log(e.target, e.screenX, e.screenY)
  if (e.target.id === 'done') {
    console.log('hello guys i am here')
  }
})

//we can add event to an element that is not created like below
