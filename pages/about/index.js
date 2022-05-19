import PropTypes from 'prop-types';

import { AboutMenu } from 'components';
import Article from 'components/Article';
import Layout from 'components/Layout';
import fetch from 'services/api';

const About = ({ title, body }) => (
  <Layout title="О нас">
    <div className="bg-black bg-about">
      <div className="text-white pt-8 pb-12">
        <div className="container">
          <AboutMenu />
          <div className="row">
            <div className="col-7">
              <h1 className="h3-a d-lg-none d-xl-none">О радиостанции</h1>
              <div className="d-md-none d-lg-none d-xl-none">
                <img src="/static/backgrounds/orpheus.jpg" alt="Logo as a background" style={{ maxWidth: '100%' }} />
              </div>
              <p className="h0 d-none d-lg-block d-xl-block mt-8 mb-8">{title}</p>
              <Article rawState={body} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

About.getInitialProps = async () => fetch('/article/about');

About.propTypes = {
  body: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default About;
