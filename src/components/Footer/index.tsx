import { fetchMenu } from "@/actions";

import MenuItem from "../Menu/menu-item";
import * as styles from "./footer.module.css";

const Footer = () => {
  const menuData = fetchMenu();
  const homeMenuData = menuData[0];
  const [, ...sportMenuData] = menuData;

  return (
    <footer>
      <div className={styles.footerContainer}>
        <MenuItem data={homeMenuData} />
        <div>
          {sportMenuData.map((item) => {
            return (
              <div key={item.id} className={styles.footerMenuItemContainer}>
                <MenuItem data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
