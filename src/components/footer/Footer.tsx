import style from "./style.module.sass";
// @ts-ignore
import back from "../../assets/image/background/footer.png";
import React from "react";
import { Button } from "../button/Button";

export const Footer = () => {
  return (
    <div className={style.footer}>
      <img src={back} className={style.back_image} />

      <div className={style.absolute}>
        <p className={style.yandex}>
          Присоединяйтесь к Рекламной сети <br />
          Яндекса, чтобы использовать <br />
          инструменты AdRabbit
        </p>

        <div className={style.center}>
          <Button
            backgroundColor="#FFD11C"
            borderColor="#FFD11C"
            textColor="#141414"
            padding="20px 40px"
          >
            Присоединиться
          </Button>
        </div>

        <nav className={style.nav}>
          <ul className={style.menu}>
            <li>
              <a href="#features">Возможности</a>
            </li>
            <li>
              <a href="#monetization">Монетизация</a>
            </li>
            <li>
              <a href="#formats">Форматы</a>
            </li>
            <li>
              <a href="#partners">Партнеры</a>
            </li>
          </ul>
        </nav>

        <p className={style.year}>2024</p>
      </div>
    </div>
  );
};