
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./slide.module.css"; // Import the CSS module
import images from "../../public/urls.json"
// Base URL for images


function Fade() {
  const settings = {
    dots: false, // Show dots for navigation
    fade: true, // Enable fade transition
    infinite: true, // Infinite loop
    speed: 600, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay interval (3 seconds)
    waitForAnimate: false, // Don't wait for animation to finish
    arrows: false, // Hide navigation arrows
  };

  
 
  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img style={{height:"30vh",width:"100%"}}src={image} alt={`Abstract ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Fade;