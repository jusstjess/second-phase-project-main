import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../index.css'


function CandyCards({cardName, cardPicture, cardPrice, cardInventory}) {
  return (
    <Row xs={1} md={4} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card className='card-image' >
            <Card.Img variant="top" src={cardPicture} />
            <Card.Body>
              <Card.Title id='cardTitle' style={{textAlign:'center' , paddingBottom: '-30'}}>
              <p style = {{fontSize: 15}} >{cardName}</p>
              </Card.Title>
              <Card.Text style={{paddingTop: '-30px'}}>
              <p style={{fontSize: 13}}>
              {cardPrice}
              <Button >{cardInventory}</Button>
              </p>
             </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CandyCards;