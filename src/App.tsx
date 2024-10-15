import { Main } from "./layouts/main/Main";
import { Possibilities } from "./layouts/possibilities/Possibilities";
import { Monetization } from "./layouts/monetization/Monetization";

export const App = () => {
  return (
    <div>
      <Main />
      <Possibilities />
      <Monetization />
    </div>
  );
};