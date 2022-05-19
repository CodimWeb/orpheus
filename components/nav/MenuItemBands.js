import cs from 'classnames';
import PropTypes from 'prop-types';

const MenuItemBands = ({ className }) => (
  <a
    href="http://muzcentrum.ru/producercenter/bands"
    className={cs('Nav-link', className)}
    rel="noopener noreferrer"
    target="_blank"
  >
    Оркестры и хоры радио
  </a>
);

MenuItemBands.propTypes = {
  className: PropTypes.string,
};

MenuItemBands.defaultProps = {
  className: 'd-flex',
};

export default MenuItemBands;
