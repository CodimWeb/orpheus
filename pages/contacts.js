import { Layout } from 'components';

const Contacts = () => (
  <Layout title="Контакты">
    <div className="bg-white pb-12">
      <div className="container">
        <h1 className="py-8">Контактная информация</h1>
        <div itemScope itemType="http://schema.org/NewsMediaOrganization">
          <p itemProp="legalName" className="pb-4">
            Федеральное государственное бюджетное учреждение по организации, производству
            и распространению музыкальных и культурно-просветительских программ
            «Российский государственный музыкальный телерадиоцентр» (ФГБУ «РГМЦ»).
          </p>
          <p className="pb-4">
            Сетевое издание «Музыкальный центр» (muzcentrum.ru) является средством массовой
            информации. Свидетельство о регистрации СМИ - ЭЛ №ФС 77-48960 от 21.03.2012 года.
            Выдано Федеральной службой по надзору за соблюдением законодательства в сфере
            массовых коммуникаций и охране культурного наследия. Учредитель - ФГБУ «РГМЦ».
          </p>
          <p className="pb-4">Главный редактор: Герасимова Ирина Анатольевна.</p>
          <ul>
            <li itemProp="address" itemScope itemType="http://schema.org/PostalAddress" className="pb-2">
              <b itemProp="addressCountry">Россия</b>,
              <b itemProp="postalCode">115184</b>,
              <b itemProp="addressLocality">Москва</b>,
              <b itemProp="streetAddress">ул. Пятницкая, д. 25, стр. 1</b>
            </li>
            <li className="pb-2">
              Телефон: <a itemProp="telephone" href="tel:+74959514340"><b>(495) 951-43-40</b></a>
            </li>
            <li className="pb-2">
              Факс: <a itemProp="faxNumber" href="fax:+74959594067"><b>(495) 959-40-67</b></a>
            </li>
            <li className="pb-2">
              Электронная почта: <a itemProp="email" href="mailto:rgmc@muzcentrum.ru"><b>rgmc@muzcentrum.ru</b></a>
            </li>
          </ul>
        </div>
        <h2 className="my-4">Пресс-служба</h2>
        <p className="pb-2">Сереженко Оксана Анатольевна – руководитель пресс-службы.</p>
        <ul>
          <li className="pb-2">Электронная почта: <a href="mailto:serejenko@muzcentrum.ru"><b>serejenko@muzcentrum.ru</b></a></li>
          <li className="pb-2">Телефон: <a href="tel:+74959591508"><b>(495) 959-15-08</b></a></li>
        </ul>

        {/*
          Не нашел простого способа внедрить живую карту Яндекса без подключения тяжелых библиотек.
          По хорошему, нужна классическая карта с минимальным набором инструментов
          (увеличение/уменьшение). Можно еще переключение стилей, но больше ничего не нужно.
        */}
        <img src="https://static-maps.yandex.ru/1.x/?pt=37.630769,55.741764,pm2rdm&amp;z=17&amp;l=map" alt="Карта" />
      </div>
    </div>
  </Layout>
);

export default Contacts;
