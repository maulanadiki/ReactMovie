// import React from 'react'

import { Carousel } from "react-bootstrap"
import carousel1 from "../assets/logo/carousel1.jpg"
import carousel2 from "../assets/logo/caousel2.jpg"
import carousel3 from "../assets/logo/carousel3.jpg"
import carousel4 from "../assets/logo/carousel4.jpg"
import carousel5 from "../assets/logo/carousel5.jpg"
import carousel6 from "../assets/logo/carousel6.jpg"
import carousel7 from "../assets/logo/carousel7.jpg"
import carousel8 from "../assets/logo/carousel8.jpg"
import carousel9 from "../assets/logo/carousel9.jpg"

const Carousels = () => {
  return (
   <Carousel fade className="bg-primary" style={{ width: '925px' }}>
      <Carousel.Item>
        <img src={carousel1} className="d-block imgCarousel" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel2} className="d-block imgCarousel" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel3} className="d-block imgCarousel" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel4} className="d-block imgCarousel" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel5} className="d-block imgCarousel" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel6} className="d-block imgCarousel" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel7} className="d-block imgCarousel" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel8} className="d-block imgCarousel" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={carousel9} className="d-block imgCarousel" />
      </Carousel.Item>
   </Carousel>
  )
}

export default Carousels