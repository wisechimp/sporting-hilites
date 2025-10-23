import { MDXComponents } from "mdx/types";

import Heading2 from "./components/MdxCustomisation/heading";

const useMDXComponents = (components: MDXComponents) => {
  return {
    h2: Heading2,
    ...components,
  };
};

export { useMDXComponents };
