import React from "react";
import { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./Screenshots.module.css";

/**
 * Интерфейс для одного скриншота
 */
interface Screenshot {
  src: string;
  alt: string;
  caption: string;
}

/**
 * Компонент Screenshots - галерея скриншотов приложения
 */
export default function Screenshots(): JSX.Element {
  /**
   * Список скриншотов приложения с переводами
   */
  const screenshots: Screenshot[] = [
    {
      src: useBaseUrl("/img/screenshot-chat.png"),
      alt: translate({
        id: "screenshots.screenshot1Alt",
        message: "SCP-1471 chat app screenshot - conversation with MalO",
      }),
      caption: translate({
        id: "screenshots.screenshot1Caption",
        message: "Chat with MalO",
      }),
    },
    {
      src: useBaseUrl("/img/screenshot-list.png"),
      alt: translate({
        id: "screenshots.screenshot2Alt",
        message: "SCP-1471 MalO app screenshot - chat list interface",
      }),
      caption: translate({
        id: "screenshots.screenshot2Caption",
        message: "Clean chat list",
      }),
    },
    {
      src: useBaseUrl("/img/screenshot-privacy.png"),
      alt: translate({
        id: "screenshots.screenshot3Alt",
        message: "MalO Android app screenshot - privacy and license information",
      }),
      caption: translate({
        id: "screenshots.screenshot3Caption",
        message: "Privacy? Of cose - no. It is SCP-1471 Malo",
      }),
    },
  ];

  return (
    <section className={styles.screenshots}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          {translate({
            id: "screenshots.title",
            message: "Inside the App",
          })}
        </h2>

        <div className={styles.screenshotsGrid}>
          {screenshots.map((screenshot, idx) => (
            <div key={idx} className={styles.screenshotCard}>
              <div className={styles.screenshotWrapper}>
                <img src={screenshot.src} alt={screenshot.alt} className={styles.screenshotImage} loading="lazy" />
              </div>
              <p className={styles.screenshotCaption}>{screenshot.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
