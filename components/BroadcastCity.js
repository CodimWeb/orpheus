import PropTypes from 'prop-types';

const BroadcastCity = ({ name, freq, kw }) => (
  <div className="d-flex align-items-center my-5">
    <h2 className="h2-a">{name}</h2>
    <div className="flex-fill" />
    <div className="h3-a">
      <span>{freq}</span>
      <span className="d-none d-sm-block text-muted ml-4">{kw}</span>
    </div>
  </div>
);

BroadcastCity.propTypes = {
  name: PropTypes.string.isRequired,
  freq: PropTypes.string.isRequired,
  kw: PropTypes.string.isRequired,
};

export default BroadcastCity;
