import React from "react";
import { Header } from "../../components/header/Header";
// @ts-ignore
import back from "../../assets/image/Rectangle 34.png";
import styles from "./main.module.sass";
import { Button } from "../../components/button/Button";
// @ts-ignore
import strelka from "../../assets/image/strelka.png";

export const Main = () => {
  return (
    <div>
      <Header />
      <img src={back} className={styles.back_image} />

      <p className={styles.main_text}>
        Платформа управления интернет-рекламой для медиаиздателей
      </p>

      <h4 className={styles.text}>
        Сервис позволяет владельцам сайтов, видеоресурсов и мобильных приложений
        управлять показами рекламы, собирать статистику и анализировать
        эффективность кампаний.
      </h4>

      <div className={styles.buttons_main}>
        <Button
          backgroundColor="#FFD11C"
          borderColor="#FFD11C"
          textColor="#141414"
          padding="23px 48px"
        >
          Зарегистрироваться
        </Button>
        <Button
          backgroundColor="transparent"
          borderColor="#F7F9FB"
          textColor="#F7F9FB"
          padding="23px 48px"
        >
          Войти
        </Button>
      </div>

      <img src={strelka} className={styles.strelka} />
    </div>
  );
};
