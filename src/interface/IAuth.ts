import { ERole, EStatus } from "../util/Enum";

export default interface IAuth {
  id: string;
  userId: string;
  username: string;
  password: string;
  role: ERole;
  status: EStatus;
}
