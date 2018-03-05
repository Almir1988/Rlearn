import React from 'react';
import ReactDOM from 'react-dom';
import {Carousel,} from 'react-bootstrap';
import ImageOne from './images/ProdSlideOne.png'
import ImageTwo from './images/ProductSlideTwo.png'
import ImageTree from './images/ProductSlideTree.png'

class ProductSlider extends  React.Component
{

        render()
        {
            return(

              <div>
                <Carousel>
  <Carousel.Item>
    <img width={2000} height={900} alt="900x500" src={ImageOne} />
    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={2000} height={900} alt="900x500" src={ImageTwo} />
    <Carousel.Caption>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img width={2000} height={900} alt="" src={ImageTree}/>
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 



</div>
            );
        }
      

}


export default ProductSlider;