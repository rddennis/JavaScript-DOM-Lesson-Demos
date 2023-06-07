let button = document.querySelector('button')

// button.addEventListener('click', () => {
//     console.log("The button was clicked!")
// })

const clickButton = () => {
    console.log("The button was clicked!")
}

button.addEventListener('click', clickButton)