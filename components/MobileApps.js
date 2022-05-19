import InlineSVG from 'svg-inline-react';

const AppLinks = () => (
  <div className="row mt-5">
    <div className="col mt-4">
      <a
        href="https://apps.apple.com/ru/app/%D1%80%D0%B0%D0%B4%D0%B8%D0%BE-%D0%BE%D1%80%D1%84%D0%B5%D0%B9/id1084655189"
        target="_blank"
        rel="noreferrer noopener"
        className="icon-app"
      >
        <InlineSVG src={require('../static/svg/appstore.svg')} />
      </a>
    </div>
    <div className="col mt-4">
      <a
        href="https://play.google.com/store/apps/details?id=com.gaincode.radiostream.client.android.orpheus"
        target="_blank"
        rel="noreferrer noopener"
        className="icon-app"
      >
        <InlineSVG src={require('../static/svg/gplay.svg')} />
      </a>
    </div>
  </div>
);

export default function MobileApps() {
  return (
    <section className="relative bg-dark py-12" style={{ overflow: 'hidden' }}>
      <div className="container text-light pt-7 pb-12">
        <div className="row">
          <div className="col-8">
            <h2 className="h0 mb-6">Слушайте Орфей в&nbsp;нашем приложении</h2>
            <p>
              Выдающийся канадский певец и&nbsp;композитор Джино Ваннелли.<br />
              Концерт с&nbsp;оркестром «Метрополь».
            </p>
            <AppLinks />
          </div>
        </div>
      </div>
      <img
        src="/static/backgrounds/phone-light@2x.png"
        alt="Phone sketch top"
        className="bg-phone is-top d-none d-xl-block"
      />
      <img
        src="/static/backgrounds/phone-dark@2x.png"
        alt="Phone sketch bottom"
        className="bg-phone d-none d-xl-block"
      />
    </section>
  );
}
