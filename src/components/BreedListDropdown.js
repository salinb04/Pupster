function BreedListDropdown() {

  async function start() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    createBreedList(data.message);
  }
  
  start()
  
  function createBreedList(breedList) {
    document.getElementById("breed").innerHTML = `
      <option>Choose a dog breed</option>
      ${Object.keys(breedList).map(breed => {
        return `<option>${breed}</option>`
      }).join("")}
    `;
  };
  
  function loadByBreed(breed) {
    alert(breed);
  }
  
  return (
        <div>
         <select id="breed" onchange={loadByBreed(this.value)}>
          
         </select>
        </div>
    )
}

export default BreedListDropdown;