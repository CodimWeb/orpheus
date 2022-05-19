import {
  Article,
  Image,
  Layout,
} from 'components';
import {
  Breadcrumb,
  BreadcrumbArrow,
  BreadcrumbItem,
} from 'components/breadcrumbs';
import fetch from 'services/api';

const Employee = (employee) => (
  <Layout title={employee.title}>
    <div className="bg-white py-10">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem title="Радио классической музыки «Орфей»" href="/" />
          <BreadcrumbArrow />
          <BreadcrumbItem title="О нас" href="/about" />
          <BreadcrumbArrow />
          <BreadcrumbItem title={employee.role.title} href={`/about/team/${employee.role.alias}`} />
          <BreadcrumbArrow />
        </Breadcrumb>
        <div className="row align-items-start my-6">
          <div className="col-10">
            <h1>{employee.title}</h1>
            {employee.lead && <p className="mt-7 h3">{employee.lead}</p>}
          </div>
          <div className="col-2 text-right">
            <Image
              width={260}
              title={employee.title}
              {...employee.photo}
            />
          </div>
        </div>
        <Article rawState={employee.description} />
      </div>
    </div>
  </Layout>
);

Employee.getInitialProps = async (context) => {
  const { role, alias } = context.query;
  return fetch(`/team/${role}/${alias}`);
};

export default Employee;
