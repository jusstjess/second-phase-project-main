import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CandyCards({cardName, cardPicture, cardPrice, cardInventory, cardBody}) {
  return (
    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={cardPicture} />
            <Card.Body>
              <Card.Title style={{textAlign:'center'}}>
              <h2>{cardName}</h2></Card.Title>
              <Card.Text>
              <h1>
              {cardBody}
              {cardName}
              </h1>
             </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CandyCards;