import PropTypes from 'prop-types';

import Article from 'components/Article';
import Layout from 'components/Layout';
import { Breadcrumb, BreadcrumbArrow, BreadcrumbItem } from 'components/breadcrumbs';
import fetch from 'services/api';

const Rgmc = ({ title, body }) => (
  <Layout title="РГМЦ">
    <div className="bg-white">
      <div className="container pt-8 pb-12">
        <Breadcrumb>
          <BreadcrumbItem title="Радио классической музыки «Орфей»" href="/" />
          <BreadcrumbArrow />
          <BreadcrumbItem title="О нас" href="/about" />
          <BreadcrumbArrow />
        </Breadcrumb>
        <h1 className="pt-4 pb-7">{title}</h1>
        <Article rawState={body} />
      </div>
    </div>
  </Layout>
);

Rgmc.getInitialProps = async () => fetch('/article/rgmc');

Rgmc.propTypes = {
  body: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Rgmc;
