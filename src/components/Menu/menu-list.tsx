import { fetchMenu } from "@/actions";

import MenuItem from "./menu-item";

type MenuListProps = {
  desktop: boolean;
};

const MenuList = ({ desktop }: MenuListProps) => {
  const menuData = fetchMenu();
  const menuListStyle = desktop ? "menuListDesktop" : "menuListMobile";

  return (
    <div className={menuListStyle}>
      {menuData.map((menuItem) => {
        return <MenuItem key={menuItem.id} data={menuItem} />;
      })}
    </div>
  );
};

export default MenuList;
