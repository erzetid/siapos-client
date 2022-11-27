import { ReactNode } from 'react';
import { FiCodesandbox, FiShoppingCart } from 'react-icons/fi';
import { IconType } from 'react-icons';
import Product from '../page/product';
import Order from '../page/order';
import AddProduct from '../page/product/add';

interface LinkProps {
  name: string;
  path: string;
  element: ReactNode;
}
interface LinkItemProps extends LinkProps {
  icon: IconType;
}

const LinkItems: LinkItemProps[] = [
  {
    name: 'Produk',
    path: 'product',
    icon: FiCodesandbox,
    element: <Product />,
  },
  {
    name: 'Pesanan',
    path: 'order',
    icon: FiShoppingCart,
    element: <Order />,
  },
];

export const LinkSubItems: LinkProps[] = [
  {
    name: 'Tambah Produk',
    path: 'product/add',
    element: <AddProduct />,
  },
];

export default LinkItems;
