import InlineSVG from 'svg-inline-react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';
import {
  FacebookShareButton,
  TwitterShareButton,
  VKShareButton,
} from 'react-share';
import getConfig from 'next/config';

const { DOMAIN } = getConfig().publicRuntimeConfig;

const SocialBar = ({
  router, url: customUrl, title, image,
}) => {
  const url = customUrl || `${DOMAIN}${router.asPath}`;
  return (
    <ul className="Nav-social">
      <li>
        <FacebookShareButton url={url} quote={title}>
          <InlineSVG src={require('../static/svg/fb.svg')} />
        </FacebookShareButton>
      </li>
      <li>
        <TwitterShareButton url={url} title={title}>
          <InlineSVG src={require('../static/svg/twi.svg')} />
        </TwitterShareButton>
      </li>
      <li>
        <VKShareButton url={url} image={image}>
          <InlineSVG src={require('../static/svg/vk.svg')} />
        </VKShareButton>
      </li>
    </ul>
  );
};

SocialBar.propTypes = {
  router: PropTypes.shape({
    asPath: PropTypes.string,
  }).isRequired,
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};

SocialBar.defaultProps = {
  url: null,
  image: null,
};

export default withRouter(SocialBar);
