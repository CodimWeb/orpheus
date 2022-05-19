import { useState } from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

import { Image, TagCloud, TopNav } from 'components';
import Slider from './Slider';
import SliderItem from './SliderItem';
import PromoMenu from './Menu';

const Promos = ({ items }) => {
  const [hovered, setHovered] = useState(false);
  const [imageSrc, setImage] = useState(items[0] ? items[0].cover : null);

  if (!items || !items.length) {
    return (
      <div className="Promo bg-dark">
        <TopNav />
        <div className="container text-light">
          <h1 className="h0 text-center" style={{ fontWeight: 500, marginTop: '20%' }}>Радио «Орфей»</h1>
          <PromoMenu />
        </div>
      </div>
    );
  }

  const item = items[0];
  const sliderItems = [];
  // массив картинок привязанных к слайдам
  const imgArr = [];
  items.forEach((i) => {
    imgArr.push(i.cover);
  });

  for (let i = 0; i < items.length; i += 1) {
    if (i === 5) {
      break;
    }

    sliderItems.push(
      <SliderItem
        title={items[i].title}
        anons={items[i].anons}
        tags={items[i].tags}
        url={items[i].url}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        key={i}
      />,
    );
  }

  // TODO: add carousel
  return (
    <div className="Promo bg-dark">
      <div className={cs('Promo-circles', hovered && 'are-enlarged')}>
        <div className="Promo-circle Promo-circle--lg" />
        <div className="Promo-circle Promo-circle--md" />
        <div className="Promo-circle Promo-circle--sm" />
        <div className="Promo-circle Promo-circle--xs">
          <Image
            className="img-cover"
            title={item.title}
            {...imageSrc}
          />
        </div>
      </div>
      <TopNav />
      <div className="container">
        {items.length === 1 ? (
          <div className="row">
            <div className="col-2" />
            <div className="col-12">
              <div className="text-light">
                <a
                  href={item.url}
                  target="_blank"
                  className="h0"
                  style={{ fontWeight: 500 }}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  {item.title}
                </a>
                <div className="row">
                  <div className="col-9">
                    <div className="h4 mt-4 mb-6">
                      <span className="text-sans-serif font-weight-light">{item.anons}</span>
                    </div>
                  </div>
                </div>
                <TagCloud items={item.tags} className="btn btn-black" />
              </div>
            </div>
          </div>
        ) : (
          <Slider imgArr={imgArr} onSlide={(img) => setImage(img)}>
            {sliderItems}
          </Slider>
        )}
        <PromoMenu />
      </div>
    </div>
  );
};

Promos.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    anons: PropTypes.string,
    cover: PropTypes.object,
    tags: PropTypes.array,
    title: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
};

export default Promos;
