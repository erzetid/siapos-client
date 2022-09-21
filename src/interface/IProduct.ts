import { EPaymentType, EStatus } from "../util/Enum";

export interface IStock {
  in: number;
  out: number;
  createdAt: string;
}

export interface IDistributor {
  name: string;
  link: string;
  address: string;
}

export interface IPrice {
  buyPrice: number;
  buyPricePPN: number;
  sellPrice: number;
  sellPricePPN: number;
  discount: { amount: number; description: string };
}

export default interface IProduct {
  id: string;
  code: string;
  name: string;
  description: string;
  brand: string;
  distributor: IDistributor;
  stock: IStock;
  price: IPrice;
  createdAt: number;
  updatedAt: number;
  notes?: string;
  status: EStatus;
  setting: { show: boolean; paymentType: EPaymentType };
}
