import Carousel from 'react-bootstrap/Carousel';

function CandyCarousel() {

const mysteryMix = <img src={"https://bringtheheatsweets.com/cdn/shop/products/IMG_3088_1024x1024@2x.jpg?v=1599417272"} alt="Myster Mix Candy"  height="220px" width="300px"/>

const Gushers =  <img src ="https://bringtheheatsweets.com/cdn/shop/products/GushersFuego_740x.jpg?v=1599417338" alt = "Gushers Fuego" height="220px" width="300px"/>

const airheads = <img src="https://bringtheheatsweets.com/cdn/shop/products/Airheadextremesfuego_900x.jpg?v=1598902859" alt = "Airheads Fuego"  height="220px" width="300px"/>

const textColor ={color:'white'};

  return (
    <Carousel id="carousel">
      <Carousel.Item height='80px' width ='80px'>
        {Gushers}
        <Carousel.Caption>
          <h3 style = {textColor} ><strong>Gushers Fuego</strong></h3>
          <p  style= {textColor}> <strong>Gushers are our <em>absolute number one seller</em> from <br/>
     our entire inventory! You can't <em>NOT</em> try them. </strong></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item height='100px' width='80px'>
      {mysteryMix}
        <Carousel.Caption id='caption'>
          <h3 style = {textColor}><strong>Mystery Mix Fuego</strong></h3>
          <p style = {textColor}><strong>Our Mystery Mix Contains at Least 6     
          Different Types Of Candy & Is Our Second Best Seller.</strong></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item height='80px' width ="80px">
      {airheads}
        <Carousel.Caption id='caption' >
          <h3 style={textColor}><strong>Airheads Fuego</strong></h3>
          <p style= {textColor}><strong>
           Last But Definitely Not Least, We Have Our Airheads Fuego Coming In Third Place. </strong>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CandyCarousel;