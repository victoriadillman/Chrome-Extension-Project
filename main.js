const body = document.querySelector('body');


const arrOfDivs = document.querySelectorAll('div');
console.log(arrOfDivs)


const cat = document.createElement('img')
cat.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbFlrpkDUdtr7pYqjW4RrzKPMC75_xQ4Q7AA&usqp=CAU';
body.appendChild(cat)

let counter = 0;
body.addEventListener('keydown', (el) => {
  if (el.code === 'ArrowDown') {
    arrOfDivs[counter].appendChild(cat);
    counter++;
  }
    
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

