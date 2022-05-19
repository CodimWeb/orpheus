import PropTypes from 'prop-types';

import { Layout } from 'components';

const NotFound = () => (
  <div className="container">
    <div className="center my-12">
      <h1 className="my-5">Страница не найдена</h1>
      <p>Воспользуйтесь поиском.</p>
    </div>
  </div>
);

const UnknownError = ({ code }) => (
  <div className="container">
    <div className="center my-12">
      <h1 className="my-5">Ошибка № {code}</h1>
      <p>Что-то сломалось... Мы обязательно скоро починим.</p>
    </div>
  </div>
);

UnknownError.propTypes = {
  code: PropTypes.number.isRequired,
};

const Error = ({ code }) => {
  let placeholder;
  switch (code) {
    case 404:
    case 400:
      placeholder = <NotFound />;
      break;
    default:
      placeholder = <UnknownError code={code} />;
      break;
  }

  return <Layout>{placeholder}</Layout>;
};

Error.getInitialProps = ({ res, err }) => {
  let code = null;
  if (res) {
    code = res.statusCode;
  } else if (err) {
    code = err.statusCode;
  }
  return { code };
};

Error.propTypes = {
  code: PropTypes.number.isRequired,
};

export default Error;
