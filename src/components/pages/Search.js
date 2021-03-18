import React from "react";
import { Card } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";



function Search(props) {
 console.log(props.breeds);
  return (
    <Card>
      <Card.Header>Search by Breed</Card.Header>
      <Card.Body>
        <Card.Title>Choose a breed you'd like to see from the dropdown!</Card.Title>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>
        
          <Dropdown.Menu>
          {props.breeds.map(breed => {
            return (<Dropdown.Item>{breed}</Dropdown.Item>)
          }
        )}
          </Dropdown.Menu>
          </Dropdown>

        <Image src="https://dog.ceo/api/breeds/image/random" fluid />
      </Card.Body>
    </Card>
  );
}


export default Search;
