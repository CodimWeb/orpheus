import { AboutMenuItem } from 'components';

const AboutMenu = () => (
  <div className="Nav Nav--about d-none d-lg-flex d-xl-flex align-items-center">
    <AboutMenuItem title="Города вещания" href="/about/broadcast" />
    <AboutMenuItem title="Компания" href="/about/rgmc" />
    <AboutMenuItem title="Сотрудники" href="/about/team/[role]" as="/about/team/hosts" />
    <AboutMenuItem title="Партнёры" href="/about/partners" />
    <div className="flex-fill" />
    <AboutMenuItem title="Обратная связь" href="/feedback" src={require('../static/svg/news.svg')} />
  </div>
);

export default AboutMenu;
