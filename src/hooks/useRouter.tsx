import { useContext } from "react";
import { RouterContext } from "../components/Router";

export const useRouter = () => {
  return useContext(RouterContext) as { push: (path: string) => void };
};
