import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const images = [
    'https://source.unsplash.com/random/1600x900/?nature',
    'https://source.unsplash.com/random/1600x900/?water',
    'https://source.unsplash.com/random/1600x900/?forest',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="h-screen w-full">
      <Slider {...settings} className="h-full">
        {images.map((image, index) => (
          <div key={index} className="h-full">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;

