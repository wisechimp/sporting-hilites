import Hamburger from "./hamburger";
import MenuList from "./menu-list";
import * as styles from "./menu.module.css";

const Menu = () => {
  return (
    <nav className={styles.menuContainer}>
      <MenuList desktop={true} />
      <div>
        <Hamburger />
      </div>
    </nav>
  );
};

export default Menu;
