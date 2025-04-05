import style from "./style.module.sass";
// @ts-ignore
import back from "../../assets/image/background/back.png";

export const Subscribe = () => {
  return (
    <div className={style.wrapper}>
      <img src={back} className={style.back_image} alt="background" />
      <div className={style.content}>
        <div className={style.left}>
          <h2>
            Подпишитесь на новости
            <br />
            для владельцев сайтов
            <br />и мобильных приложений
          </h2>
          <p>
            И узнавайте о наших запусках
            <br />
            для эффективной монетизации
          </p>
        </div>
        <div className={style.right}>
          <input type="email" placeholder="Ваша почта" />
          <button>Подписаться</button>
          <small>
            Нажимая на кнопку, соглашаюсь на обработку
            <br />
            <a href="#">персональных данных</a>
          </small>
        </div>
      </div>
    </div>
  );
};