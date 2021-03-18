import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Image } from "react-bootstrap";
let count = 0;
const randomButton = document.querySelector('.random');




function Discover() {
  return (
    <Card>
      <Card.Header>Make New Friends</Card.Header>
      <Card.Body>
        <Card.Title>Thumbs up on any pups you'd like to meet!</Card.Title>
        <Card.Text>
          Made friends with {count} pups so far!
        </Card.Text>
        <Image src="https://dog.ceo/api/breeds/image/random" fluid />
        <br></br>
        <br></br>
        <Button class="random" variant="success">Like</Button>
        <Button class="random" variant="danger">Dislike</Button>
      </Card.Body>
    </Card>
  );
}

export default Discover;
