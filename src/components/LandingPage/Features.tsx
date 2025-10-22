import React from "react";
import styles from "./Features.module.css";

/**
 * Interface for one feature card
 */
interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

/**
 * Key features of the application
 */
const featuresList: FeatureItem[] = [
  {
    title: "Grammar Correction",
    description: "AI instantly fixes spelling, grammar, and punctuation errors in your text.",
    icon: "✍️",
  },
  {
    title: "AI Translation",
    description: "Translate text between multiple languages with high accuracy.",
    icon: "🌐",
  },
  {
    title: "Simple Interface",
    description: "Two text fields: paste your text, get the corrected version. That's it.",
    icon: "⚡",
  },
  {
    title: "Privacy First",
    description: "Your text is processed in real-time and never stored on our servers.",
    icon: "🔒",
  },
];

/**
 * Features component - block with key advantages
 */
export default function Features(): JSX.Element {
  return (
    <section className={styles.features} id="features">
      <div className="container">
        <h2 className={styles.featuresTitle}>Why Choose Grammar AI?</h2>

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
