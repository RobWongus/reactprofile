import React from "react";
import Card from "react-bootstrap/Card";
import Container from './component/Container';
// import ListGroup from "react-bootstrap/ListGroup";
// import ListGroupItem from "react-bootstrap/ListGroupItem";

function Project() {
    
return (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>

    <Container/>
    
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  {/* <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup> */}
  <Card.Body>
    {/* <Card.Link href={props.link}>Traveler GitHub</Card.Link> */}
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
    );
}

export default Project;


// ProjectCardContainer - import some data (json, array of objects)
//     [{name: "Traveler", image: path of image, link: "http://ggoooele.com"}]
//     - data.map -> return <Project link={link}