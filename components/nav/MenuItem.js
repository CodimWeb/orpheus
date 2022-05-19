import PropTypes from 'prop-types';
import cs from 'classnames';
import Link from 'next/link';

import { SvgIcon } from 'components';

const MenuItem = ({
  className,
  href,
  icon,
  router,
  title,
}) => (
  <Link href={href}>
    <a
      className={cs(className, {
        'Nav-link': true,
        'Nav-link--left-offset': icon,
        'd-flex': title && icon,
        active: router && router.asPath && (router.asPath.substring(0, href.length) === href),
      })}
    >
      {icon
        && <SvgIcon name={icon} />}
      {title
        && <span>{title}</span>}
    </a>
  </Link>
);

MenuItem.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  icon: PropTypes.string,
  router: PropTypes.shape({ asPath: PropTypes.string }).isRequired,
  title: PropTypes.string,
};

MenuItem.defaultProps = {
  className: '',
  icon: null,
  title: null,
};

export default MenuItem;
