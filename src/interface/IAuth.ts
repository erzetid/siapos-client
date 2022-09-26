import { ERole, EStatus } from "../util/Enum";

export default interface IAuth {
  id: string;
  userId: string;
  email: string;
  password: string;
  role: ERole;
  status: EStatus;
}
