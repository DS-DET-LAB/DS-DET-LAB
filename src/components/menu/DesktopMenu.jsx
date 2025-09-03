import { useLocation, useNavigate } from 'react-router-dom';
import * as D from '@components/menu/desktopMenuStyle';
import menuItemsData from '@db/menuItem.json';

const DesktopMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let currentMenuType = '';
  if (location.pathname.startsWith('/center')) {
    currentMenuType = 'center';
  } else if (location.pathname.startsWith('/business')) {
    currentMenuType = 'business';
  } else if (location.pathname.startsWith('/activity')) {
    currentMenuType = 'activity';
  } else if (location.pathname.startsWith('/community')) {
    currentMenuType = 'community';
  }

  const menuItems = menuItemsData[currentMenuType];

  const handleItemClick = (itemPath, itemHash) => {
    if (location.pathname === itemPath) {
      if (itemHash) {
        const element = document.getElementById(itemHash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      const targetPath = itemHash ? `${itemPath}#${itemHash}` : itemPath;
      navigate(targetPath);
    }
  };

  if (location.pathname === '/') {
    return null;
  }

  return (
    <D.SideFloat>
      <D.Title>
        {currentMenuType === 'center' && '센터 소개'}
        {currentMenuType === 'business' && '사업 안내'}
        {currentMenuType === 'activity' && '사업 활동'}
        {currentMenuType === 'community' && '커뮤니티'}
      </D.Title>
      <D.SubContainer>
        {menuItems?.map((item, idx) => {
          const Component = item.type === 'subtitle' ? D.SubTitle : D.Content;
          const isActive = location.hash === `#${item.hash}`;

          return (
            <Component key={idx} onClick={() => handleItemClick(item.path, item.hash)} $isActive={isActive}>
              {item.name}
            </Component>
          );
        })}
      </D.SubContainer>
    </D.SideFloat>
  );
};

export default DesktopMenu;
