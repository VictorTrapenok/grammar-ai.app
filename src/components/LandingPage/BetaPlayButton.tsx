import React from "react";
import { translate } from "@docusaurus/Translate";
import styles from "./BetaPlayButton.module.css";
import { trackGooglePlayVisit } from "@site/src/utils/utils";

/**
 * Интерфейс пропсов для кнопки бета-доступа
 */
interface BetaPlayButtonProps {
  /** Показывать ли микро-текст о лимитированном доступе */
  showMicroText?: boolean;
  /** Дополнительный CSS класс */
  className?: string;
  /** Местоположение кнопки для аналитики */
  location?: string;
}

/**
 * Компонент BetaPlayButton - кнопка для присоединения к бета-тестированию
 * Используется вместо обычной кнопки Google Play, когда приложение в бете
 */
export default function BetaPlayButton({ showMicroText = true, className = "", location = "unknown" }: BetaPlayButtonProps): JSX.Element {
  /**
   * Обработчик клика по кнопке - отправляет аналитику в Яндекс.Метрику
   */
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Отправляем событие в Яндекс.Метрику
    trackGooglePlayVisit(location);

    // Не предотвращаем переход по ссылке - пусть откроется в новой вкладке
  };

  return (
    <div className={`${styles.betaButtonContainer} ${className}`}>
      <a
        href="https://play.google.com/apps/testing/com.doctordredd.scp1471malo"
        className={styles.playBtn}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        {translate({
          id: "betaPlayButton.joinBeta",
          message: "Join the Beta on Google Play",
        })}
      </a>

      {showMicroText && (
        <p className={styles.microText}>
          {translate({
            id: "betaPlayButton.microText",
            message: "Limited beta access — availability may vary.",
          })}
        </p>
      )}
    </div>
  );
}
