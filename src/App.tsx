import { Button } from "./components/button/Button";

export const App = () => {
  return (
    <>
      <Button
        backgroundColor="var(--yellow)"
        textColor="var(--black)"
        margin="10px"
        padding="15px 30px"
      >
        Зарегистрироваться
      </Button>

      <Button
        backgroundColor="var(--transparent)"
        borderColor="var(--light-gray)"
        textColor="var(--light-gray)"
        margin="10px"
        padding="20px 52px"
      >
        Войти
      </Button>
    </>
  );
};