import PropTypes from 'prop-types';
import Link from 'next/link';

const Occupations = ({ items }) => (
  <>
    {items && (
      <ul className="py-3">
        {items.map((item) => (
          <li key={item.id}>
            <Link href={`/persons?occupation=${item.alias}`}>
              <a className="btn btn-sm btn-outline-primary">{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    )}
  </>
);

Occupations.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Occupations;
