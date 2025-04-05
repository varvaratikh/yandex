import style from "./style.module.sass";
// @ts-ignore
import first from "../../assets/image/icons/Vector.png";
// @ts-ignore
import second from "../../assets/image/icons/Vector-1.png";
// @ts-ignore
import third from "../../assets/image/icons/Vector-2.png";
// @ts-ignore
import four from "../../assets/image/icons/computer-svgrepo-com.png";

export const Ad = () => {
  return (
    <div className={style.ad_container}>
      <p id="formats" className={style.ad_text}>
        Реклама, которую вы cможете создать
      </p>

      <div className={style.big_containers}>
        <div className={style.big_containers_first}>
          <img src={first} className={style.photo} />
          <p className={style.text_main}>Баннерная реклама</p>
          <div>
            <p className={style.text}>
              Баннер с картинкой, перетяжка, баннер с расхлопом, интерактивный
              HTML5-баннер.
            </p>
          </div>
        </div>

        <div className={style.big_containers_second}>
          <img src={second} className={style.photo_2} />
          <p className={style.text_main}>Реклама в приложениях</p>
          <p className={style.text}>
            Баннерная, полноэкранная, нативная реклама, интерактивный HTML5
            баннер, видео в плеере.
          </p>
        </div>
      </div>

      <div className={style.small_containers}>
        <div className={style.small_containers_first}>
          <img src={third} className={style.photo} />
          <p className={style.text_main}>Брендированные страницы</p>
          <p className={style.text}>
            Брендирование страницы с помощью баннеров и замены бэкграунда сайта.
          </p>
        </div>

        <div className={style.small_containers_second}>
          <img src={four} className={style.photo} />
          <p className={style.text_main}>Видеореклама</p>
          <p className={style.text_2}>Видео в баннере, InPage, InStream.</p>
        </div>
      </div>
    </div>
  );
};