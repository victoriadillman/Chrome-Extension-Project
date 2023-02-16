const body = document.querySelector('body');
let city = prompt('What city do you want? Sydney or NYC?');
// Declares array of divs 
const arrOfDivs = document.querySelectorAll('div');
// Declare the pet
const pet = document.createElement('img')

let data = null;
// New York City -> huge rat
  // IF they choose NYC, assign image to rat
  // call fetch on NYC weather api 
if (city === 'NYC') {
  pet.src = 'data:image/png;base64,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';
}
// Sydney, Australia -> Kangaroo
  // IF they choose Sydney, assign image to kangaroo
  // call fetch on Sydney weather 
if (city === 'Sydney') {
  pet.src = 'data:image/png;base64,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'
}

document.addEventListener('DOMContentLoaded', async () => {
  if (city === 'NYC') {
    const returned = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/new%20york%20city?unitGroup=metric&include=hours&key=35QLXFH2J8ME5YC6EEDY5SCUP&contentType=json');
    data = await returned.json();
    console.log(data);
  }
  
})

// Parse weather and pull the icon key
  // if snow || fog || cloudy || partly-cloudy-night -> cloud icon
  // if rain -> rain icon
  // if wind || clear-day -> sun
  // if clear-night -> moon

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

