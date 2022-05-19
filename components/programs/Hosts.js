import Link from 'next/link';
import PropTypes from 'prop-types';

const Hosts = ({ hosts }) => (hosts ? (
  <ul className="list-headers">
    {hosts.map((host) => (
      <li key={host.id} className="mt-2">
        {host.alias ? (
          <Link
            href="/about/team/[role]/[alias]"
            as={`/about/team/hosts/${host.alias}`}
          >
            <a>{host.title}</a>
          </Link>
        ) : host.title}
      </li>
    ))}
  </ul>
) : null);

Hosts.propTypes = {
  hosts: PropTypes.array,
};

Hosts.defaultProps = {
  hosts: null,
};

export default Hosts;
