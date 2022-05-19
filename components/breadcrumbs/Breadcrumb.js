import PropTypes from 'prop-types';

const Breadcrumb = ({ children }) => (
  <div className="Nav Nav-breadcrumbs Nav-dark mb-6">
    {children}
  </div>
);

Breadcrumb.propTypes = {
  children: PropTypes.node,
};

Breadcrumb.defaultProps = {
  children: null,
};

export default Breadcrumb;
