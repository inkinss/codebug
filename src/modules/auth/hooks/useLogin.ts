import { signIn } from "@/lib/auth-client";

export const useLogin = () => {
  const login = async () => {
    await signIn.social({
      provider: "github",
      callbackURL: "http://localhost:3000/",
    });
  };
  return { login };
};
