import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../index.css'



function CandyCards({cardName, cardPicture, cardPrice,btnColor, btnText}) {

  
  return (
   
          <Card  border="black" className='card-image' >
            <Card.Img id='cardImage' variant="top" src={cardPicture} />
            <Card.Body id= 'cardBody'>
              <Card.Title id='cardTitle' style={{textAlign:'center' , paddingBottom: '-30'}}>
              <p style = {{fontSize: 10}} >{cardName}</p>
              </Card.Title>
              <Card.Text style={{paddingTop: '-30px'}}>
              <p style={{fontSize: 10}}>
              {cardPrice}
              <Button className='addToCartButton' style={btnColor}>{btnText}</Button>
              </p>
             </Card.Text>
            </Card.Body>
          </Card>
       
  );
}

export default CandyCards;