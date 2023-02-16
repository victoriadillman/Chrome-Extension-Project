const body = document.querySelector('body');

body.style.backgroundColor = 'green';

const arrOfDivs = document.querySelectorAll('div');

console.log(arrOfDivs);

arrOfDivs[0].style.backgroundColor = 'red';
arrOfDivs[1].style.backgroundColor = 'orange';
arrOfDivs[2].style.backgroundColor = 'yellow';
arrOfDivs[3].style.backgroundColor = 'green';
arrOfDivs[4].style.backgroundColor = 'blue';
arrOfDivs[5].style.backgroundColor = 'purple';


body.addEventListener('keydown', (el) => {
  if (el.code === 'ArrowDown') console.log('yes! this is down!')
})

// array = [div1, div1, div2]
// set a location to 0 

//img is at array[location]

// if user clicks up
// move one up on the array 
// location++
// img appended to array[location]


// if user clicks down
// move down one on the array
// location--

// if location < 0 you just killed your pet 

