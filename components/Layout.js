import PropTypes from 'prop-types';
import Head from 'next/head';

import { Footer } from 'components';
import { Nav } from 'components/nav';
import '../scss/app.scss';

const Layout = ({ children, title }) => (
  <>
    <Head>
      <title>
        {title && `${title} – `}
        Радио Орфей (Москва 99,2 FM)
      </title>
      <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700&display=swap&subset=cyrillic" rel="stylesheet" />
      <link rel="stylesheet" href="/static/cera-condensed-pro/stylesheet.css" />
      <meta name="theme-color" content="black" />
    </Head>
    <header>
      <Nav />
    </header>
    {children}
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

Layout.defaultProps = {
  children: null,
  title: null,
};

export default Layout;
