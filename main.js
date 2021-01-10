// console.log(document.all)
// console.dir(document)
// console.log(document.head)
// console.log(document.body)
// console.log(document.title)
// console.log(document.images)
// console.log(document.URL)
// console.log(document.doctype)
// console.log(document.domain)
// console.log(document.links)
// console.log(document.forms)

// var header = window.document.getElementById('mainHeader')
// console.log(header)
// //header.innerText = 'Apple'
// console.log(header.innerText)
// //header.innerHTML = 'Apple'
// console.log(header.innerHTML)
// //header.textContent = 'Apple'
// console.log(header.textContent)
// header.style.borderBottom = 'red 4px solid'

// let headerTitle = window.document.getElementById('headTitle')
// console.log(headerTitle)
// headerTitle.innerText = 'Apple Pie'
// headerTitle.style.color = 'red'
// headerTitle.style.fontFamily = 'monospace'
// console.log(headerTitle.innerText)
// console.log(headerTitle.innerHTML)
// console.log(headerTitle.textContent)

// var postClass = document.getElementsByClassName('post')
// console.log(postClass)
// console.log(postClass[2])
// console.log(postClass[2])

// var li = document.getElementsByTagName('li')
// console.log(li)

// for(i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = 'grey'
// }

// var inputField = document.querySelector('input')
// inputField.value = 'Edward O Oboh';

// let sendInput = document.querySelector('input[type="submit"]')
// sendInput.value = "SEND IT"

// const posts = document.querySelector('.post h3')
// posts.textContent = "Apple Pie Post"

// const posts2 = document.querySelector('.post:nth-child(3) h3')
// posts2.textContent = "Third But Called Second"

// var oddSelect = document.querySelectorAll('li')

// //console.log(oddSelect)

// for(i=0; i<oddSelect.length; i++){
//     oddSelect[i].style.backgroundColor = 'green'
// }

// var allPost = document.querySelector('section')
// console.log(allPost)

// console.log(allPost.children)
// console.log(allPost.parentNode)
// console.log(allPost.parentElement)
// console.log(allPost.childNodes)
// console.log(allPost.nextSibling)
// console.log(allPost.nextElementSibling)
// console.log(allPost.previousSibling)
// console.log(allPost.previousElementSibling)
// console.log(allPost.lastChild)
// console.log(allPost.lastElementChild)
// console.log(allPost.firstChild)
// console.log(allPost.firstElementChild)

//Creating HTML Elements and adding to a page

// var newDiv = document.createElement('div')

// newDiv.setAttribute('class', 'apple')
// newDiv.setAttribute('id', 'pin')

// newDiv.className = 'peanut'

// newDiv.id = 'mapple'

// //newDiv.innerHTML = '<h1>Heloo Fiple</h1>'


// // text to add to the created element
// var theText = document.createTextNode("This is the new text to be added to the dive")

// newDiv.appendChild(theText)

// //grab the parent element of where the new element is to be placed
// var headParent = document.querySelector('header#mainHeader')

// //grab the element that is to come after the new element
// var nextElement = document.querySelector('header #headTitle')

// //now we will add the new element to the parent
// headParent.insertBefore(newDiv, nextElement)

// console.log(newDiv)


// //using function to handle events from html pages
// function eventButton(e){
//     //alert(message)
//     console.log('Apple is sweet')
//     console.log(e)
// }

// var eventButton = document.getElementById('exButton')
// var secBox = document.getElementById('sectionArea')

var outArea = document.getElementById('outArea')

// eventButton.addEventListener('click', sendTo)
// eventButton.addEventListener('dblclick', sendTo)
// eventButton.addEventListener('mousedown', sendTo)
// eventButton.addEventListener('mouseup', sendTo)
// secBox.addEventListener('mouseenter', sendTo)
// secBox.addEventListener('mouseleave', sendTo)
// secBox.addEventListener('mouseover', sendTo)
// secBox.addEventListener('mouseout', sendTo)

// secBox.addEventListener('mousemove', sendTo)

var inputField = document.querySelector('#nameInput')
var selectItem = document.querySelector('#selectItem')
var theForm = document.getElementById('theForm')

// inputField.addEventListener('keydown', sendTo)
// inputField.addEventListener('keyup', sendTo)
// inputField.addEventListener('keypress', sendTo)
// inputField.addEventListener('change', sendTo)
// inputField.addEventListener('focus', sendTo)
// inputField.addEventListener('blur', sendTo)
// inputField.addEventListener('cut', sendTo)
// inputField.addEventListener('paste', sendTo)

// inputField.addEventListener('input', sendTo)

// selectItem.addEventListener('change', sendTo)

theForm.addEventListener('submit', sendTo)

function sendTo(e){
    // console.log('The event button was clicked')
    // document.getElementById('mainHeader').style.backgroundColor = 'lightgreen'
    // document.getElementById('headTitle').innerText = 'Changes'
    // console.log(e)
    // console.log(e.target.id)
    // console.log(e.target.className)
    // console.log(e.target.classList)
    // console.log(e.type)

    // console.log(e.clientX, e.clientY)
    // console.log(e.offsetX, e.offsetY)
    // console.log(e.altKey)
    // console.log(e.shiftKey)
    // console.log(e.ctrlKey)

    // console.log(e.type)

    // outArea.innerHTML = '<h3> X Pos.: '+ e.offsetX +' Y Pos.: ' + e.offsetY + ' </h3>'

    e.preventDefault();
    console.log(e.type)
    // outArea.innerHTML = '<h3>'+ e.target.value +'</h3>'

    // console.log(e.target.value)
}
