import PropTypes from 'prop-types';
import cs from 'classnames';
import Link from 'next/link';

const roles = {
  top: 'Руководство',
  hosts: 'Ведущие и авторы программ',
  sounds: 'Звукорежиссёры',
};

export const getRoleTitleByAlias = (role) => roles[role];

export const TeamMenu = ({ active }) => (
  <div className="Nav Nav-dark">
    {Object.keys(roles).map((role) => (
      <span key={role} className={cs('Nav-link', 'h4', { active: role === active })}>
        <Link href="/about/team/[role]" as={`/about/team/${role}`}>
          <a>{getRoleTitleByAlias(role)}</a>
        </Link>
      </span>
    ))}
  </div>
);

TeamMenu.propTypes = {
  active: PropTypes.string,
};

TeamMenu.defaultProps = {
  active: null,
};

export default TeamMenu;
