import { authOption } from "./authOption";
import { getServerSession } from "next-auth";

export const getUserSession = async () => {
  const session = await getServerSession(authOption);
  const user = session?.user;
  return user;
};
