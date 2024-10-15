import style from "./style.module.sass";
import { FoldersMenu } from "../../components/folders_menu/FoldersMenu";
import { Button } from "../../components/button/Button";
// @ts-ignore
import procent from "../../assets/image/Monet Image.png";

export const Monetization: React.FC = () => {
  const items = [
    {
      title: "Бизнес-модели монетизации",
      content:
        "Управляйте programmatic-рекламой, прямыми продажами и собственными промокампаниями через сервис в едином интерфейсе с Рекламной сетью Яндекса",
    },
    {
      title: "Динамическая монетизация",
      content:
        "Статистика по кампаниям, баннерам, разделам и площадкам позволяет оценивать ход кампании в реальном времени. Отчёты доступны в интерфейсе и в формате Excel.",
    },
    {
      title: "Технология Header Bidding",
      content:
        "Programmatic-технология, которая позволяет издателям одновременно принимать ставки различных DSP-систем и сравнивать их в едином аукционе Динамической монетизации.",
    },
  ];

  return (
    <div className={style.monet_container}>
      <p id="monetization" className={style.monetization}>
        Продвинутая монетизация с AdRabbit
      </p>

      <img src={procent} className={style.procent} />

      <div className={style.folders}>
        {items.map((item, index) => (
          <FoldersMenu key={index} title={item.title} content={item.content} />
        ))}
      </div>

      <div className={style.button}>
        <Button
          backgroundColor="#FFD11C"
          borderColor="#FFD11C"
          textColor="#141414"
          padding="15px 188px"
        >
          Больше о монетизации
        </Button>
      </div>
    </div>
  );
};