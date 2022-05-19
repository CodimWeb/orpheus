import PropTypes from 'prop-types';

import fetch from 'services/api';
import { Layout, ProgramsList } from 'components';
import { ArchiveProgramsList, HotLinks } from 'components/programs';

const ProgramsIndex = ({ items, archive }) => (
  <Layout title="Программы">
    <section className="container">
      <HotLinks />
      <h1 className="py-8">Программы</h1>
      <ProgramsList items={items} />
    </section>
    <section className="bg-light pt-10" id="archive">
      <div className="container pt-12 pb-2">
        <h2 className="h1 mb-12">Архив программ</h2>
        <ArchiveProgramsList items={archive} />
      </div>
    </section>
  </Layout>
);

ProgramsIndex.getInitialProps = async () => fetch('/programs');

ProgramsIndex.propTypes = {
  archive: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  items: PropTypes.array.isRequired,
};

export default ProgramsIndex;
