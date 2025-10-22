import React from "react";
import styles from "./HowItWorks.module.css";

/**
 * Interface for one instruction step
 */
interface Step {
  number: number;
  title: string;
  description: string;
}

/**
 * HowItWorks component - application usage instructions
 */
export default function HowItWorks(): JSX.Element {
  /**
   * Application usage steps
   */
  const steps: Step[] = [
    {
      number: 1,
      title: "Enter Your Text",
      description: "Paste or type your text in the first field.",
    },
    {
      number: 2,
      title: "Click Check",
      description: "AI analyzes and corrects grammar, spelling, and punctuation errors.",
    },
    {
      number: 3,
      title: "Get Results",
      description: "Receive corrected text in the second field. Copy and use it anywhere.",
    },
  ];

  return (
    <section className={styles.howItWorks} id="how-it-works">
      <div className="container">
        <h2 className={styles.sectionTitle}>How It Works</h2>

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
