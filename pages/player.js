import PropTypes from 'prop-types';

import { Layout } from 'components';

const PlayerPage = ({ content }) => (
  <Layout>
    {content}
  </Layout>
);

PlayerPage.propTypes = {
  content: PropTypes.string,
};

PlayerPage.defaultProps = {
  content: null,
};

PlayerPage.getInitialProps = () => ({
  content: null, // чтобы не было ворнинга
});

export default PlayerPage;
