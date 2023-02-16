const body = document.querySelector('body');


const arrOfDivs = document.querySelectorAll('div');
console.log(arrOfDivs)

// New York City -> huge rat
  // IF they choose NYC, assign image to rat
  // call fetch on NYC weather api 


// Sydney, Australia -> Kangaroo
  // IF they choose Sydney, assign image to kangaroo
  // call fetch on Sydney weather 

// Parse weather and pull the icon key
  // if snow || fog || cloudy || partly-cloudy-night -> cloud icon
  // if rain -> rain icon
  // if wind || clear-day -> sun
  // if clear-night -> moon

const pet = document.createElement('img')
pet.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbFlrpkDUdtr7pYqjW4RrzKPMC75_xQ4Q7AA&usqp=CAU';
body.appendChild(pet)

let counter = 5;
body.addEventListener('keydown', (el) => {
  
  if (counter < 0) {
    alert("Your pet ran away!")
    arrOfDivs[0].removeChild(pet);
  }
  else if (el.code === 'ArrowDown') {
    arrOfDivs[counter].appendChild(pet);
    counter++;
  }
  else if (el.code === 'ArrowUp') {
    arrOfDivs[counter].appendChild(pet);
    counter--;
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

