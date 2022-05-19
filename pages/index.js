import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import {
  Layout,
  MobileApps,
  News,
  Programs,
  Promos,
  SvgIcon,
} from 'components';
import fetch from 'services/api';
import useMeasure from 'services/measure';

const Index = ({ promo, programs, news }) => {
  const {
    height,
    isSSR,
    isXL,
    width,
  } = useMeasure({ debounceTimeout: 500 });
  const showAninmations = !!(!isSSR && promo && programs && news && isXL);

  useEffect(() => {
    if (showAninmations) {
      const createIndexAnimations = require('../components/animations');
      const { resetIndexAnimations } = createIndexAnimations();
      return () => {
        resetIndexAnimations();
      };
    }
    return () => {};
  }, [showAninmations, width, height]);

  return (
    <Layout>
      <Promos items={promo} />
      <Programs items={programs} />
      {news && <News items={news.items} main={news.main} />}
      <Link href="/news">
        <a className="AllEvents" data-animate="allEventsBtn">
          <span>Все <br />события</span>
          <SvgIcon name="news" />
          <div className="AllEvents-bg1" />
          <div className="AllEvents-bg2" />
        </a>
      </Link>
      <MobileApps />
    </Layout>
  );
};

Index.getInitialProps = () => fetch('/');

Index.propTypes = {
  news: PropTypes.shape({
    items: PropTypes.array,
    main: PropTypes.object,
  }),
  programs: PropTypes.array,
  promo: PropTypes.array,
};

Index.defaultProps = {
  news: null,
  programs: null,
  promo: null,
};

export default Index;
