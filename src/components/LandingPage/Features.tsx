import React from "react";
import { translate } from "@docusaurus/Translate";
import styles from "./Features.module.css";

/**
 * Интерфейс для одной карточки фичи
 */
interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

/**
 * Данные о ключевых особенностях приложения
 */
const getFeaturesList = (): FeatureItem[] => [
  {
    title: translate({
      id: "homepage.features.talkBack.title",
      message: "She Talks Back",
    }),
    description: translate({
      id: "homepage.features.talkBack.description",
      message: "Chat with MalO — she remembers you, jokes about other SCPs, and sometimes tells things she shouldn't.",
    }),
    icon: "💬",
  },
  {
    title: translate({
      id: "homepage.features.alwaysWith.title",
      message: "Always With You",
    }),
    description: translate({
      id: "homepage.features.alwaysWith.description",
      message: "MalO slips into your messages like she's always been there. Works perfectly on Android — naturally.",
    }),
    icon: "📱",
  },
  {
    title: translate({
      id: "homepage.features.fanCreation.title",
      message: "A Fan Creation",
    }),
    description: translate({
      id: "homepage.features.fanCreation.description",
      message: "Made by SCP enthusiasts who decided to see what would happen if MalO could actually reply.",
    }),
    icon: "🕯️",
  },
  {
    title: translate({
      id: "homepage.features.evolving.title",
      message: "Ever-Evolving",
    }),
    description: translate({
      id: "homepage.features.evolving.description",
      message: "New dialogue, stories, and eerie SCP references appear over time. She's learning. Slowly.",
    }),
    icon: "🧩",
  },
];

/**
 * Компонент Features - блок с ключевыми преимуществами
 */
export default function Features(): JSX.Element {
  const featuresList = getFeaturesList();

  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.featuresTitle}>
          {translate({
            id: "homepage.features.title",
            message: "Why talk to MalO?",
          })}
        </h2>

        <div className={styles.featuresGrid}>
          {featuresList.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
