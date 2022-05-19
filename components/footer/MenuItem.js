import PropTypes from 'prop-types';
import Link from 'next/link';

const MenuItem = ({ href, title }) => (
  <li className="Footer-link">
    <Link href={href}><a>{title}</a></Link>
  </li>
);

MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MenuItem;
