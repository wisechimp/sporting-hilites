import { ComponentPropsWithoutRef } from "react";

import "./styles.css";

const Heading2 = (props: ComponentPropsWithoutRef<"h2">) => {
  return <h2 className="heading2" {...props} />;
};

export default Heading2;
