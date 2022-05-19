import PropTypes from 'prop-types';

import { Layout, SpecialItem } from 'components';
import fetch from 'services/api';

const Special = ({ items }) => (
  <Layout title="Спецпроекты">
    <div className="container">
      <h1 className="my-8">Специальные проекты радио «Орфей»</h1>
      <div className="row align-items-start justify-content-between">
        {items && items.map((item) => <SpecialItem key={item.id} {...item} />)}
      </div>
    </div>
  </Layout>
);

Special.getInitialProps = async () => {
  const items = await fetch('/specials');
  return {
    items,
  };
};

Special.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Special;
