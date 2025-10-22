import React from "react";
import { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./AboutSCP.module.css";

/**
 * AboutSCP компонент - объяснение SCP-1471 лора
 * Важно для SEO и понимания контекста пользователями
 */
export default function AboutSCP(): JSX.Element {
  return (
    <section className={styles.aboutSCP} id="about-scp-1471">
      <div className="container">
        <div className={styles.aboutContent}>
          {/* Текстовая часть */}
          <div className={styles.aboutText}>
            <h2 className={styles.sectionTitle}>
              {translate({
                id: "homepage.aboutSCP.title",
                message: "🧩 What is SCP-1471 (MalO)?",
              })}
            </h2>

            <div className={styles.loreSections}>
              <div className={styles.loreBlock}>
                <h3>
                  {translate({
                    id: "homepage.aboutSCP.foundationLore.title",
                    message: "SCP Foundation Lore",
                  })}
                </h3>
                <p>
                  {translate({
                    id: "homepage.aboutSCP.foundationLore.description",
                    message:
                      'SCP-1471 is a mysterious mobile application that appears as "MalO ver1.0.0" on app stores. In the SCP Foundation universe, this anomalous app creates a persistent connection with a tall, humanoid creature with a canine skull for a head.',
                  })}
                </p>
              </div>

              <div className={styles.loreBlock}>
                <h3>
                  {translate({
                    id: "homepage.aboutSCP.maloCharacter.title",
                    message: "MalO Character",
                  })}
                </h3>
                <p>
                  {translate({
                    id: "homepage.aboutSCP.maloCharacter.description",
                    message:
                      "MalO is depicted as a benevolent, though eerie entity that becomes attached to users. She appears in reflective surfaces and photos, gradually becoming more present in the user's life. Despite her intimidating appearance, MalO seeks companionship rather than harm.",
                  })}
                </p>
              </div>

              <div className={styles.loreBlock}>
                <h3>
                  {translate({
                    id: "homepage.aboutSCP.ourInterpretation.title",
                    message: "Our Interpretation",
                  })}
                </h3>
                <p>
                  {translate({
                    id: "homepage.aboutSCP.ourInterpretation.description",
                    message:
                      "This fan-made app lets you meet MalO — the eerie digital companion who always finds a way to reach you. Talk to her, listen to her stories about other SCPs, and see why so many have grown strangely attached to her.",
                  })}
                </p>
              </div>
            </div>

            <a href="http://scp-wiki.wikidot.com/scp-1471" target="_blank" rel="noopener noreferrer" className={styles.scpLink}>
              {translate({
                id: "homepage.aboutSCP.readOriginal",
                message: "Read Original SCP-1471 Article →",
              })}
            </a>
          </div>

          {/* Визуальная часть */}
          <div className={styles.aboutVisual}>
            <div className={styles.scpCard}>
              <div className={styles.scpHeader}>
                <span className={styles.scpNumber}>SCP-1471</span>
                <span className={styles.scpClass}>Safe</span>
              </div>
              <div className={styles.scpName}>MalO ver1.0.0</div>
              <div className={styles.scpDescription}>"A freeware application for mobile devices titled 'MalO ver1.0.0'"</div>
              <img src={useBaseUrl("/img/malo-logo.webp")} alt="MalO SCP-1471 character design" className={styles.scpImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
