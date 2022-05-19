import PropTypes from 'prop-types';
import cs from 'classnames';
import InlineSVG from 'svg-inline-react';
import Link from 'next/link';

const MenuItemSVG = ({
  href,
  isWide,
  src,
  title,
}) => (
  <li className={cs('Footer-link', { 'Footer-link--widerImg': isWide })}>
    <Link href={href}>
      <a>
        <InlineSVG src={src} />
        {title}
      </a>
    </Link>
  </li>
);

MenuItemSVG.propTypes = {
  href: PropTypes.string.isRequired,
  isWide: PropTypes.bool,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

MenuItemSVG.defaultProps = {
  isWide: false,
};

export default MenuItemSVG;
