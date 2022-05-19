import { Image, Layout } from 'components';
import { Breadcrumb, BreadcrumbArrow, BreadcrumbItem } from 'components/breadcrumbs';

// @todo заменить на управляемый список

const Partner = (partner) => (
  <div className="col-3">
    <article className="Card mb-9">
      <div className="Card-img mb-3 is-square">
        <a href={partner.site} rel="noopener noreferrer" target="_blank">
          <Image
            style={{ cursor: 'pointer' }}
            className="img-cover"
            height={260}
            width={260}
            title={partner.title}
            {...partner.cover}
          />
        </a>
      </div>
      <div className="Card-body">
        <h3 className="h3 pt-1 pb-2">
          <a href={partner.site} rel="noopener noreferrer" target="_blank">
            {partner.title}
          </a>
        </h3>
        <p>{partner.anons}</p>
      </div>
    </article>
  </div>
);

const Partners = () => (
  <Layout title="Партнёры">
    <div className="bg-white pt-10">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem title="Радио классической музыки «Орфей»" href="/" />
          <BreadcrumbArrow />
          <BreadcrumbItem title="О нас" href="/about" />
          <BreadcrumbArrow />
        </Breadcrumb>
        <h1 className="pb-7">Партнёры</h1>
        <div className="row align-items-start justify-content-between">
          <Partner
            title="ICMA"
            anons="Международная премия ICMA - единственная независимая международная награда в области классической музыки. В состав жюри входят профессиональные музыкальные критики из самых крупных музыкальных журналов, онлайн-сервисов и радиостанций, в том числе радиостанции «Орфей»."
            site="http://www.icma-info.com/"
          />
          <Partner
            title="Европейский вещательный союз (EBU)"
            site="http://www.ebu.ch/"
          />
          <Partner
            title="Российская библиотечная ассоциация (РБА)"
            site="http://www.rba.ru/"
          />
          <Partner
            title="Фонотрон"
            site="http://www.fonotron.ru/"
          />
        </div>
      </div>
    </div>
  </Layout>
);

export default Partners;
