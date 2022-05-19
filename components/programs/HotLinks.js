import Link from 'next/link';

const HotLinks = () => (
  <ul className="Nav Nav-dark Nav--sm-vertical mt-7">
    <li className="Nav-link h4">
      <a href="#archive">Архив программ</a>
    </li>
    <li className="Nav-link h4">
      <Link href="/about/team/[role]" as="/about/team/hosts">
        <a>Ведущие</a>
      </Link>
    </li>
    {/*
    <li className="Nav-link h4">
      <Link href="/about/team/[role]" as="/about/team/sounds">
        <a>Звукорежиссёры Орфея</a>
      </Link>
    </li>
    <li className="Nav-link h4">
      <Link href="/feedback">
        <a>Оставить отзыв/пожелание</a>
      </Link>
    </li>
    */}
  </ul>
);

export default HotLinks;
