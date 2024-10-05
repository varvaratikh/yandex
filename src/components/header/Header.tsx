import styles from "./header.module.sass";
import React from "react";
import { Button } from "../button/Button";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>AdRabbit</div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
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
      <div className={styles.buttons}>
        <Button
          backgroundColor="transparent"
          borderColor="#F7F9FB"
          textColor="#F7F9FB"
          padding="15px 30px"
        >
          Войти
        </Button>
        <Button
          backgroundColor="#FFD11C"
          borderColor="#FFD11C"
          textColor="#141414"
          padding="15px 20px"
        >
          Зарегистрироваться
        </Button>
      </div>
    </header>
  );
};
