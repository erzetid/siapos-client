import IAddress from "./IAddress";
export default interface IUser {
  id: string;
  name: string;
  image: string;
  address: IAddress;
}
