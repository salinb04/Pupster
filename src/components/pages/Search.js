import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import axios from 'axios';
const breedsArray = [];

function Search() {
  const [data, setData] = useState([]);
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then(response => setData(response.data.message));
  }, []);

  function createBreedList(data) {
    Object.keys(data)
    .map((breed) => {
      return breedsArray.push(breed);
    })
  }
  createBreedList(data);

  return (
    <Card>
      <Card.Header>Search by Breed</Card.Header>
      <Card.Body>
        <Card.Title>
          Choose a breed you'd like to see from the dropdown!
          </Card.Title>
            <select onChange={alert("Hi")}>
                {breedsArray.map(breed => {
                  return <option key={breed}>{breed}</option>;
                })}
            </select>
          

        <Image src="https://dog.ceo/api/breeds/image/random" fluid />
      </Card.Body>
    </Card>
  );
}

export default Search;
