import { BroadcastCity, Layout, MobileApps } from 'components';
import { Breadcrumb, BreadcrumbArrow, BreadcrumbItem } from 'components/breadcrumbs';

const Broadcast = () => (
  <Layout title="Города вещания">
    <div className="container py-8">
      <Breadcrumb>
        <BreadcrumbItem title="Радио классической музыки «Орфей»" href="/" />
        <BreadcrumbArrow />
        <BreadcrumbItem title="О нас" href="/about" />
        <BreadcrumbArrow />
      </Breadcrumb>
      <h1 className="h1-a">Города вещания</h1>
      <p className="my-4">Радиостанция «Орфей» доступна подписчикам «Радиопакета» «Триколор ТВ».</p>
      <div className="row align-items-start">
        <div className="col-6">
          <BroadcastCity name="Москва" freq="99,2 FM" kw="5 кВт" />
          <hr className="mb-5" />
          <BroadcastCity name="Волгоград" freq="71,33 УКВ" kw="2 кВт" />
          <hr className="mb-5" />
          <BroadcastCity name="Екатеринбург" freq="69,92 УКВ" kw="4 кВт" />
          <hr className="mb-5" />
          <BroadcastCity name="Курган" freq="106,0 FM" kw="1 кВт" />
          <hr className="mb-5" />
          <BroadcastCity name="Липецк" freq="70,07 УКВ" kw="1 кВт" />
        </div>
        <div className="col-2" />
        <div className="col-6">
          <BroadcastCity name="Пермь" freq="66,80 УКВ" kw="4 кВт" />
          <hr className="mb-5" />
          <BroadcastCity name="Смоленск" freq="104,3 FM" kw="0.5 кВт" />
          <hr className="mb-5" />
          <BroadcastCity name="С.Петербург" freq="71,66 УКВ" kw="15 кВт" />
          <hr className="mb-5" />
          <BroadcastCity name="Тула" freq="71,93 УКВ" kw="4 кВт" />
        </div>
      </div>
      <p className="mt-4 mb-3">
        Для доставки сигнала радиопрограммы «Орфей» используется спутниковый канал.<br />
        Параметры приема спутника Ямал-202 (Yamal 202): 49.0<sup>0</sup> / Частота 3743L.
        {' '}
        S/R 34075 kbps. FEC 3/4. Наименование канала &ndash; Radio CH10.
      </p>
      <p className="mt-3 mb-4">Кроме того, Вы имеете возможность слушать радиопрограммы «Орфей» на сайте.</p>
    </div>
    <MobileApps />
  </Layout>
);

export default Broadcast;
