import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

const SSR_WIDTH = 1200;
const SSR_HEIGHT = 800;
const XL_SCREEN_SIZE = 1290; // see _variables.scss

const useMeasure = ({ debounceTimeout = null } = {}) => {
  const isSSR = typeof window === 'undefined';
  const [width, setWidth] = useState(isSSR ? SSR_WIDTH : window.innerWidth);
  const [height, setHeight] = useState(isSSR ? SSR_HEIGHT : window.innerHeight);
  const isXL = width >= XL_SCREEN_SIZE;

  useEffect(() => {
    if (!isSSR) {
      let resizeHandler = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      };
      if (debounceTimeout) {
        resizeHandler = debounce(resizeHandler, debounceTimeout);
      }
      window.addEventListener('resize', resizeHandler);
      return () => {
        window.addEventListener('resize', resizeHandler);
      };
    }
    return () => {};
  }, [debounceTimeout, isSSR]);

  return {
    height,
    isSSR,
    isXL,
    width,
  };
};

export default useMeasure;
