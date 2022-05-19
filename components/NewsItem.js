import PropTypes from 'prop-types';
import cs from 'classnames';
import Link from 'next/link';

const NewsItem = ({ active, alias, title }) => (
  <li className={cs('Nav-link', 'h4', { active })}>
    {active ? title : (
      <Link href="/news/[type]" as={`/news/${alias}`}>
        <a>{title}</a>
      </Link>
    )}
  </li>
);

NewsItem.propTypes = {
  active: PropTypes.bool.isRequired,
  alias: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NewsItem;
