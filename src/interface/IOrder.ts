import { EOrderType, EOrderStatus } from "../util/Enum";
import IAddress from "./IAddress";
import IProduct from "./IProduct";
import IUser from "./IUser";

export default interface IOrder {
  no: string;
  buyer: IUser;
  shippingAddress: IAddress;
  products: [{ product: IProduct; quantity: number }];
  type: EOrderType;
  status: EOrderStatus;
}
