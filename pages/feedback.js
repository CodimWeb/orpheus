import { useState } from 'react';

import { Layout } from 'components';
import fetch from 'services/api';

const useFeedbackForm = (callback) => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};

const Form = () => {
  const [busy, setBusy] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const sendFeedback = async () => {
    setBusy(true);
    setErrorMessage(null);

    const response = await fetch('/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    });

    if (response.status === 201) {
      const { id } = await response.json();
      setSuccessMessage(`Ваше сообщение зарегистрировано под номером ${id}. Спасибо!`);
    } else {
      setErrorMessage('Не удалось отправить сообщение.');
    }

    setBusy(false);
  };

  const { inputs, handleInputChange, handleSubmit } = useFeedbackForm(sendFeedback);

  if (successMessage) {
    return (
      <div className="alert">
        {successMessage}
        {' '}
        <a href="#" onClick={() => setSuccessMessage(null)}>Отправить еще одно сообщение</a>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <p className="pb-4">Укажите своё имя и телефон или адрес электронной почты, если хотите, что бы мы Вам ответили.</p>
      <div className="form-group">
        <label htmlFor="feedback-name">Как к Вам обращаться?</label>
        <input
          className="form-control"
          id="feedback-name"
          name="name"
          type="text"
          placeholder="Иван Петрович"
          onChange={handleInputChange}
          value={inputs.name}
          readOnly={busy}
        />
      </div>
      <div className="form-group">
        <label htmlFor="feedback-contact">Куда вы хотите получить наш ответ?</label>
        <input
          id="feedback-contact"
          name="contact"
          type="text"
          className="form-control"
          placeholder="ivan@example.com"
          onChange={handleInputChange}
          value={inputs.contact}
          readOnly={busy}
        />
      </div>
      <div className="form-group">
        <label htmlFor="feedback-body">Что Вы хотите нам сообщить?</label>
        <textarea
          id="feedback-body"
          name="body"
          className="form-control"
          placeholder="Вы лучшие! Спасибо за то, что вы делаете."
          onChange={handleInputChange}
          value={inputs.body}
          readOnly={busy}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={busy}
      >
          Отправить
      </button>

      {errorMessage && (
      <div className="alert alert-danger">{errorMessage}</div>
      )}
    </form>
  );
};

const Privacy = () => (
  <Layout title="Обратная связь">
    <div className="container pb-12">
      <h1 className="py-8">Обратная связь</h1>
      <div className="row align-items-start">
        <div className="col-6">
          <Form />
        </div>
        <div className="col-1" />
        <div className="col-5">
          <div itemScope itemType="http://schema.org/NewsMediaOrganization">
            <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
              <ul>
                <li>Адрес для корреспонденции:</li>
                <li className="pb-2">
                  <b itemProp="addressCountry">Россия</b>
,
                  <b itemProp="postalCode">115184</b>
,
                  <b itemProp="addressLocality">Москва</b>
,
                  <b itemProp="streetAddress">ул. Пятницкая, д. 25, стр. 1</b>
                </li>
                <li>Телефон:</li>
                <li className="pb-2">
                  <a itemProp="telephone" href="tel:+74959514340"><b>(495) 951-43-40</b></a>
                </li>
                <li>Факс:</li>
                <li className="pb-2">
                  <a itemProp="faxNumber" href="fax:+74959594067"><b>(495) 959-40-67</b></a>
                </li>
                <li>Электронная почта:</li>
                <li>
                  <a itemProp="email" href="mailto:rgmc@muzcentrum.ru"><b>rgmc@muzcentrum.ru</b></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Privacy;
