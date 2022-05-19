import PropTypes from 'prop-types';
import InlineSVG from 'svg-inline-react';

const icons = {
  appstore: require('../static/svg/appstore.svg'),
  'arrow-left-white': require('../static/svg/arrow-left-white.svg'),
  'arrow-left': require('../static/svg/arrow-left.svg'),
  'arrow-right': require('../static/svg/arrow-right.svg'),
  book: require('../static/svg/book.svg'),
  callback: require('../static/svg/callback.svg'),
  'clock-back': require('../static/svg/clock-back.svg'),
  'close-big-ico': require('../static/svg/close-big-ico.svg'),
  fb: require('../static/svg/fb.svg'),
  gplay: require('../static/svg/gplay.svg'),
  'help-ico': require('../static/svg/help-ico.svg'),
  list: require('../static/svg/list.svg'),
  menu: require('../static/svg/menu.svg'),
  news: require('../static/svg/news.svg'),
  note: require('../static/svg/note.svg'),
  play: require('../static/svg/play.svg'),
  'quotes-left': require('../static/svg/quotes-left.svg'),
  'quotes-right': require('../static/svg/quotes-right.svg'),
  review: require('../static/svg/review.svg'),
  'right-arrow': require('../static/svg/right-arrow.svg'),
  search: require('../static/svg/search.svg'),
  twi: require('../static/svg/twi.svg'),
  user: require('../static/svg/user.svg'),
  vk: require('../static/svg/vk.svg'),
  vol: require('../static/svg/vol.svg'),
};

const SvgIcon = ({ name, ...props }) => <InlineSVG src={icons[name]} {...props} />;

SvgIcon.propTypes = {
  name: PropTypes.oneOf([
    'appstore',
    'arrow-left-white',
    'arrow-left',
    'arrow-right',
    'book',
    'callback',
    'clock-back',
    'close-big-ico',
    'fb',
    'gplay',
    'help-ico',
    'list',
    'menu',
    'news',
    'note',
    'play',
    'quotes-left',
    'quotes-right',
    'review',
    'right-arrow',
    'search',
    'twi',
    'user',
    'vk',
    'vol',
  ]).isRequired,
};

export default SvgIcon;
