import {
  // Copyright,
  CopyrightDate,
  MenuHeader,
  MenuItem,
  MenuItemExt,
  MenuItemSVG,
  Social,
} from 'components/footer';

const Footer = () => (
  <footer className="Footer pt-8 pb-7">
    <div className="container">
      <div className="row align-items-start">
        <div className="col-3">
          <ul className="Footer-column">
            <MenuHeader title="Правовая информация" />
            {/* <MenuItem title="Условия использования сайта" href="/term" /> */}
            {/* <MenuItem title="Политика конфиденциальности" href="/privacy" /> */}
            <MenuItem title="Контактная информация" href="/contacts" />
          </ul>
        </div>
        <div className="col-1 d-none d-md-block" />
        <div className="col-3">
          <ul className="Footer-column">
            <MenuHeader title="Радио Орфей" />
            <MenuItem title="Сетка вещания" href="/schedule" />
            <MenuItem title="Программы в эфире" href="/programs" />
            <MenuItem title="События" href="/news" />
            <MenuItem title="Города вещания" href="/about/broadcast" />
            <MenuItem title="Энциклопедия персон" href="/persons" />
          </ul>
        </div>
        <div className="col-3">
          <ul className="Footer-column">
            <MenuHeader title="Партнёры" />
            <MenuItemExt title="ICMA" href="https://www.icma-info.com/" />
            <MenuItemExt title="Европейский вещательный союз (EBU)" href="https://www.ebu.ch/" />
            <MenuItemExt title="РБА" href="http://www.rba.ru/" />
            <MenuItemExt title="Фонотрон" href="http://www.fonotron.ru/" />
          </ul>
        </div>
        <div className="col-1 d-none d-md-flex d-lg-none d-xl-flex" />
        <div className="col-3">
          <ul className="Footer-column is-withoutTitle">
            <MenuItemSVG isWide title="Оставить отзыв или пожелание" src={require('../../static/svg/review.svg')} href="/feedback" />
            <MenuItemSVG isWide title="Сообщить об ошибке" src={require('../../static/svg/callback.svg')} href="/feedback" />
          </ul>
        </div>
        <div className="col-1 d-xl-none" />
        <div className="col d-none d-lg-flex d-xl-none align-items-center mt-10">
          <Social />
        </div>
      </div>
      <div className="row d-none d-xl-flex mt-12">
        <div className="col-9 d-flex">
          <div className="Footer-age">6+</div>
          <div className="small text-muted">
            {/* <Copyright /> */}
          </div>
        </div>
        <div className="col flex-fill align-items-center">
          <Social />
        </div>
        <div className="col">
          <div className="small text-muted">
            <br /><CopyrightDate />
          </div>
        </div>
      </div>
      <div className="row d-xl-none">
        <div className="col d-lg-none align-items-center mt-12">
          <Social />
        </div>
      </div>
      <div className="row d-xl-none">
        <div className="col small text-muted mt-7">
          {/* <Copyright /> */}
        </div>
      </div>
      <div className="row d-xl-none align-items-end mt-4">
        <div className="col Footer-age flex-fill">6+</div>
        <div className="col small text-muted"><CopyrightDate /></div>
      </div>
    </div>
  </footer>
);

export default Footer;
