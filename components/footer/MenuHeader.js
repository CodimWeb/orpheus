import PropTypes from 'prop-types';

const MenuHeader = ({ title }) => (
  <li className="Footer-link">
    <header className="small text-muted">{title}</header>
  </li>
);

MenuHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MenuHeader;
