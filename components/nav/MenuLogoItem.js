import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { SvgIcon } from 'components';
import { MenuItem, MenuItemBands } from 'components/nav';
import { Player } from 'components/player';
import { onEnterOrSpacePress } from 'services/keyboard';

const MenuLogoItem = ({ icon, router }) => {
  const [isMenuShown, setMenuShown] = useState(false);

  const toggleMenu = useCallback(() => {
    document.body.classList.toggle('open-player');
    setMenuShown((v) => !v);
  }, [setMenuShown]);

  return (
    <>
      <div
        onClick={toggleMenu}
        className="Nav-link Nav-menuToggle"
        role="button"
        tabIndex="-1"
        onKeyPress={onEnterOrSpacePress(toggleMenu)}
      >
        <SvgIcon name={icon} />
      </div>
      {isMenuShown
        && (
        <div className="Nav-menu">
          <div className="container pt-4">
            <Player showVol />
            <div className="mb-8" />
            <MenuItem router={router} title="Сетка вещания" href="/schedule" />
            <MenuItem router={router} title="Программы" href="/programs" />
            <MenuItem router={router} title="События" href="/news" />
            <MenuItem router={router} title="Спецпроекты" href="/special" />
            <MenuItem router={router} title="О нас" href="/about" />
            {/* <MenuItem router={router} title="Энциклопедия персон" href="/persons" /> */}
            <MenuItemBands />
          </div>
        </div>
        )}
    </>
  );
};

MenuLogoItem.propTypes = {
  icon: PropTypes.string.isRequired,
  router: PropTypes.object.isRequired,
};

export default MenuLogoItem;
