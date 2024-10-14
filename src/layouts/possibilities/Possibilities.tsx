import styles from "./style.module.sass";

// @ts-ignore
import group1 from "../../assets/image/groups/Group 2.png";
// @ts-ignore
import group2 from "../../assets/image/groups/Group 3.png";
// @ts-ignore
import group3 from "../../assets/image/groups/Frame 17.png";

export const Possibilities = () => {
  return (
    <div className={styles.possib_container}>
      <p id="features" className={styles.possib_text}>
        Возможности AdRabbit
      </p>

      <div className={styles.groups}>
        <div className={styles.groups__first}>
          <img src={group1} className={styles.groups__first__photo} />

          <text className={styles.text_main}>
            Широкие возможности <br />
            таргетинга
          </text>

          <text className={styles.text}>
            Большой набор таргетингов и гибкие настройки позволяют выделить
            нужную аудиторию и фокусироваться на интересах каждого отдельного
            посетителя сайта или приложения.
          </text>
        </div>

        <div className={styles.groups__second}>
          <img src={group2} className={styles.groups__second__photo} />

          <text className={styles.text_main_2}>
            Монетизация в одном <br />
            интерфейсе
          </text>

          <text className={styles.text_2}>
            Управляйте programmatic-рекламой, прямыми продажами и собственными
            промокампаниями через сервис в едином интерфейсе с Рекламной сетью
            Яндекса.
          </text>
        </div>

        <div className={styles.groups__third}>
          <img src={group3} className={styles.groups__third__photo} />

          <p className={styles.groups__third_text}>03</p>

          <text className={styles.text_main_3}>
            Детальная рекламная <br />
            аналитика
          </text>

          <text className={styles.text_3}>
            Статистика по кампаниям, баннерам, разделам и площадкам позволяет
            оценивать ход кампании в реальном времени. Отчёты доступны в
            интерфейсе и в формате Excel.
          </text>
        </div>
      </div>
    </div>
  );
};