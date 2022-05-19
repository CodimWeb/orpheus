import React from 'react';
import PropTypes from 'prop-types';
import ReactSlider from 'react-slick';

const Slider = ({ children, onSlide, imgArr }) => {
  const settings = {
    draggable: false,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 50,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    pauseOnDotsHover: false,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 6000,
    customPaging: (index) => (
      <button type="button">
        {`0${index + 1}`}
        <div className="circle__box">
          <div className="circle__wrapper circle__wrapper--right">
            <div className="circle__whole circle__right" />
          </div>
          <div className="circle__wrapper circle__wrapper--left">
            <div className="circle__whole circle__left" />
          </div>
        </div>
      </button>
    ),
    afterChange: (index) => {
      onSlide(imgArr[index]);
    },
  };

  return (
    <div className="Promo-slider">
      <ReactSlider {...settings}>
        {children}
      </ReactSlider>
    </div>
  );
};

Slider.propTypes = {
  children: PropTypes.node,
  onSlide: PropTypes.func.isRequired,
  imgArr: PropTypes.array.isRequired,
};

Slider.defaultProps = {
  children: null,
};

export default Slider;
