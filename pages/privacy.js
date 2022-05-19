import PropTypes from 'prop-types';

import { Article, Layout } from 'components';
import fetch from 'services/api';

const Privacy = ({ title, body }) => (
  <Layout title={title}>
    <div className="container pb-12">
      <h1 className="py-8">{title}</h1>
      <Article rawState={body} />
    </div>
  </Layout>
);

Privacy.getInitialProps = async () => fetch('/article/privacy');

Privacy.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.object.isRequired,
};

export default Privacy;
