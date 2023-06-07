/* 
Demo #1
Code Along Tasks 
*/

// Select the cafe name
let cafeName = document.querySelector('h1')
// console.log(cafeName)
// console.log(typeof(cafeName))


// Select all menu items
let menu = document.querySelectorAll('li')
// console.log(menu)


// Select the first menu item
let firstItem = document.getElementById('item-1')
let firstItemq = document.querySelector('#item-1')
console.log(firstItem)
console.log(firstItemq)



/* 
Demo #2
Code Along Tasks 
*/

// Modify the heading to a different restaurant name (text)
let title = document.querySelector('h1')
title.innerText = 'Chipped Cohort'



// Change the className of an element (attr)
let divTag = document.querySelector('div')
divTag.setAttribute('class', 'menu-name')




/* 
Demo #3 
Add and Resize Image Using JS 
*/

const image = document.createElement('img')
image.setAttribute('src', 'coffee.jpeg')

const div = document.querySelector('div')
div.appendChild(image)

image.style.width = '200px'



/* 
Demo #4 
Remove a Menu Item from the Page 
*/

let item = document.querySelector('li')
item.remove()