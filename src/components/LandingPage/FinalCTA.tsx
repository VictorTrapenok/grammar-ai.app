import React from "react";
import { translate } from "@docusaurus/Translate";
import styles from "./FinalCTA.module.css";
import BetaPlayButton from "./BetaPlayButton";

/**
 * Компонент FinalCTA - финальный призыв к действию
 */
export default function FinalCTA(): JSX.Element {
  return (
    <section className={styles.finalCTA}>
      <div className="container">
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            {translate({
              id: "finalCTA.title",
              message: "Ready to Chat with MalO?",
            })}
          </h2>

          <BetaPlayButton showMicroText={false} location="final-cta" />

          <p className={styles.ctaSubtitle}>
            {translate({
              id: "finalCTA.subtitle",
              message: "Fan-made SCP-1471 chat app for Android • Currently in Beta",
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
