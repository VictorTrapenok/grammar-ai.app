import React, { useState, useEffect } from "react";
import { translate } from "@docusaurus/Translate";
import styles from "./StickyMobileCTA.module.css";
import { trackGooglePlayVisit } from "@site/src/utils/utils";

/**
 * Компонент StickyMobileCTA - "липкая" кнопка внизу экрана на мобильных устройствах
 * Показывается только когда пользователь прокрутил страницу вниз
 */
export default function StickyMobileCTA(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Показываем кнопку после прокрутки на 300px
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Обработчик клика по липкой кнопке
   */
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Отправляем событие в Яндекс.Метрику
    trackGooglePlayVisit("sticky-mobile");
  };

  return (
    <div className={`${styles.stickyContainer} ${isVisible ? styles.visible : ""}`}>
      <a
        href="https://play.google.com/apps/testing/com.doctordredd.scp1471malo"
        className={styles.stickyButton}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        {translate({
          id: "stickyMobileCTA.joinBeta",
          message: "📱 Join Beta on Google Play",
        })}
      </a>
    </div>
  );
}
