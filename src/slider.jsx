import React from 'react';
import ReactDOM from 'react-dom';
import {Carousel,} from 'react-bootstrap';
import Imageone from './src/Images/imageone.jpg'
import Imagetwo from './src/Images/imagetwo.jpg'
import Imagetree from './src/Images/imagetree.jpg'

class Slider extends  React.Component
{

        render()
        {
            return(
<div class="container">
                <Carousel>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src={Imageone} />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src={Imagetwo} />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src={Imagetree} />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>
            );
        }
      

}


export default Slider;