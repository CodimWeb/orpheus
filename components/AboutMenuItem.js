import PropTypes from 'prop-types';

import cs from 'classnames';
import InlineSVG from 'svg-inline-react';
import Link from 'next/link';

const AboutMenuItem = ({
  as,
  href,
  src,
  title,
}) => (
  <Link href={href} as={as}>
    <a
      className={cs({
        'Nav-link h3': true,
        'd-flex': src,
      })}
    >
      {src && <InlineSVG src={src} />}
      <span>{title}</span>
    </a>
  </Link>
);

AboutMenuItem.propTypes = {
  as: PropTypes.string,
  href: PropTypes.string.isRequired,
  src: PropTypes.string,
  title: PropTypes.string.isRequired,
};

AboutMenuItem.defaultProps = {
  as: null,
  src: null,
};

export default AboutMenuItem;
