import Link from 'next/link';

const MainLogo = () => (
  <Link href="/">
    <a className="Nav-logo">
      <img src="/static/logo-min@3x.png" alt="Радио Орфей" />
    </a>
  </Link>
);

export default MainLogo;
