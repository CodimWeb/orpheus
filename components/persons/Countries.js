import PropTypes from 'prop-types';

const Countries = ({ items }) => (
  <>
    {items && (
      <ul className="py-3">
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    )}
  </>
);

Countries.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Countries;
