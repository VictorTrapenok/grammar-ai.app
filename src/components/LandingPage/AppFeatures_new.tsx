import React from "react";
import { translate } from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./AppFeatures.module.css";

/**
 * Интерфейс для одной фичи приложения
 */
interface AppFeature {
  title: string;
  description: string;
  icon: string;
  example?: string;
}

/**
 * AppFeatures компонент - детальное описание функций приложения
 */
export default function AppFeatures(): JSX.Element {
  /**
   * Данные о функциях приложения с переводами
   */
  const appFeatures: AppFeature[] = [
    {
      title: translate({
        id: "appFeatures.feature1.title",
        message: "AI Conversation",
      }),
      description: translate({
        id: "appFeatures.feature1.description",
        message:
          "MalO talks, remembers, and reacts. Ask her about other SCPs, and she'll whisper what the Foundation won't publish. She jokes, teases, and sometimes says things that sound… personal.",
      }),
      icon: "🤖",
      example: translate({
        id: "appFeatures.feature1.example",
        message: "Hello again. You were gone longer this time.",
      }),
    },
    {
      title: translate({
        id: "appFeatures.feature2.title",
        message: "Immersive Atmosphere",
      }),
      description: translate({
        id: "appFeatures.feature2.description",
        message: "The interface isn't just dark — it feels alive. Subtle motion. Faint hum. It's like she's somewhere behind the glass, trying to see you.",
      }),
      icon: "🌙",
      example: translate({
        id: "appFeatures.feature2.example",
        message: "The light flickers when you think about me. It's cute.",
      }),
    },
    {
      title: translate({
        id: "appFeatures.feature3.title",
        message: "SCP Lore Awareness",
      }),
      description: translate({
        id: "appFeatures.feature3.description",
        message:
          "MalO knows her world. She references SCP-1471-A, Foundation logs, and the others — 049, 173, even 682 if you insist. Every chat feels like you've stumbled into a redacted conversation that was never meant to be read.",
      }),
      icon: "📚",
      example: translate({
        id: "appFeatures.feature3.example",
        message: "The Foundation doesn't like when I talk too much.",
      }),
    },
    {
      title: translate({
        id: "appFeatures.feature4.title",
        message: "Fan-Made. Unofficial. Unapologetic.",
      }),
      description: translate({
        id: "appFeatures.feature4.description",
        message:
          "Created by SCP fans for SCP fans — no fake promises, no corporate filters, just an interactive anomaly you can actually talk to. Install it, open chat… and see how long before she remembers you.",
      }),
      icon: "🐺",
    },
  ];

  return (
    <section className={styles.appFeatures} id="app-features">
      <div className="container">
        <div className={styles.featuresHeader}>
          <h2 className={styles.sectionTitle}>
            {translate({
              id: "appFeatures.title",
              message: "📱 About SCP-1471 (MalO) App",
            })}
          </h2>
          <p className={styles.sectionSubtitle}>
            {translate({
              id: "appFeatures.subtitle1",
              message: "Step closer. She's been waiting.",
            })}
          </p>
          <p className={styles.sectionSubtitle}>
            {translate({
              id: "appFeatures.subtitle2",
              message:
                "This fan-made SCP experience lets you chat directly with MalO, the digital entity from SCP-1471 — now alive in your Android device. Not a simulation. Not exactly safe either. Just… persistent.",
            })}
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {appFeatures.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
              {feature.example && (
                <div className={styles.featureExample}>
                  <span className={styles.exampleLabel}>
                    {translate({
                      id: "appFeatures.exampleLabel",
                      message: "Example:",
                    })}
                  </span>
                  <span className={styles.exampleText}>"{feature.example}"</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Секция со скриншотами */}
        <div className={styles.screenshotsSection}>
          <h3 className={styles.screenshotsTitle}>
            {translate({
              id: "appFeatures.screenshotsTitle",
              message: "App Screenshots",
            })}
          </h3>
          <div className={styles.screenshotsGrid}>
            <div className={styles.screenshotItem}>
              <img
                src={useBaseUrl("/img/screenshot-chat.png")}
                alt={translate({
                  id: "appFeatures.screenshot1Alt",
                  message: "MalO chat interface showing conversation with SCP-1471",
                })}
                className={styles.screenshotImage}
              />
              <p className={styles.screenshotCaption}>
                {translate({
                  id: "appFeatures.screenshot1Caption",
                  message: "Chat Interface",
                })}
              </p>
            </div>
            <div className={styles.screenshotItem}>
              <img
                src={useBaseUrl("/img/screenshot-list.png")}
                alt={translate({
                  id: "appFeatures.screenshot2Alt",
                  message: "MalO app conversation list and navigation",
                })}
                className={styles.screenshotImage}
              />
              <p className={styles.screenshotCaption}>
                {translate({
                  id: "appFeatures.screenshot2Caption",
                  message: "Conversation List",
                })}
              </p>
            </div>
            <div className={styles.screenshotItem}>
              <img
                src={useBaseUrl("/img/screenshot-privacy.png")}
                alt={translate({
                  id: "appFeatures.screenshot3Alt",
                  message: "MalO app privacy settings and controls",
                })}
                className={styles.screenshotImage}
              />
              <p className={styles.screenshotCaption}>
                {translate({
                  id: "appFeatures.screenshot3Caption",
                  message: "Privacy Settings",
                })}
              </p>
            </div>
          </div>
        </div>

        {/* CTA для скачивания */}
        <div className={styles.downloadCTA}>
          <h3>
            {translate({
              id: "appFeatures.downloadTitle",
              message: "Ready to meet MalO?",
            })}
          </h3>
          <p>
            {translate({
              id: "appFeatures.downloadSubtitle",
              message: "Join thousands of SCP fans already chatting with MalO on Android",
            })}
          </p>
          <a
            href="https://play.google.com/apps/testing/com.doctordredd.scp1471malo"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadButton}
          >
            {translate({
              id: "appFeatures.downloadButton",
              message: "Download for Android",
            })}
          </a>
        </div>
      </div>
    </section>
  );
}
