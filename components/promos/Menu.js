import Link from 'next/link';
import { MenuItemBands } from 'components/nav';

const Menu = () => (
  <div className="Nav Nav-white d-flex" style={{ width: '100%' }}>
    {[
      { title: 'Сетка вещания', href: '/schedule' },
      { title: 'Программы', href: '/programs' },
      { title: 'События', href: '/news' },
      { title: 'Спецпроекты', href: '/special' },
      { title: 'О нас', href: '/about' },
    ].map(({ title, href }) => (
      <Link href={href} key={href}>
        <a className="Nav-link h4">{title}</a>
      </Link>
    ))}
    <MenuItemBands className="h4" />
    <div className="flex-1" />
    <Link href="/persons">
      <a className="Nav-link h4">
        <span style={{ position: 'relative', zIndex: 1 }}>Энциклопедия персон</span>
        <img
          className="Promo-person"
          src="/static/images/img-person@2x.png"
          alt="Энциклопедия персон"
        />
      </a>
    </Link>
  </div>
);

export default Menu;
