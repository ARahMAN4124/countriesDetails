import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import "./Countries.css";

const Countries = ({ country }) => {
  const { name, capital, flag, population } = country;
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <Card style={{ width: "18rem" }} className="mt-5 container shadow-lg">
        <Card.Img className="card-img" variant="top" src={flag} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Capital : {capital}</ListGroupItem>
          <ListGroupItem>population : {population}</ListGroupItem>
        </ListGroup>
        <Card.Footer>
          <Link to={`/country/${name}`}>
            <Button variant="primary">Show details</Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Countries;
