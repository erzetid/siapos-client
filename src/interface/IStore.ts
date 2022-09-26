import IAddress from "./IAddress";

export interface IStore {
  userId: string;
  address: IAddress;
  originShipping: string;
}
