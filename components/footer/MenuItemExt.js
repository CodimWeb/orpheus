import PropTypes from 'prop-types';

const MenuItemExt = ({ href, title }) => (
  <li className="Footer-link">
    <a href={href} target="_blank" rel="noopener noreferrer">{title}</a>
  </li>
);

MenuItemExt.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MenuItemExt;
