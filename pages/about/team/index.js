import PropTypes from 'prop-types';

import { Article, Layout, TeamMenu } from 'components';
import { Breadcrumb, BreadcrumbArrow, BreadcrumbItem } from 'components/breadcrumbs';
import fetch from 'services/api';

const Team = ({ title, body }) => (
  <Layout title="Сотрудники">
    <div className="bg-white py-10">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem title="Радио классической музыки «Орфей»" href="/" />
          <BreadcrumbArrow />
          <BreadcrumbItem title="О нас" href="/about" />
          <BreadcrumbArrow />
        </Breadcrumb>
        <TeamMenu />
        <h1 className="py-8">{title}</h1>
        <Article rawState={body} />
      </div>
    </div>
  </Layout>
);

Team.getInitialProps = async () => fetch('/article/team');

Team.propTypes = {
  body: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Team;
