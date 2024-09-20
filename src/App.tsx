import { Button } from "./components/button/Button";

export const App = () => {
  return (
    <>
      <Button
        backgroundColor="#FFD11C"
        borderColor="#FFD11C"
        textColor="#141414"
        margin="10px"
        padding="15px 30px"
      >
        Зарегистрироваться
      </Button>

      <Button
        backgroundColor="transparent"
        borderColor="#F7F9FB"
        textColor="#F7F9FB"
        margin="10px"
        padding="20px 52px"
      >
        Войти
      </Button>
    </>
  );
};