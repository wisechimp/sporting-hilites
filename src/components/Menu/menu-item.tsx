import Link from "next/link";

import MenuItemType from "@/types/menu-item";

type MenuItemProps = {
  data: MenuItemType;
};

const MenuItem = ({ data }: MenuItemProps) => {
  const { Icon, title, slug } = data;

  return (
    <div>
      <Icon />
      <Link href={slug}>{title}</Link>
    </div>
  );
};

export default MenuItem;
