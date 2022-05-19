import PropTypes from 'prop-types';

const Advert = ({ banner, link, text }) => {
  const ad = banner ? <img src={banner} alt={text} /> : <>{text}</>;

  return (
    <article className="Card mb-9">
      <h5>Реклама</h5>
      {link ? <a rel="nofollow noreferrer noopener" target="_blank" href={link}>{ad}</a> : ad}
    </article>
  );
};

Advert.propTypes = {
  banner: PropTypes.string,
  link: PropTypes.string,
  text: PropTypes.string,
};

Advert.defaultProps = {
  banner: null,
  link: null,
  text: null,
};

export default Advert;
