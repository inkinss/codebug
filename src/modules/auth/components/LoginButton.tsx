import { Button } from "@/components/ui/button";
import { useLogin } from "../hooks/useLogin";

const LoginButton = () => {

  const { login } = useLogin();

  return (
    <Button onClick={login} variant="link">
      Iniciar sesión
    </Button>
  );
};

export default LoginButton;
