/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable no-mixed-operators */

import { TweenLite } from 'gsap';

// Using ScrollMagic and GSAP. Take a look first at:
// - Understanding ScrollMagic    https://www.youtube.com/watch?v=BYXPbxxPIXM
// - ScrollMagic docs             http://scrollmagic.io/docs/
// - GSAP docs                    https://greensock.com/docs
// - GSAP cheatsheet              https://ihatetomatoes.net/wp-content/uploads/2016/07/GreenSock-Cheatsheet-4.pdf

const ScrollMagic = require('scrollmagic');
require('imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');

// Initialize ScrollMagic
let SCROLL_MAGIC_CONTROLLER = new ScrollMagic.Controller();

/**
 * Index main on-scroll animations
 */
function createIndexAnimations() {
  const nav = document.querySelector('[data-animate=nav]');
  nav.className += ' is-transparent';
  animate({
    element: nav,
    options: {
      duration: window.innerHeight * 1 / 3,
      offset: window.innerHeight * 2 / 3 - 300,
    },
    props: {
      opacity: 1,
    },
  });

  const html = document.querySelector('html');
  const showHideNav = () => {
    if (html.scrollTop <= 82) {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'block';
    }
  };
  window.addEventListener('scroll', showHideNav);
  showHideNav();

  const firstContentOffsetTop = 80;

  const mainContent = document.querySelector('[data-animate=mainContent]');
  if (!mainContent) {
    return {
      resetIndexAnimations() {
        window.removeEventListener('scroll', showHideNav);
      },
    };
  }
  const {
    height: mainContentHeight,
    top: mainContentTop,
  } = mainContent.getBoundingClientRect();
  animate({
    element: mainContent,
    options: {
      duration: 500,
      offset: window.innerHeight * 1 / 3 - 196,
    },
    props: {
      opacity: 1,
      y: -1 * firstContentOffsetTop,
    },
  });
  animate({
    element: mainContent,
    options: {
      duration: 539, // sync with left menu
      offset: mainContentHeight,
    },
    pin: {
      pushFollowers: false,
    },
  });

  const leftMenu = document.querySelector('[data-animate=leftMenu]');
  const { height: leftMenuHeight } = leftMenu.getBoundingClientRect();

  leftMenu.style.marginTop = '-50px';

  animate({
    element: leftMenu,
    options: {
      duration: mainContentHeight,
      offset: mainContentTop + window.scrollY - (leftMenuHeight / 2) - firstContentOffsetTop,
    },
    pin: {
      pushFollowers: false,
    },
  });
  animate({
    element: leftMenu,
    options: {
      duration: window.innerHeight * 2 / 3,
      offset: 0,
    },
    props: {
      y: -1 * firstContentOffsetTop + 50,
    },
  });

  const mainBg = document.querySelector('[data-animate=mainBg]');
  animate({
    element: mainBg,
    options: {
      duration: window.innerHeight * 2 / 3,
      offset: 0,
    },
    props: {
      scale: 1.12,
      x: -40,
      y: 20,
    },
  });

  const mainEvents = document.querySelector('[data-animate=mainEvents]');
  mainEvents.style.transform = `translateY(${window.innerHeight + 68}px)`;
  animate({
    element: mainEvents,
    options: {
      duration: mainContentHeight + window.innerHeight - 50,
      offset: 0,
    },
    pin: {
      pushFollowers: false,
    },
  });
  animate({
    element: mainEvents,
    options: {
      duration: window.innerHeight,
      offset: mainContentHeight,
    },
    props: {
      y: 182,
    },
  });

  const eventsContent = document.querySelector('[data-animate=eventsContent]');
  animate({
    element: eventsContent,
    options: {
      duration: window.innerHeight,
      offset: mainContentHeight,
    },
    props: {
      y: 200,
    },
  });
  animate({
    element: eventsContent,
    options: {
      duration: window.innerHeight,
      offset: 0,
    },
    props: {
      x: 0,
    },
  });

  const allEventsBtn = document.querySelector('[data-animate=allEventsBtn]');
  animate({
    element: allEventsBtn.querySelector('.AllEvents-bg1'),
    options: {
      duration: window.innerHeight,
      offset: 0,
    },
    props: {
      opacity: 1,
    },
  });
  animate({
    element: allEventsBtn.querySelector('.AllEvents-bg2'),
    options: {
      duration: window.innerHeight,
      offset: 0,
    },
    props: {
      opacity: 0,
    },
  });
  const pinAllEventsBtn = () => {
    if (html.scrollTop < mainContentHeight) {
      if (!allEventsBtn.classList.contains('is-fixed')) {
        allEventsBtn.classList.add('is-fixed');
      }
    } else if (allEventsBtn.classList.contains('is-fixed')) {
      allEventsBtn.classList.remove('is-fixed');
    }
  };
  window.addEventListener('scroll', pinAllEventsBtn);
  pinAllEventsBtn();

  const eventsBg = document.querySelector('[data-animate=eventsBg]');
  animate({
    element: eventsBg,
    options: {
      duration: 650,
      offset: 0,
    },
    props: {
      x: 0,
      opacity: 1,
    },
  });
  animate({
    element: eventsBg,
    options: {
      duration: 650,
      offset: mainContentHeight,
    },
    props: {
      scale: 1.12,
      x: -1 * window.innerWidth / 2,
    },
  });

  return {
    resetIndexAnimations() {
      window.removeEventListener('scroll', showHideNav);
      window.removeEventListener('scroll', pinAllEventsBtn);
      SCROLL_MAGIC_CONTROLLER.destroy(true);
      SCROLL_MAGIC_CONTROLLER = new ScrollMagic.Controller();
      [
        document.querySelector('[data-animate=mainContent]'),
        document.querySelector('[data-animate=leftMenu]'),
        document.querySelector('[data-animate=mainBg]'),
        document.querySelector('[data-animate=mainEvents]'),
        document.querySelector('[data-animate=eventsContent]'),
        document.querySelector('[data-animate=eventsBg]'),
      ].forEach((el) => {
        if (el) {
          el.style.removeProperty('opacity');
          el.style.removeProperty('transform');
          el.style.removeProperty('-webkit-transform');
        }
      });
    },
  };
}

/**
 * Create ScrollMagic.Scene from animation description
 */
function animate(animation) {
  if (animation.props) {
    return new ScrollMagic.Scene(animation.options)
      .setTween(
        TweenLite.to(animation.element, 1,
          animation.props),
      )
      .addTo(SCROLL_MAGIC_CONTROLLER);
  }
  if (animation.pin) {
    return new ScrollMagic.Scene(animation.options)
      .setPin(animation.element, animation.pin)
      .addTo(SCROLL_MAGIC_CONTROLLER);
  }
  return null;
}

module.exports = createIndexAnimations;
