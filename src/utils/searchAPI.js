// async function start() {
//   const response = await fetch("https://dog.ceo/api/breeds/list/all");
//   const data = await response.json();
//   createBreedList(data.message);
// }

// start()

// function createBreedList(breedList) {
//   document.getElementById("breed").innerHTML = `
//   <select onchange="loadByBreed(this.value)">
//     <option>Choose a dog breed</option>
//     ${Object.keys(breedList).map(breed => {
//       return `<option>${breed}</option>`
//     }).join("")}
//   </select> 
//   `;
// };

// function loadByBreed(breed) {
//   alert(breed);
// }
let breedsArray = [];
async function start() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  createBreedList(data.message);
}

start()
function createBreedList(breedList) {
    Object.keys(breedList).map(breed => {
      return breedsArray.push(breed)
    }).join("")}

exports.array = breedsArray;