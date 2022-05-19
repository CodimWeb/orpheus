import PropTypes from 'prop-types';

import { Article, Layout } from 'components';
import fetch from 'services/api';

const Term = ({ title, body }) => (
  <Layout title={title}>
    <div className="container pb-12">
      <h1 className="py-8">{title}</h1>
      <Article rawState={body} />
    </div>
  </Layout>
);

Term.getInitialProps = async () => fetch('/article/term');

Term.propTypes = {
  body: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Term;
