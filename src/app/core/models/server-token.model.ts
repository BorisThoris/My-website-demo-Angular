import { User } from "../../user";

export interface ServerToken {
  exp: number;
  iat: number;
  sub: string;
  user: User;
}