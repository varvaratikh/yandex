import { Main } from "./layouts/main/Main";
import { Possibilities } from "./layouts/possibilities/Possibilities";
import { Monetization } from "./layouts/monetization/Monetization";
import { Ad } from "./layouts/ad/Ad";
import { Subscribe } from "./layouts/subscribe/Subscribe";

export const App = () => {
  return (
    <div>
      <Main />
      <Possibilities />
      <Monetization />
      <Ad />
      <Subscribe />
    </div>
  );
};