import React from "react";
import Card from "react-bootstrap/Card";
import assignments from "./homework.json"
// import ListGroup from "react-bootstrap/ListGroup";
// import ListGroupItem from "react-bootstrap/ListGroupItem";

function Project() {
    
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          { assignments.map( hw => (
            <div className="col-4" key={hw.key}>
              <Card className="main-card" style={{height: "400px", marginBottom: "18px"}}>
                <div style={{height: "100px", position: "absolute", top: 0, left: 0}}>
                  <img src={hw.images} alt={hw.cardtitle} className="img-fluid" style={{height: "100px", width: "100%"}} />
                </div>
                <Card.Body style={{ paddingTop: "110px"}}>
                  <Card.Title>{hw.cardtitle}</Card.Title>
                  <Card.Text>
                    {hw.description}
                  </Card.Text>

                  <Card.Link href={hw.gitlink}>Repo</Card.Link>
                  <Card.Link href={hw.livelink}>Live</Card.Link>
                </Card.Body>
          
                {/* <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup> */}
              </Card>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .main-card {
          height: 400px;
          margin-bottom: 18px
        }
      `}</style>
    </>
  );
}

export default Project;


// ProjectCardContainer - import some data (json, array of objects)
//     [{name: "Traveler", image: path of image, link: "http://ggoooele.com"}]
//     - data.map -> return <Project link={link}