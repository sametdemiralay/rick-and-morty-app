import React, { FC } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Result } from "../types";

interface CardProps {
  character: Result;
}

const CardComp: FC<CardProps> = ({ character }) => {
  return (
    <div className='col-4 p-3'>
      <Card>
        <Card.Img variant='top' src={character.image} />
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          <Card.Text>{character.gender}</Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComp;
