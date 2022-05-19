import PropTypes from 'prop-types';
import InlineSVG from 'svg-inline-react';
import Link from 'next/link';

import { ProgramsList } from 'components';

const leftMenu = [
  // {
  //   title: 'Подкасты',
  //   href: '#',
  //   src: require('../static/svg/note.svg'),
  // },
  {
    title: 'Ведущие',
    href: '/about/team/[role]',
    as: '/about/team/hosts',
    src: require('../../static/svg/user.svg'),
  },
  {
    title: 'Архив программ',
    href: '/programs#archive',
    src: require('../../static/svg/clock-back.svg'),
  },
];

const Programs = ({ items }) => (
  <section className="relative bg-dark" style={{ zIndex: 1 }}>
    <div className="bg-lightAnimated" data-animate="mainBg" />
    <div className="container pt-12 pb-2">
      <div className="row align-items-start">
        <div className="col-3">
          <div data-animate="leftMenu">
            <h2 className="h1">Программы в&nbsp;эфире</h2>
            <ul className="NavList h3 mt-8 mb-12">
              {leftMenu.map(({
                title, href, as, src,
              }, i) => (
                <li key={i}>
                  <Link href={href} as={as}>
                    <a className="NavList-link mb-5">
                      <div className="NavList-img">
                        <InlineSVG src={src} />
                      </div>
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-10">
          <div data-animate="mainContent">
            <ProgramsList items={items} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

Programs.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Programs;
