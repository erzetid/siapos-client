import { ReactNode } from "react";
import { FiCodesandbox, FiShoppingCart } from "react-icons/fi";
import { IconType } from "react-icons";
import Product from "../page/product";
import Order from "../page/order";

interface LinkItemProps {
  name: string;
  path: string;
  icon: IconType;
  element: ReactNode;
}

const LinkItems: Array<LinkItemProps> = [
  {
    name: "Produk",
    path: "product",
    icon: FiCodesandbox,
    element: <Product />,
  },
  {
    name: "Pesanan",
    path: "order",
    icon: FiShoppingCart,
    element: <Order />,
  },
];

export default LinkItems;
