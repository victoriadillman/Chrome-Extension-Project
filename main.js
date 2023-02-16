const body = document.querySelector('body');


body.addEventListener('click', () => {
    body.style.backgroundColor = 'green';

})
body.addEventListener('keydown', (e) => {
     if (e.code === 'ArrowDown') console.log ("yay")
})

console.log('hi')
