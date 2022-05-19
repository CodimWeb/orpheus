import InlineSVG from 'svg-inline-react';

const Social = () => (
  <>
    <a
      href="https://vk.com/club27291202"
      target="_blank"
      rel="noreferrer noopener"
      className="Footer-social is-vk"
    >
      <InlineSVG src={require('../../static/svg/vk.svg')} />
    </a>
    <a
      href="https://www.facebook.com/orpheus.radio"
      target="_blank"
      rel="noreferrer noopener"
      className="Footer-social is-fb"
    >
      <InlineSVG src={require('../../static/svg/fb.svg')} />
    </a>
    <a
      href="https://www.ok.ru/group/52712561508543"
      target="_blank"
      rel="noreferrer noopener"
      className="Footer-social is-twi"
    >
      <InlineSVG src={require('../../static/svg/twi.svg')} />
    </a>
  </>
);

export default Social;
