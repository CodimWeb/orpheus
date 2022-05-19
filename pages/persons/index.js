import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  compileUrl,
  Layout,
  Pagination,
} from 'components';
import {
  AlphabeticalIndex,
  OccupationIndex,
  PersonsList,
  SearchForm,
} from 'components/persons';
import fetch from 'services/api';

const Persons = ({
  letter,
  letterStat,
  occupation,
  occupationsList,
  page,
  pageCount,
  persons,
  term: initTerm,
}) => {
  const [term, setTerm] = useState(initTerm);
  useEffect(() => {
    setTerm(initTerm);
  }, [initTerm]);

  const urlGenerator = (config = {}) => {
    const query = {};

    if (config.term) {
      query.term = config.term;
    } else if (term && config.term !== null) {
      query.term = term;
    }

    if (config.letter) {
      query.letter = config.letter;
    } else if (letter && config.letter !== null) {
      query.letter = letter;
    }

    if (config.occupation) {
      query.occupation = config.occupation;
    } else if (occupation && config.occupation !== null) {
      query.occupation = occupation;
    }

    return { pathname: '/persons', query };
  };

  return (
    <Layout title="Энциклопедия персон">
      <section className="container">
        <h1 className="py-8">Энциклопедия персон</h1>
        <SearchForm
          term={term}
          setTerm={setTerm}
          urlGen={urlGenerator}
        />
        <AlphabeticalIndex
          alphabet={[...'АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ']}
          letterStat={letterStat}
          selected={letter}
          urlGen={urlGenerator}
          className="mt-4 mb-3"
        />
        <OccupationIndex
          list={occupationsList}
          selected={occupation}
          urlGen={urlGenerator}
          className="mt-3 mb-4"
        />
        <PersonsList
          items={persons}
          page={page}
          className="py-3"
        />
        <Pagination
          page={page}
          count={pageCount}
          route={urlGenerator()}
        />
      </section>
    </Layout>
  );
};

Persons.getInitialProps = async (context) => {
  const {
    term, letter, occupation, page,
  } = context.query;
  const data = await fetch(compileUrl('/persons', {
    term, letter, occupation, page,
  }));
  return {
    term,
    letter,
    occupation,
    page,
    pageCount: data.pageCount,
    persons: data.persons,
    letterStat: data.letterStat,
    occupationsList: data.occupationsList,
  };
};

Persons.propTypes = {
  letter: PropTypes.string.isRequired,
  letterStat: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  occupationsList: PropTypes.arrayOf(PropTypes.shape).isRequired,
  page: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  persons: PropTypes.string.isRequired,
  term: PropTypes.string.isRequired,
};

export default Persons;
