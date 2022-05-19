import PropTypes from 'prop-types';

import { Breadcrumb, BreadcrumbArrow, BreadcrumbItem } from 'components/breadcrumbs';
import { Employee, Layout, RestCells } from 'components';
import { TeamMenu, getRoleTitleByAlias } from 'components/TeamMenu';
import fetch from 'services/api';

const TeamList = ({ title, employees, role }) => (
  <Layout title={title}>
    <div className="bg-white pt-10">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem title="Радио классической музыки «Орфей»" href="/" />
          <BreadcrumbArrow />
          <BreadcrumbItem title="О нас" href="/about" />
          <BreadcrumbArrow />
        </Breadcrumb>
        <TeamMenu active={role} />
        <h1 className="py-8">{title}</h1>
        <div className="row align-items-start justify-content-between">
          {employees.map((item) => (
            <div className="col-3" key={item.id}>
              <Employee
                alias={item.alias}
                anons={item.anons}
                cover={item.cover}
                role={role}
                title={item.title}
              />
            </div>
          ))}
          <RestCells />
        </div>
      </div>
    </div>
  </Layout>
);

TeamList.getInitialProps = async (context) => {
  const { role } = context.query;
  const employees = await fetch(`/team/${role}`);
  return {
    title: getRoleTitleByAlias(role),
    employees,
    role,
  };
};

TeamList.propTypes = {
  title: PropTypes.string.isRequired,
  employees: PropTypes.array.isRequired,
  role: PropTypes.string.isRequired,
};

export default TeamList;
