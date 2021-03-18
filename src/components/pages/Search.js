import React from "react";
import { Card } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Image } from "react-bootstrap";

function Search(props) {

async function start() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  return data.message
}



function loadByBreed(breed) {
  alert(breed);
}


  return (
    <Card>
      <Card.Header>Search by Breed</Card.Header>
      <Card.Body>
        <Card.Title>Choose a breed you'd like to see from the dropdown!</Card.Title>

        <div id="breed">
          <select onChange={loadByBreed(start())}></select>
          <div>
          <select onChange={loadByBreed(start())}>
    <option>Choose a dog breed</option>
    {Object.keys(start()).map(breed => {
      return <option>{breed}</option>
    }).join("")}
  </select> 
            
          </div>
        </div>
        
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>

        <Image src="https://dog.ceo/api/breeds/image/random" fluid />
      </Card.Body>
    </Card>
  );
}
export default Search;
