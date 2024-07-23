import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    const slides = [
        {
          image: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600",
          header: "SubHeader 1"
        },
        {
          image: "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=600",
          header: "Subheader 2"
        },
        {
          image: "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          header: "Subheader 3"
        }
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
    <div className="w-full">
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-full">
            <div className="flex justify-center items-center h-full">
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-10 left-10 text-white text-2xl bg-gray-500 bg-opacity-20 px-4 py-2 rounded">
              {slide.header}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
