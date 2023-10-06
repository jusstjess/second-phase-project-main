import Carousel from 'react-bootstrap/Carousel';

function CandyCarousel() {

const mysteryMix = <img src={"https://bringtheheatsweets.com/cdn/shop/products/IMG_3088_1024x1024@2x.jpg?v=1599417272"} alt="Myster Mix Candy"  height="400px" width="600px"/>

const Gushers =  <img src ="https://bringtheheatsweets.com/cdn/shop/products/GushersFuego_740x.jpg?v=1599417338" alt = "Gushers Fuego" height="400px" width="600px"/>

const airheads = <img src="https://bringtheheatsweets.com/cdn/shop/products/Airheadextremesfuego_900x.jpg?v=1598902859" alt = "Airheads Fuego"  height="400px" width="600px"/>

const textColor ={color:'white'};

  return (
    <Carousel fade>
      <Carousel.Item height='100px' width ='100px'>
        {Gushers}
        <Carousel.Caption>
          <h1 style = {textColor} >Gushers Fuego</h1>
          <p  style= {textColor}> <strong>Gushers are our <em>absolute number one seller</em> from <br/>
     our entire inventory! You can't <em>NOT</em> try them. </strong></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      {mysteryMix}
        <Carousel.Caption height='100px' width='100px'>
          <h1 style = {textColor}>Mystery Mix Fuego</h1>
          <p style = {textColor}><strong>Our Mystery Mix Contains at Least 6     
          Different Types Of Candy & Is Our Second Best Seller.</strong></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      {airheads}
        <Carousel.Caption height='100px' width ="100px">
          <h1 style={textColor}>Airheads Fuego</h1>
          <p style= {textColor}><strong>
           Last But Definitely Not Least, We Have Our Airheads Fuego Coming In Third Place. </strong>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CandyCarousel;