import { useCallback } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

const SearchForm = ({ term, setTerm, urlGen }) => {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    Router.push(urlGen());
  }, [urlGen]);

  const onChange = useCallback((e) => {
    setTerm(e.target.value);
  }, [setTerm]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          value={term}
          onChange={onChange}
          className="form-control"
        />
        <div className="input-group-append">
          <input
            type="submit"
            value="Найти"
            className="btn btn-primary"
          />
        </div>
      </div>
    </form>
  );
};

SearchForm.propTypes = {
  term: PropTypes.string,
  setTerm: PropTypes.func.isRequired,
  urlGen: PropTypes.func.isRequired,
};

SearchForm.defaultProps = {
  term: '',
};

export default SearchForm;
