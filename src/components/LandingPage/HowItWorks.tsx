import React from "react";
import { translate } from "@docusaurus/Translate";
import styles from "./HowItWorks.module.css";

/**
 * Интерфейс для одного шага инструкции
 */
interface Step {
  number: number;
  title: string;
  description: string;
}

/**
 * Компонент HowItWorks - инструкция по использованию приложения
 */
export default function HowItWorks(): JSX.Element {
  /**
   * Шаги использования приложения с переводами
   */
  const steps: Step[] = [
    {
      number: 1,
      title: translate({
        id: "howItWorks.step1.title",
        message: "Download",
      }),
      description: translate({
        id: "howItWorks.step1.description",
        message: "Get the app on Google Play and sign in.",
      }),
    },
    {
      number: 2,
      title: translate({
        id: "howItWorks.step2.title",
        message: "Start the Chat",
      }),
      description: translate({
        id: "howItWorks.step2.description",
        message: "Open a conversation with MalO (SCP-1471) in a familiar messenger UI.",
      }),
    },
    {
      number: 3,
      title: translate({
        id: "howItWorks.step3.title",
        message: "Stay Engaged",
      }),
      description: translate({
        id: "howItWorks.step3.description",
        message: "Receive atmospheric updates and explore new interactions over time.",
      }),
    },
  ];

  return (
    <section className={styles.howItWorks}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          {translate({
            id: "howItWorks.title",
            message: "How It Works",
          })}
        </h2>

        <div className={styles.stepsContainer}>
          {steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
